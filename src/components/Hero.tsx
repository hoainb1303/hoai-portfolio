import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p>I AM A FRONT-END DEVLEOPER / DESIGNER</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
