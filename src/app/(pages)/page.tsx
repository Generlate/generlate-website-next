'use client'

import React, { useState } from "react";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
// import ThreeCanvas from "./components/ThreeCanvas";
import styles from "@/app/styles/home.module.css"
import transition from '@/app/components/transition'
import { TbMessage2Up } from "react-icons/tb";


export default function Home(){
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [model, setModel] = useState("/box_4.obj");

  function handleDownloadClick() {
    const a = document.createElement("a");
    a.href = model;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <main className={styles.home}>
      <div className={styles.div}>
        <p className={styles.p}>?</p>
        <section className={styles.section1}>
          {showDownloadButton && (
            <>
              <button onClick={handleDownloadClick} className={styles.button}>Download</button>
              {/* <ThreeCanvas modelPath={model} theme={props.theme} /> */}
            </>
          )}
        </section>

        <section className={styles.section2}>
          <div className={styles.div1}></div>

          <div className={styles.div2}>
            <button title="voice input" className={styles.button1}>
              <BiSolidMicrophoneAlt className={styles.svg}/>
            </button>
            <input
              type="text"
              placeholder="Prompt here..."
              id="generationbar"
              // onKeyDown={enterKey}
              className={styles.input}
            />
            <button /* onClick={handleInputClick} */ title="text input" className={styles.button2}>
              <TbMessage2Up />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}