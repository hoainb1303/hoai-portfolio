"use client";
import React from "react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={`${styles.navBar}`}>
      <div className={styles.navBarContent}>
        <div className={styles.navHeader}>
          <div className={styles.navLogo}></div>
          <div className={styles.navHam}></div>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <ScrollLink to="hero" smooth="true">
              HOME
            </ScrollLink>
          </li>
          <li className={styles.navItem}>
            <ScrollLink to="skills" smooth="true">
              SKILLS
            </ScrollLink>
          </li>
          <li className={styles.navItem}>
            <ScrollLink to="projects" smooth="true">
              PROJECTS
            </ScrollLink>
          </li>
          <li className={styles.navItem}>
            <ScrollLink to="BLOGS" smooth="true">
              BLOGS
            </ScrollLink>
          </li>
          <li className={styles.navItem}>
            <ScrollLink to="about" smooth="true">
              ABOUT
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
