import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div id="hero" className={styles.hero}>
        HERO
      </div>
      <div id="skills" className={styles.skills}>
        SKILLS
      </div>
      <div id="projects" className={styles.projects}>
        PROJECTS
      </div>
      <div id="about" className={styles.about}>
        ABOUT
      </div>
      <div id="contact" className={styles.contact}>
        CONTACT
      </div>
    </>
  );
}
