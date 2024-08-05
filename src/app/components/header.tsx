'use client'

import styles from "@/app/styles/header.module.css";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { IoBusinessOutline } from "react-icons/io5";
import { RiHeart3Line, RiUserFollowFill } from "react-icons/ri";
import { TiDocumentText, TiUserAdd } from "react-icons/ti";
import { VscColorMode } from "react-icons/vsc";


export default function Header(props: {
  useTheme: (arg: string) => void;
  theme: string;
  name: string;
  setName: (name: string) => void;
}) {

  const [isMobileLayout, setIsMobileLayout] = useState(true);

  const determineLayout = () => {
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (max-width: 2499px) and (orientation: landscape)');
    setIsMobileLayout(!mediaQuery.matches);
  };

  useEffect(() => {
    determineLayout(); 
    window.addEventListener('resize', determineLayout);

    return () => window.removeEventListener('resize', determineLayout);
  }, []);

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




  const switchTheme = () => {
    const newTheme = props.theme === "light" ? "dark" : "light";

    const formData = new FormData();
    formData.append("user_color_theme", newTheme);

    fetch("https://api.generlate.com/api/update-user-color-theme", {
      method: "PUT",
      body: formData,
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        props.useTheme(newTheme);
      })
      .catch((error) => {
        console.error("Error updating color theme:", error);
      });
  };

  const logout = async () => {
    await fetch("https://api.generlate.com/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });

    props.setName("");    
  };
  

  let profile: React.ReactNode =  (
    <BiUserCircle size={34} title="user options" className={styles.svg}/>
  );

  useEffect(() => {
    if (props.name) {
      fetch("https://api.generlate.com/api/user-data", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((data) => {
          const userImage = data.user_image || "";
          const profilePictureUrl = "https://api.generlate.com" + userImage;
          setProfilePicture(profilePictureUrl);
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
          setProfilePicture(null);
        }); 
      } else {
      setProfilePicture(null); 
    }
  }, [props.name]);


  if (profilePicture) {
    profile = <Image src={profilePicture} alt="profile" title="profile" width={35} height={35} className={`${styles.profilePic}`}/>;
  }

  let menu;

  if (!props.name) {
    menu = (
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/login" className={styles.link}>
            <RiUserFollowFill size={20} className={styles.svg2}/>
            Sign in
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/register" className={styles.link}>
            <TiUserAdd size={23} className={styles.svg2}/>
            Sign up
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className={styles.ul}>
        <button 
          className={styles.link} 
          onClick={(e) => {
            e.preventDefault();
            switchTheme();
          }} 
          title="colors"
        >
          <VscColorMode className={styles.svg2} size={22}/>
          <p className={styles.p}>theme</p>
        </button>

        <div className={styles.div}>
          <BiUserCircle size={25} className={styles.svg2}/>
          <input 
            type="file" 
            accept=".jpg, .jpeg, .png, .gif" 
            onChange={changePicture} 
            className={styles.profilePicInput}
          />
        </div>

        <li className={styles.li}>
          <Link href="/login" onClick={logout} className={styles.link}>
            <ImExit size={20} className={styles.svg2}/>
            Log out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <header className={styles.header}>
      <Link href="/about">
        <Image src={isMobileLayout ? (props.theme === "dark" ? "/mobile-generlate-dark.png" : "/mobile-generlate-light.png") : (props.theme === "dark" ? "/generlate-dark.webp" : "/generlate-light.webp")} width={isMobileLayout ? 41 : 250} height={isMobileLayout ? 41 : 47} alt="picture of cubes" className={styles.logoImage}/>
      </Link>

      <div className={`${styles.dropdown} ${activeDropdown === "donate" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("donate") } onTouchStart={() => handleMouseEnter("donate") }>
        <button className={styles.button} data-dropdown-button onClick={() => toggleDropdown("donate")}>
          <RiHeart3Line className={styles.svg3}/>
          <Link href="/donate" className={styles.p2}>Donate &lt;3</Link>
        </button>
      </div>

      <div className={` ${styles.dropdown} ${activeDropdown === "resources" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("resources")} onTouchStart={() => handleMouseEnter("resources")}>
        <button className={styles.button} data-dropdown-button onClick={() => toggleDropdown("resources")}>
          <TiDocumentText className={styles.svg3}/>
          <p className={styles.p2}>Resources</p>
        </button>
        <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-two"]}`}>
          <Link href="/news" className={styles.link}>News</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/docs" className={styles.link}>Docs</Link>
          <Link href="/api" className={styles.link}>API</Link>
        </div>
      </div>

      <div className={` ${styles.dropdown} ${activeDropdown === "company" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("company")} onTouchStart={() => handleMouseEnter("company")}>
        <button className={styles.button} data-dropdown-button onClick={() => toggleDropdown("company")}>
          <IoBusinessOutline className={styles.svg3}/>
          <p className={styles.p2}>Company</p>
        </button>
        <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-three"]}`}>
          <Link href="/team" className={styles.link}>Team</Link>
          <Link href="/finances" className={styles.link}>Finances</Link>
          <Link href="/legal" className={styles.link}>Legal</Link>
        </div>
      </div>

      <div className={` ${styles.dropdown} ${activeDropdown === "social" ? `${styles.active}` : ``}`} onMouseEnter={() => handleMouseEnter("social")} onTouchStart={() => handleMouseEnter("social")}>
        <button className={styles.button} data-dropdown-button onClick={() => toggleDropdown("social")}>
          <BsPeople className={styles.svg3}/>
          <p className={styles.p2}>Social</p>
        </button>
        <div className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-four"]}`}>
          <Link href="https://discord.gg/6zn3Xefz2y" className={styles.link}>Discord</Link>
          <Link href="https://www.youtube.com/@generlate" className={styles.link}>Youtube</Link>
          <Link href="https://github.com/Generlate" className={styles.link}>Github</Link>
          <Link href="https://twitter.com/Generlate" className={styles.link}>Twitter</Link>
          <Link href="https://www.linkedin.com/company/78367423/admin/feed/posts/" className={styles.link}>LinkedIn</Link>
        </div>
      </div>

      <div className={`${styles.dropdown} ${activeDropdown === "profile" ? `${styles.active}` : ``}`}
        onMouseEnter={() => handleMouseEnter("profile")} 
      >
        <button 
          className={styles.button} 
          data-dropdown-button 
          onClick={() => toggleDropdown("profile")}
          onTouchStart={() => toggleDropdown("profile")}
        >
          {profile}
        </button>
        <form className={styles["dropdown-menu"]}>
          <div className={styles.message}> {props.name ?  "Hi " + props.name : ""}</div>
          <div>{menu}</div>
        </form>
      </div>
  </header>
  );
}
