import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section id="hero" className={styles.homeSection}>
        <div className={styles.container}>
          SORRY FOR BEING SLOW THIS YEAR/nILL BE BETTER NEXT YEAR
        </div>
      </section>
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
