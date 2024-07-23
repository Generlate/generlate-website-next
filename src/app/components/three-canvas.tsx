'use client'

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface ThreeCanvasProps {
    modelPath: string;
    theme: string;
    className: string;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ modelPath, theme }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null!);
    const objRef = useRef<THREE.Group | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = canvas?.parentElement;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 10;
        camera.position.y = 6;

        const loader = new GLTFLoader();
        loader.load(modelPath, (gltf) => {
            gltf.scene.position.set(0, 0, 0);
            scene.add(gltf.scene);
            objRef.current = gltf.scene;
        });

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setClearColor(theme === "light" ? 0xEDF7FC : 0x101010, 0);

        const onResize = () => {
            if (parent) {
                camera.aspect = parent.offsetWidth / parent.offsetHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(parent.offsetWidth, parent.offsetHeight);
            }
        };

        window.addEventListener("resize", onResize);
        onResize();

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;

        const ambientLight = new THREE.AmbientLight(0x999999);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(0, 100, 50);
        scene.add(directionalLight);

        const animate = () => {
            requestAnimationFrame(animate);

            if (objRef.current) {
                objRef.current.rotation.y += 0.0015;
            }

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener("resize", onResize);
            controls.dispose();
        };
    }, [modelPath, theme]);

    return <canvas ref={canvasRef} />;
};

export default ThreeCanvas;
