'use client'

import React, { useState } from "react";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
// import ThreeCanvas from "@app/components/ThreeCanvas";
import styles from "./styles/page.module.css"
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
      <div>
        <p>?</p>
        <section className={styles.section}>
          {showDownloadButton && (
            <>
              <button onClick={handleDownloadClick}>Download</button>
              {/* <ThreeCanvas modelPath={model} theme={props.theme} /> */}
            </>
          )}
        </section>

        <section>
          <div></div>

          <div>
            <button title="voice input">
              <BiSolidMicrophoneAlt />
            </button>
            <input
              type="text"
              placeholder="Prompt here..."
              id="generationbar"
              // onKeyDown={enterKey}
            />
            <button /* onClick={handleInputClick} */ title="text input">
              <TbMessage2Up />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}