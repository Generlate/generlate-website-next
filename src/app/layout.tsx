import React, { useEffect, useState, createContext } from "react";
import Header from '@/app/components/header'
import "@/app/styles/globals.css"
import { AnimatePresence } from "framer-motion";
import { inter } from '@/app/components/fonts';

export const metadata = {
  title: 'Generlate',
  description: 'Generates 3d models',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
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

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}


// TODO: add css for desktop and other media queries
// TODO: try radial-gradient in css
// TODO: add framer-motion transitions
// TODO: maybe add a loading.tsx for a loading spinner
// TODO: maybe add error.tsx for error handling
// TODO: consider using @media {prefers-color-scheme: dark}




//TODO: add styleX
//TODO: move change color functions to a separate file
//TODO: fix box shadow not interacting with canvas js correctly.
//TODO: make footer dropdown menu 2 and 3 centered on footer word
//TODO: put the footer into the header as one but don't show the footer elements on the home page
//TODO: better background gradient
//TODO: fix dropdown menu width on mobile
//TODO: change UI so that text input is on top of canvas and canvas is the entire page.
//TODO: add up arrows on footer buttons on desktop
//TODO: make all pages work on ipad and mobile (normal browser, not app view)
//TODO: fix arrow icons not working on meta quest browser
//TODO: maybe move header inside pages and turn background color invisible on generlate page. keep header width inside the 50%. remove color from canvas. (might need to figure out with home page canvases)
//TODO: add sphere with flat bottom to canvas scenes so objects can cast shadow and xyz indicator
//TODO: include a Benefits section and a Use Cases section on About.tsx
//TODO: polish
//TODO: make voice input button work (npm install react-speech-recognition)
//TODO: add search bar, add search bar functionality (probably not worthwhile. should just be a part of the text input, which can answer questions or provide links)
//TODO: make the 'text to 3d' button have that glossy blurred look
//TODO: better icons? (maybe not worth the time. try 'https://feathericons.com/', 'https://heroicons.dev/')
//TODO: refine sub pages
//TODO: add Auth0 and/or SSO and/or face-id
//TODO: go over font sizes and do better ones, look at reference websites
