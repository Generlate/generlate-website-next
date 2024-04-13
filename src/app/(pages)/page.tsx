'use client'

import React, { useState, useContext } from "react";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import ThreeCanvas from "@/app/components/three-canvas";
import styles from "@/app/styles/home.module.css"
import transition from '@/app/components/transition'
import { TbMessage2Up } from "react-icons/tb";
import { ThemeContext } from "@/app/(pages)/layout";


function Home(){
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [model, setModel] = useState("/");
  const { theme } = useContext(ThemeContext);
  const library = ["shiba",
            "lantern",
            "chair",
            "house",
            "cat",
            "backpack",
            "bird",
            "bricks",
            "blackhole",
            "bookshelf",
            "cathedral",
            "chair",
            "chest",
            "crocodile",
            "dragon",
            "fantasy_town",
            "game boy",
            "girl",
            "heart",
            "jordans",
            "leather shoes",
            "mushrooms",
            "portal",
            "restaurant",
            "rhino",
            "room",
            "sign",
            "skull",
            "plant",
            "police",
            "porsche",
            "sofa",
            "sushi",
            "sword",
            "table",
            "t-rex",
            "truck",
            "turtle",
            "tv",
            "whale",
            "arcade machine",
            "ashtray",
            "betta",
            "bike",
            "birch",
            "boat",
            "box",
            "bus",
            "butterfly",
            "cat2",
            "crash dummy",
            "crystal",
            "camera",
            "dagger",
            "deer",
            "dinosaur skeleton",
            "eagle",
            "earth",
            "elephant",
            "eye",
            "first aid kit",
            "fish2",
            "fox",
            "galaxy",
            "generator",
            "grogu",
            "gyroscope",
            "hand",
            "headphones",
            "hibiscus",
            "horror",
            "htc vive",
            "iphone",
            "keyboard",
            "knight",
            "meal",
            "millennium falcon",
            "newspaper",
            "pizza",
            "playstation 2",
            "potion",
            "safe",
            "shark",
            "shark person",
            "small_bottle",
            "sneakers",
            "space station",
            "statue",
            "steam deck",
            "plane",
            "sweater",
            "tamagotchi",
            "teddy bears",
            "tower",
            "tree2",
            "viking_boat",
            "violin",
            "wolf",];

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
      formData.append("user_input_text", inputText.toLowerCase());

      fetch("https://api.generlate.com/api/upload-generated-objects", {
        method: "PUT",
        body: formData,
        credentials: "include"
      })
        .then((response) => {
          if (!response.ok) {

              
            if (library.includes(inputText.toLocaleLowerCase())) {
              setModel("https://api.generlate.com/media/generated_objects/" + inputText.toLowerCase() + ".glb");
              setShowDownloadButton(true);

              const newParagraph = document.createElement("p");
              newParagraph.textContent = inputText;

              const targetSection = document.querySelector(
                "section:nth-of-type(2) div:first-of-type"
              );

              if (targetSection instanceof HTMLElement) {
                targetSection.appendChild(newParagraph);
              }
              
            } else {
              const newParagraph = document.createElement("p");
              newParagraph.textContent = `"${inputText}" not found in library.`;

              const targetSection = document.querySelector(
                "section:nth-of-type(2) div:first-of-type"
              );

              if (targetSection instanceof HTMLElement) {
                targetSection.appendChild(newParagraph);
              }
            }

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
          if (data.generated_object_file_path ==  `"${inputText}" not found in library.`) {
            const newParagraph = document.createElement("p");
            newParagraph.textContent = `"${data.generated_object_file_path}" not found in library.`;

            const targetSection = document.querySelector(
              "section:nth-of-type(2) div:first-of-type"
            );

            if (targetSection instanceof HTMLElement) {
              targetSection.appendChild(newParagraph);
            }    
          } else {
            setModel("https://api.generlate.com/media/generated_objects/" + data.generated_object_file_path);
          
            setShowDownloadButton(true);

            const newParagraph = document.createElement("p");
            newParagraph.textContent = inputText;

            const targetSection = document.querySelector(
              "section:nth-of-type(2) div:first-of-type"
            );

            if (targetSection instanceof HTMLElement) {
              targetSection.appendChild(newParagraph);
            }     
          }

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
      const input = event.target as HTMLInputElement;
      input.value = "";
    }
  }

  return (
    <main className={styles.main}>
      <p className={styles.questionArrow}>?</p>

      <section className={styles.modelWindow}>
        {showDownloadButton && (
          <>
            <button onClick={handleDownloadClick} className={styles.downloadButton}>Download</button>
            {<ThreeCanvas modelPath={model} theme={theme} className={styles.canvas}/>}
          </>
        )}
      </section>

      <section className={styles.textInterface}>
        <div className={styles.textInterfaceTop}></div>

        <div className={styles.textInterfaceBottom}>
          <button title="voice input" className={styles.audioButton}>
            <BiSolidMicrophoneAlt className={styles.audioIcon}/>
          </button>
          <input
            type="text"
            placeholder="Text here, object out ↑"
            id="generationbar"
            onKeyDown={enterKey}
            className={styles.textInputBar}
          />
          <button  onClick={handleInputClick}  title="text input" className={styles.inputButton}>
            <TbMessage2Up />
          </button>
        </div>
      </section>
    
    </main>
  )
}

export default transition(Home);