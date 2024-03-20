'use client'

import React, { useEffect, useState, createContext } from "react";
import Footer from '@/app/components/footer'
import "@/app/styles/globals.css"
import { AnimatePresence } from "framer-motion";
import Header from '@/app/components/header'


interface ThemeContextType {
  theme: string;
  useTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  useTheme: () => {},
});

export default function PageLayout({ children }: {
    children: React.ReactNode
}) {
    let [theme, setTheme] = useState("light");
    const useTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));

    if (theme === "light") {
        changeColorsToDark();
    } else {
        changeColorsToLight();
    }

    return { theme, useTheme };
    };

    function changeColorsToLight() {
        document.documentElement.style.setProperty(
        "--color-one",
        "rgb(250, 250, 250)"
        );
        document.documentElement.style.setProperty(
        "--color-two",
        "rgb(237, 246, 252)"
        );
        document.documentElement.style.setProperty(
        "--color-three",
        "rgb(168, 210, 216)"
        );
        document.documentElement.style.setProperty(
        "--color-four",
        "rgb(121, 161, 176)"
        );
        document.documentElement.style.setProperty(
        "--color-five",
        "rgb(88, 149, 166)"
        );
        document.documentElement.style.setProperty(
        "--color-six",
        "rgb(47, 95, 110)"
        );
        document.documentElement.style.setProperty(
        "--color-header-dropdown",
        "rgba(250, 250, 250, 0.1)"
        );
        document.documentElement.style.setProperty(
        "--footer-box-shadow",
        "0px -10px 10px 0px rgba(121, 161, 176, 0.1)"
        );
        document.documentElement.style.setProperty(
        "--color-drop-down-box-shadow",
        "rgba(25, 25, 25, 0.2)"
        );

        const videoElement = document.querySelector(
        ".about > video"
        ) as HTMLVideoElement | null;
        if (videoElement) {
        videoElement.style.filter = "saturate(20%)";
        }
    }

    function changeColorsToDark() {
        document.documentElement.style.setProperty("--color-one", "rgb(5, 5, 4)");
        document.documentElement.style.setProperty(
        "--color-two",
        "rgb(16, 16, 16)"
        );
        document.documentElement.style.setProperty(
        "--color-three",
        "rgb(77, 75, 67)"
        );
        document.documentElement.style.setProperty(
        "--color-four",
        "rgb(173, 158, 131)"
        );
        document.documentElement.style.setProperty(
        "--color-five",
        "rgb(204, 196, 174)"
        );
        document.documentElement.style.setProperty(
        "--color-six",
        "rgb(255, 232, 117)"
        );
        document.documentElement.style.setProperty(
        "--color-header-dropdown",
        "rgba(16, 16, 16, 0.1)"
        );
        document.documentElement.style.setProperty(
        "--footer-box-shadow",
        "0px -10px 10px 0px rgba(77, 75, 67, 0.05)"
        );
        document.documentElement.style.setProperty(
        "--color-drop-down-box-shadow",
        "rgba(230, 230, 230, 0.2)"
        );
    }

    useEffect(() => {
    const videoElement = document.querySelector(
        "video"
    ) as HTMLVideoElement | null;
    if (videoElement) {
        if (theme === "dark") {
            videoElement.style.filter = "hue-rotate(217deg) saturate(20%)";
        } else {
            videoElement.style.filter = "saturate(20%)";
        }
    }
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, useTheme }}>
            <div>
                <Header useTheme={useTheme} theme={theme} />
                    {children}
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}