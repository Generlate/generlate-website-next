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

interface AuthContextType {
  name: string;
  setName: (name: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  name: "",
  setName: () => {},
});


export default function PageLayout({ children }: {
    children: React.ReactNode
}) {
    let [name, setName] = useState("");

    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.generlate.com/api/user", {
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });

            const content = await response.json();

            setName(content.name);
        })();
    });

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
        document.documentElement.style.setProperty(
            "--color-section-box-shadow",
            "rgba(121, 161, 176, 0.15)"
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
        document.documentElement.style.setProperty(
        "--color-section-box-shadow",
        "rgba(77, 75, 67, 0.15)"
        );
    }

    if (theme) {
        fetch("https://api.generlate.com/api/user-data", {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then((response) => response.json())
        .then((data) => {
            const userColorTheme = data.user_color_theme || "light";

            setTheme(userColorTheme);
            if (userColorTheme === "dark") {
            changeColorsToDark();
            } else {
            changeColorsToLight();
            }
        })
        .catch((error) => {
            console.error("Error fetching user information:", error);
            theme = "light";
        });
    }


    


    return (
        <ThemeContext.Provider value={{ theme, useTheme }}>
            <AuthContext.Provider value={{ name, setName}}>
                    <Header useTheme={useTheme} theme={theme} name={name} setName={setName} />
                        {children}
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}