"use client";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./DesignGallery.module.css";

const DesignGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: false,
      loop: true,
    },
    [Autoplay({ delay: 3000, playOnInit: true })],
  );

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const images: number[] = Array.from(Array(10).keys());
  return (
    <div className={`${styles.designGallery}`} ref={emblaRef}>
      <div className={`${styles.galleryContainer}`}>
        {images.map((index) => (
          <div key={index} className={`${styles.galleryItem}`}>
            <div className={`${styles.itemImage}`}>{index + 1}</div>
          </div>
        ))}
      </div>
      <div className={`${styles.navigationContainer}`}>
        <button onClick={goToPrev} className={`${styles.prevButton}`}>
          Prev
        </button>
        <button onClick={goToNext} className={`${styles.nextButton}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DesignGallery;
