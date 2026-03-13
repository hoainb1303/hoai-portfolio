"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import styles from "./Works.module.css";

const Works = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <section id="works" className={`${styles.works}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.designGallery}`}>
          <div className={`${styles.designItem}`}>Image 1</div>
          <div className={`${styles.designItem}`}>Image 2</div>
          <div className={`${styles.designItem}`}>Image 3</div>
        </div>
      </div>
    </section>
  );
};

export default Works;
