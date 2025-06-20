'use client'

import { ThemeContext } from "@/app/(pages)/layout";
import ThreeCanvas from '@/app/components/three-canvas';
import transition from '@/app/components/transition';
import styles from "@/app/styles/about.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useRef } from "react";
import { BiDollar } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { TbStretching } from "react-icons/tb";


function About() {
  const containerRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${styles.hidden}, .${styles.hiddenbottom}`);
    if (hiddenElements.length === 0) {
      console.log("No elements to observe");
    }
    hiddenElements.forEach((el) => observer.observe(el));

    const container = containerRef.current;
    const numberOfSections = container
      ? (container as HTMLElement).children.length
      : 0;

    let sectionIndex = 0;

    const interval = setInterval(() => {
      if (container) {
        const scrollPosition =
          sectionIndex * (container as HTMLElement).clientWidth;
        (container as HTMLElement).scrollLeft = scrollPosition;

        sectionIndex = (sectionIndex + 1) % numberOfSections;
      }
    }, 3000); // Change every 3000 milliseconds (3 seconds)

    return () => {
      clearInterval(interval);
      hiddenElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

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
    <main className={styles.main}>
      <section className={styles.section1}>
        <video width="1920" height="1080" autoPlay playsInline muted loop className={styles.video}>
          <source src="/advertisement.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.h1Container}>
          <h1 className={styles.h1}>A Text -&gt; Object Generator.</h1> 
        </div>

      </section>

          
      <section className={styles.section2}>
        <ul className={styles.ul}>
          <article className={styles.article1}>
            <p className={styles.p1}>
              Say goodbye to the grind. Type, don&apos;t model. Effortlessly
              create objects from your text. 
            </p>
            <h3 className={styles.h3}>
              Faster
            </h3>
            <BsClockHistory className={styles.icon}/>
          </article>
          <article className={styles.article1}>
            <p className={styles.p1}>
              Perfect for games, architecture, marketing - flexibility like
              never before.
            </p>
            <h3 className={styles.h3}>
              Versatile
            </h3>
            <TbStretching className={styles.icon}/>
          </article>
          <article className={styles.article1}>
            <p className={styles.p1}>Turbocharge your productivity. Slash costs.</p>
            <h3 className={styles.h3}>
              Cheaper
            </h3>
            <BiDollar className={styles.icon}/>
          </article>
        </ul>
      </section>
        
      <section className={styles.section3}>
        <div className={`${styles.hiddenbottom} ${styles.div2}`}>
          <ThreeCanvas modelPath="chair.glb" className={styles.canvas} theme={theme} />
          <p className={styles.p2}>&quot;chair&quot;</p>
        </div>

        <div className={`${styles.hiddenbottom} ${styles.hiddenbottom2} ${styles.div2}`}>
          <ThreeCanvas modelPath="lantern.glb" className={styles.canvas} theme={theme} />
          <p className={styles.p2}>&quot;lantern&quot;</p>
        </div>

        <div className={`${styles.hiddenbottom} ${styles.hiddenbottom3} ${styles.div2}`}>
          <ThreeCanvas modelPath="shiba.glb" className={styles.canvas} theme={theme} />
          <p className={styles.p2}>&quot;shiba&quot;</p>
        </div>
      </section>
      <section ref={containerRef} id="about" className={`${styles.section4} ${styles.hiddenbottom}`}>
        <article className={styles.article2}>
          <div className={styles.div3}>
            <h3 className={styles.section4h3}>Editable:</h3>
            <p className={styles.p3}>reduce polygons, change texture or increase resolution</p>
          </div>
          <Image src="/cubes.webp" alt="cubes" width={1920} height={540} className={styles.image}></Image>
        </article>

        <article className={styles.article2}>
          <div className={styles.div3}>
            <h3 className={styles.section4h3}>Multimodal:</h3>
            <p className={styles.p3}>generate models or textures</p>
          </div>
          <Image src="/textures.webp" alt="textures" width={1920} height={540} className={styles.image}></Image>
        </article>

        <article className={styles.article2}>
          <div className={styles.div3}>
            <h3 className={styles.section4h3}>History:</h3>
            <p className={styles.p3}>models and prompts are recorded</p>
          </div>
          <ol className={styles.ol}>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;past generations
            </li>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;A tall cube
            </li>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;A cube
            </li>
            <li>
              <FiMessageSquare /> &nbsp;&nbsp;&nbsp;A thin cube
            </li>
          </ol>
        </article>
      </section>
      <div className={styles.navButton}>
        <Link href="/" className={styles.link}>Try It Out!</Link>
      </div>

    </main>

  );
}

export default transition(About);