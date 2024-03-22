// import React, { useEffect, useState, createContext } from "react";
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

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
          {children}
      </body>
    </html>
  )
}

// TODO: fix about page 'text to 3d' button color animation
// TODO: check all tsx and props are working
// TODO: add css for desktop and other media queries
// TODO: maybe add a loading.tsx for a loading spinner
// TODO: maybe add error.tsx for error handling
// TODO: consider using @media {prefers-color-scheme: dark}
// TODO: restructure css to be more combinatorial and less redundant (use classNames that describe the properties)
// TODO: fix models scale when manipulate on about page on mobile




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
