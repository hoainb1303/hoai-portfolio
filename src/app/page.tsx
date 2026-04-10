import Image from "next/image";
import styles from "./page.module.css";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Design from "../components/Design";
import PrintProject from "../components/PrintProject";

export default function Home() {
  return (
    <>
      {/* <Hero></Hero>
      <Skills></Skills>
      <Design></Design>
      <PrintProject></PrintProject> */}
      <section id="blogs" className={styles.homeSection}>
        <div className={styles.container}>BLOGS</div>
      </section>
      <section id="about" className={styles.homeSection}>
        <div className={styles.container}>ABOUT</div>
      </section>
    </>
  );
}
