'use client'

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { TbVector } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { IoBusinessOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import styles from "@/app/styles/footer.module.css"

export default function Footer() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownId: any) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const handleMouseEnter = (dropdownId: any) => {
    if (activeDropdown !== dropdownId) {
      toggleDropdown(dropdownId);
    }
  };

  const handleClickOutside = (event: any) => {
    if (!event.target.closest(".dropdown")) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  return (
    <footer className={styles.footer}>
      <div className={`${styles.div} ${styles.dropdown} ${activeDropdown === "product" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("product")}>
        <button className={styles.link} data-dropdown-button onClick={() => toggleDropdown("product")}>
          <TbVector className={styles.svg}/>
          <p className={styles.p}>Product</p>
        </button>
        <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-one"]}`}>
          <Link href="/news" className={styles.a}>News</Link>
          <Link href="/pricing" className={styles.a}>Pricing</Link>
        </div>
      </div>

      <div className={`${styles.div} ${styles.dropdown} ${activeDropdown === "resources" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("resources")}>
        <button className={styles.link} data-dropdown-button onClick={() => toggleDropdown("resources")}>
          <TiDocumentText className={styles.svg}/>
          <p className={styles.p}>Resources</p>
        </button>
        <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-two"]}`}>
          <Link href="/docs" className={styles.a}>Docs</Link>
          <Link href="/api" className={styles.a}>API</Link>
        </div>
      </div>

      <div className={`${styles.div} ${styles.dropdown} ${activeDropdown === "company" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("company")}>
        <button className={styles.link} data-dropdown-button onClick={() => toggleDropdown("company")}>
          <IoBusinessOutline className={styles.svg}/>
          <p className={styles.p}>Company</p>
        </button>
        <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-three"]}`}>
          <Link href="/team" className={styles.a}>Team</Link>
          <Link href="/finances" className={styles.a}>Finances</Link>
          <Link href="/legal" className={styles.a}>Legal</Link>
        </div>
      </div>

      <div className={`${styles.div} ${styles.dropdown} ${activeDropdown === "social" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("social")}>
        <button className={styles.link} data-dropdown-button onClick={() => toggleDropdown("social")}>
          <BsPeople className={styles.svg}/>
          <p className={styles.p}>Social</p>
        </button>
        <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-four"]}`}>
          <Link href="https://github.com/Generlate" className={styles.a}>Github</Link>
          <Link href="https://www.youtube.com/@generlate" className={styles.a}>Youtube</Link>
          <Link href="https://twitter.com/Generlate" className={styles.a}>Twitter</Link>
          <Link href="https://www.linkedin.com/company/78367423/admin/feed/posts/" className={styles.a}>LinkedIn</Link>
        </div>
      </div>

    </footer>
  );
}