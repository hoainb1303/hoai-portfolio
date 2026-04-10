"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navigations } from "../data/navigation";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const [themeToggle, setThemeToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleTheme = () => {
    if (themeToggle) {
      setThemeToggle(false);
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setThemeToggle(true);
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeToggle(true);
    }
  }, []);

  return (
    <nav className={`${styles.navBar}`}>
      <div className={styles.navBarContent}>
        <div className={styles.navHeader}>
          <div className={styles.navLogo} onClick={toggleTheme}>
            {`${themeToggle}`}
          </div>
          <div className={styles.navHam} onClick={toggleMenu}></div>
        </div>
        <ul
          className={`${styles.navLinks} ${menuToggle ? styles.menuOn : styles.menuOff}`}
        >
          {navigations.map((navigation) => {
            return (
              <li key={navigation.id} className={styles.navItem}>
                <ScrollLink to={navigation.id} smooth="true">
                  {navigation.title}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
