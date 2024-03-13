'use client'

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { BiUserCircle } from "react-icons/bi";
import { VscColorMode } from "react-icons/vsc";
import { ImExit } from "react-icons/im";
import { TiUserAdd } from "react-icons/ti";
import { RiUserFollowFill } from "react-icons/ri";
import styles from "@/app/styles/header.module.css"

export default function Header() {
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

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(
    null
  );

  let profile: React.ReactNode =  (
    <BiUserCircle size={34} title="user options" />
  );

  if (profilePicture) {
    profile = <Image src={profilePicture} alt="profile" title="profile" />;
  }

  let menu;

  if (0) {
    menu = (
      <ul>
        <li>
          <RiUserFollowFill size={20} />
          <Link href="/components/login">Sign in</Link>
        </li>
        <li>
          <TiUserAdd size={23} />
          <Link href="/components/signup">Sign up</Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul>
        <button className={styles.link} title="colors">
          <VscColorMode />
          <p>theme</p>
        </button>

        <div>
          <BiUserCircle size={19} />
          <input type="file" accept=".jpg, .jpeg, .png, .gif"/>
        </div>

        <li>
          <ImExit size={19} />
          <Link href="/components/login">Log out</Link>
        </li>
      </ul>
    );
  }


  return (
    <header className={styles.header}>
      <Link href="/about">
        <Image src="/generlate-light.webp" width={250} height={47} alt="picture of cubes" className={`${styles['img']} ${styles['img:hover']}`}/>
      </Link>
      <div className={styles.dropdown}>
        <button className={styles.link} data-dropdown-button>
          <BiUserCircle size={34} title="user options" />
          <VscColorMode />
          <RiUserFollowFill size={20} />
          <TiUserAdd size={23} />
          <ImExit size={19} />
        </button>
        <form className={styles["dropdown-menu"]}>
          <div></div>
          <div>{menu}</div>
        </form>
      </div>
    </header>
  );
}