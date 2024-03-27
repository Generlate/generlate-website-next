'use client'

import React, { useState, useContext, useEffect } from "react";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import ThreeCanvas from "@/app/components/ThreeCanvas";
import styles from "@/app/styles/home.module.css"
import transition from '@/app/components/transition'
import { TbMessage2Up } from "react-icons/tb";
import { ThemeContext } from "@/app/(pages)/layout";


function Home(){
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [model, setModel] = useState("/");
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
      const formData = new FormData();
      const inputText = input.value;
      formData.append("user_input_text", input.value);

      fetch("https://api.generlate.com/api/upload-generated-objects", {
        method: "PUT",
        body: formData,
        credentials: "include"
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("PUT request failed");
          }
          return response.json(); 
        })
        .then(() => {
          return fetch("https://api.generlate.com/api/user-data", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
          });
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("GET request failed");
          }
          return response.json();
        })
        .then((data) => {
          setModel("https://api.generlate.com/media/generated_objects/" + data.generated_object_file_path);
          setShowDownloadButton(true);
          input.value = "";
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
              <button onClick={handleDownloadClick} className={styles.downloadButton}>Download</button>
              {<ThreeCanvas modelPath={model} theme={theme} className={styles.canvas}/>}
            </>
          )}
        </section>

        <section className={styles.section2}>
          <div className={styles.div1}></div>

          <div className={styles.div2}>
            <button title="voice input" className={styles.audioButton}>
              <BiSolidMicrophoneAlt className={styles.svg}/>
            </button>
            <input
              type="text"
              placeholder="Text here, object out ↑"
              id="generationbar"
              onKeyDown={enterKey}
              className={styles.textInput}
            />
            <button  onClick={handleInputClick}  title="text input" className={styles.inputButton}>
              <TbMessage2Up />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default transition(Home);