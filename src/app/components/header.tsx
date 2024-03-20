'use client'

import React, { useState, useEffect, useContext } from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/app/styles/header.module.css";
import { BiUserCircle } from "react-icons/bi";
import { VscColorMode } from "react-icons/vsc";
import { ImExit } from "react-icons/im";
import { TiUserAdd } from "react-icons/ti";
import { RiUserFollowFill } from "react-icons/ri";
import {AuthContext} from "@/app/(pages)/layout";


export default function Header(props: {
  useTheme: (arg: string) => void;
  theme: string;
  name: string;
  setName: (name: string) => void;
}) {

  const { name, setName } = useContext(AuthContext);

  // useEffect(() => {
  //       setName('Austen');
  //   });

  const logoImageSrc =
    props.theme === "dark" ? "/generlate-dark.webp" : "/generlate-light.webp";

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

  useEffect(() => {
    if (profilePictureFile) {
      const formData = new FormData();
      formData.append("user_image", profilePictureFile);

      fetch("https://api.generlate.com/api/upload-user-images", {
        method: "PUT",
        body: formData,
        credentials: "include"
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error uploading profile picture:", error);
        });
    }
  }, [profilePictureFile]);

  const changePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file) {
      setProfilePictureFile(file);
      setProfilePicture(URL.createObjectURL(file));
    }
  };


  let profile: React.ReactNode =  (
    <BiUserCircle size={34} title="user options" />
  );

  const switchTheme = () => {
    const newTheme = props.theme === "light" ? "dark" : "light";

    props.useTheme(newTheme);
  };


  if (profilePicture) {
    profile = <Image src={profilePicture} alt="profile" title="profile" width={35} height={35} className={`${styles.img2}`}/>;
  }

  let menu;

  if (!0/*!props.name*/) {
    menu = (
      <ul className={styles.ul}>
        <li className={styles.li}>
          <RiUserFollowFill size={28} className={styles.svg2}/>
          <Link href="/Login" className={styles.link2}>Sign in</Link>
        </li>
        <li className={styles.li}>
          <TiUserAdd size={35} className={styles.svg2}/>
          <Link href="/Register" className={styles.link2}>Sign up</Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className={styles.ul}>
        <button 
          className={styles.link2} 
          onClick={(e) => {
            e.preventDefault();
            switchTheme();
          }} 
          title="colors"
        >
          <VscColorMode className={styles.svg2} size={22}/>
          <p className={styles.p2}>theme</p>
        </button>

        <div className={styles.div}>
          <BiUserCircle size={25} className={styles.svg2}/>
          <input 
            type="file" 
            accept=".jpg, .jpeg, .png, .gif" 
            onChange={changePicture} 
            className={styles.input2}
          />
        </div>

        <li className={styles.li}>
          <ImExit size={20} className={styles.svg2}/>
          <Link href="/Login" /*onClick={logout}*/ className={styles.link2}>
            Log out
          </Link>
        </li>
      </ul>
    );
  }


  return (
    <header className={styles.header}>
      <Link href="/about">
        <Image src={logoImageSrc} width={250} height={47} alt="picture of cubes" className={styles.img}/>
      </Link>
      <div className={`${styles.dropdown} ${activeDropdown === "profile" ? `${styles.active}` : ``}`}
        onMouseEnter={() => handleMouseEnter("profile")}
      >
        <button 
          className={styles.link} 
          data-dropdown-button 
          onClick={() => toggleDropdown("profile")}
        >
          {profile}
        </button>
        <form className={styles["dropdown-menu"]}>
          <div> {name ?  "Hi " + name : ""}</div>
          <div>{menu}</div>
        </form>
      </div>
    </header>
  );
}

