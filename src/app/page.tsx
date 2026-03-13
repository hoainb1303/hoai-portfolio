import Image from "next/image";
import styles from "./page.module.css";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Works from "../components/Works";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Skills></Skills>
      <Works></Works>
      <section id="blogs" className={styles.homeSection}>
        <div className={styles.container}>BLOGS</div>
      </section>
      <section id="about" className={styles.homeSection}>
        <div className={styles.container}>ABOUT</div>
      </section>
    </>
  );
}
