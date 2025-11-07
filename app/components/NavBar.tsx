"use client";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <nav className={`{styles.navbar} grid grid-cols-5 justify-between`}>
      <ScrollLink className="nav-item" to="home">
        Home
      </ScrollLink>
      <ScrollLink className="nav-item" to="about">
        About
      </ScrollLink>
      <ScrollLink className="nav-item" to="skill">
        Skill
      </ScrollLink>
      <ScrollLink className="nav-item" to="projects">
        Projects
      </ScrollLink>
      <ScrollLink className="nav-item" to="contact">
        Contact
      </ScrollLink>
    </nav>
  );
};

export default NavBar;
