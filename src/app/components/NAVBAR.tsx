"use client";

import styles from "./NavBar.module.css";
import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Updated logo with SVG */}
      <div className={styles.logo}>
        <Image
          src="/Logo.svg" 
          alt="Zenoheal Logo"
          width={210}  
          height={120} 
          priority 
        />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li className={styles.contactUs}>
        <a href="mailto:business@zenoheal.com">Contact Us</a>
      </li>
      </ul>
    </nav>
  );
}