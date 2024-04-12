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

// TODO: better css names
// TODO: fix header having width cause its children to overlap it
// TODO: restructure css to be more combinatorial and less redundant (use classNames that describe the properties)
// TODO: maybe make threecanvas background transparent
// TODO: refine sub pages
// TODO: make all pages work on ipad and mobile (normal browser, not app view)
// TODO: add css for desktop and other media queries
// TODO: move change color functions to a separate file
// TODO: remove unnecessary parts
// TODO: add Auth0 and/or SSO and/or face-id
// TODO: improve about page's design
// TODO: include a Benefits section and a Use Cases section on About.tsx
// TODO: make the 'text to 3d' button have that glossy blurred look
// TODO: fix arrow icons not working on meta quest browser
// TODO: consider using @media {prefers-color-scheme: dark}
// TODO: add styleX
// TODO: maybe add a loading.tsx for a loading spinner
// TODO: maybe add error.tsx for error handling
// TODO: consider using only one layout.tsx (idk)
// TODO: maybe add sphere with flat bottom to canvas scenes so objects can cast shadow and xyz indicator
// TODO: polish
// TODO: make voice input button work (npm install react-speech-recognition)
// TODO: add search bar, add search bar functionality (probably not worthwhile. should just be a part of the text input, which can answer questions or provide links)
// TODO: better icons? (maybe not worth the time. try 'https://feathericons.com/', 'https://heroicons.dev/')
