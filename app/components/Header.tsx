"use client";
import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <header className={styles.header}>
      <div className="header-container">
        <div className="header-responsive">
          <div className="header-logo">LOGO</div>
          <div className="nav-hamburger" onClick={toggleMenu}></div>
        </div>
        <nav className={`navbar ${menuToggle ? "menu-open" : "menu-close"}`}>
          <ScrollLink className="nav-item" to="home">
            Home
          </ScrollLink>
          <ScrollLink className="nav-item" to="about">
            About
          </ScrollLink>
          <ScrollLink className="nav-item" to="skill">
            Skills
          </ScrollLink>
          <ScrollLink className="nav-item" to="projects">
            Projects
          </ScrollLink>
          <ScrollLink className="nav-item" to="contact">
            Contact
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
