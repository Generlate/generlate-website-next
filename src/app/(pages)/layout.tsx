'use client'

import React, { useEffect, useState, createContext } from "react";
import Footer from '@/app/components/footer'
import "@/app/styles/globals.css"
import { AnimatePresence } from "framer-motion";



export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
    <div >
        <div>
            {children}
        </div>
        <Footer />
    </div>
    )
}