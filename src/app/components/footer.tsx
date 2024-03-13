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
      <div className={`${styles.div} ${styles['div:hover']} ${styles.dropdown} ${activeDropdown === "product" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("product")}>
        <button className={styles.link} data-dropdown-button onClick={() => toggleDropdown("product")}>
          <TbVector />
          <p>Product</p>
        </button>
        <div className={styles["dropdown-menu"]}>
          <Link href="/news">News</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
      </div>

      <div className={`${styles.dropdown} ${activeDropdown === "resources" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("resources")}>
        <button className={styles.link} data-dropdown-button onClick={() => toggleDropdown("resources")}>
          <TiDocumentText />
          <p>Resources</p>
        </button>
        <div className={styles["dropdown-menu"]}>
          <Link href="/docs">Docs</Link>
          <Link href="/api">API</Link>
        </div>
      </div>

      <div className={`${styles.dropdown} ${activeDropdown === "company" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("company")}>
        <button className={styles.link} data-dropdown-button onClick={() => toggleDropdown("company")}>
          <IoBusinessOutline />
          <p>Company</p>
        </button>
        <div className={styles["dropdown-menu"]}>
          <Link href="/team">Team</Link>
          <Link href="/finances">Finances</Link>
          <Link href="/legal">Legal</Link>
        </div>
      </div>

      <div className={`${styles.dropdown} ${activeDropdown === "social" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("social")}>
        <button className={styles.link} data-dropdown-button onClick={() => toggleDropdown("social")}>
          <BsPeople />
          <p>Social</p>
        </button>
        <div className={styles["dropdown-menu"]}>
          <Link href="https://github.com/Generlate">Github</Link>
          <Link href="https://www.youtube.com/@generlate">Youtube</Link>
          <Link href="https://twitter.com/Generlate">Twitter</Link>
          <Link href="https://www.linkedin.com/company/78367423/admin/feed/posts/">LinkedIn</Link>
        </div>
      </div>

    </footer>
  );
}