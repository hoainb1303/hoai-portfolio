"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";

import { Link as ScrollLink } from "react-scroll";
import { navItems } from "../data/navigation";

import styles from "./NavBar.module.css";
import { logoSvg, menuSvg, backSvg } from "@/assets";

const NavBar = () => {
  const [themeToggle, setThemeToggle] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? true : false;
    } else {
      return false;
    }
  });
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
    if (menuToggle == false) {
      MenuOpenAnimation();
    } else {
      MenuCloseAnimation();
    }
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <nav className={`${styles.navBar}`}>
      <div className={styles.navBarContent}>
        <div className={styles.navHeader}>
          <div className={styles.navLogo} id="logo" onClick={toggleTheme}>
            <svg id="logo-icon" viewBox={logoSvg.viewBox}>
              <path fill="currentColor" d={logoSvg.path}></path>
            </svg>
          </div>
          {/* Menu Icon */}
          <div className={styles.navHam} onClick={toggleMenu}>
            <svg id="menu-icon" viewBox={menuSvg.viewBox}>
              <path fill="currentColor" d={menuSvg.path}></path>
            </svg>
            <svg
              id="back-icon"
              viewBox={backSvg.viewBox}
              style={{ opacity: 0, transform: "rotate(90deg)", scale: 0 }}
            >
              <path fill="currentColor" d={backSvg.path}></path>
            </svg>
          </div>
        </div>
        <div className={styles.navBackground} id="nav-background"></div>
        <ul className={`${styles.navLinks}`} id="nav-links">
          {navItems.map((navigation) => {
            return (
              <li
                key={navigation.id}
                className={`${styles.navItem} ${navigation.id === "skills" ? styles.active : null}`}
                id="nav-item"
              >
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

const MenuOpenAnimation = () => {
  gsap.to("#menu-icon", {
    duration: 0.5,
    ease: "back.inOut",
    rotation: 90,
    scale: 0,
    opacity: 0,
  });
  gsap.to("#back-icon", {
    duration: 0.5,
    ease: "back.inOut",
    rotation: 0,
    scale: 1,
    opacity: 1,
  });

  gsap.to("#nav-links", {
    duration: 0.5,
    ease: "power4.out",
    left: 0,
  });
  gsap.to("#nav-background", {
    duration: 0.5,
    ease: "power4.out",
    opacity: 1,
    pointerEvents: "auto",
  });

  gsap.fromTo(
    "#nav-item",
    {
      opacity: 0,
      x: -100,
    },
    {
      duration: 0.5,
      ease: "power4.out",
      opacity: 1,
      x: 0,
      stagger: 0.1,
    },
  );
};

const MenuCloseAnimation = () => {
  gsap.to("#menu-icon", {
    duration: 0.5,
    ease: "back.inOut",
    rotation: 0,
    scale: 1,
    opacity: 1,
  });
  gsap.to("#back-icon", {
    duration: 0.5,
    ease: "back.inOut",
    rotation: 90,
    scale: 0,
    opacity: 0,
  });

  gsap.to("#nav-links", {
    duration: 0.5,
    ease: "power4.in",
    left: "-15rem",
  });

  gsap.to("#nav-background", {
    duration: 0.5,
    ease: "power4.in",
    opacity: 0,
    pointerEvents: "none",
  });
};
