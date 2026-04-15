import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.heroContent}`}>
        <div className={`${styles.heroText}`}>
          <p>Hi! My name is Hoai.</p>
        </div>
        <div className={`${styles.heroImage}`}>
          <p>IMAGE</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
