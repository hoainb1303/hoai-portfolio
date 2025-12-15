"use client";
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo"></div>
        <div className="nav-hamburger"></div>
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Projects</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
