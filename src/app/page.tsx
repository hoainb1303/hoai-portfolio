import Image from "next/image";
import styles from "./page.module.css";

import Hero from "../../components/Hero";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <section id="skills" className={styles.homeSection}>
        <div className={styles.container}>SKILLS</div>
      </section>
      <section id="projects" className={styles.homeSection}>
        <div className={styles.container}>PROJECTS</div>
      </section>
      <section id="about" className={styles.homeSection}>
        <div className={styles.container}>ABOUT</div>
      </section>
      <section id="contact" className={styles.homeSection}>
        <div className={styles.container}>CONTACT</div>
      </section>
    </>
  );
}
