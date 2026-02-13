import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.heroContent}`}>
        I AM A FRONT-END DEVLEOPER / DESIGNER
      </div>
    </section>
  );
};

export default Hero;
