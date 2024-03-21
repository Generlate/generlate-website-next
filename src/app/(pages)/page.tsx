'use client'

import React, { useState, useContext } from "react";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import ThreeCanvas from "@/app/components/ThreeCanvas";
import styles from "@/app/styles/home.module.css"
import transition from '@/app/components/transition'
import { TbMessage2Up } from "react-icons/tb";
import { ThemeContext } from "@/app/(pages)/layout";


function Home(){
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [model, setModel] = useState("/box_4.obj");
  const { theme } = useContext(ThemeContext);

  function handleDownloadClick() {
    const a = document.createElement("a");
    a.href = model;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function handleInputClick() {
    const input = document.getElementById("generationbar");

    if (input instanceof HTMLInputElement) {
      fetch("https://api.generlate.com/api/user-data", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      })
        .then((response) => response.json())
        .then((data) => {
          const generatedObjectPath = "/" + data.generated_object_file_path;
          setModel(generatedObjectPath);
          setShowDownloadButton(true);

          const inputText = input.value;
          const newParagraph = document.createElement("p");
          newParagraph.textContent = inputText;

          const targetSection = document.querySelector(
            "section:nth-of-type(2) div:first-of-type"
          );

          if (targetSection instanceof HTMLElement) {
            targetSection.appendChild(newParagraph);
          }

          input.value = "";

          if (data.generated_object_file_path === undefined) {
            setModel("/box_4.obj");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  function enterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleInputClick();
    }
  }

  return (
    <main className={styles.home}>
      <div className={styles.div}>
        <p className={styles.p}>?</p>
        <section className={styles.section1}>
          {showDownloadButton && (
            <>
              <button onClick={handleDownloadClick} className={styles.button}>Download</button>
              {<ThreeCanvas modelPath={model} theme={theme} className={styles.canvas}/>}
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
              onKeyDown={enterKey}
              className={styles.input}
            />
            <button  onClick={handleInputClick}  title="text input" className={styles.button2}>
              <TbMessage2Up />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default transition(Home);