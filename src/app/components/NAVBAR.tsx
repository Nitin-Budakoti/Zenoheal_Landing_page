"use client";

import styles from "./NavBar.module.css";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Replace the logo text with the image */}
      <div className={styles.logo}>
        <img
          src="/Zenoheal photo.jpeg"
          alt="Zenoheal Logo"
          className={styles.logoImage}
        />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        className={`${styles.navLinks} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
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
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
