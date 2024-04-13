'use client'

import React, { useEffect, useState, createContext } from "react";
import "@/app/styles/globals.css"
import Header from '@/app/components/header'
import { changeColorsToDark, changeColorsToLight } from '@/app/components/colorChange'


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
            <AuthContext.Provider value={{ name, setName }}>
                    <Header useTheme={useTheme} theme={theme} name={name} setName={setName} />
                        {children}
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}