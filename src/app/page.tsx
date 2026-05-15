import styles from "./page.module.css";

import Hero from "../components/Hero";
import Skillsets from "../components/Skillsets/Skillsets";
import Gallery from "@/components/Gallery/Gallery";
import PrintProject from "../components/PrintProject";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Skillsets></Skillsets>
      <Gallery></Gallery>
      <PrintProject></PrintProject>
      <section id="blogs" className={styles.homeSection}>
        <div className={styles.container}>BLOGS</div>
      </section>
      <section id="about" className={styles.homeSection}>
        <div className={styles.container}>ABOUT</div>
      </section>
    </>
  );
}
