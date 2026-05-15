"use client";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButtons";

import styles from "./Carousel.module.css";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      //containScroll: false,
      loop: true,
    },
    [Autoplay({ delay: 3000, playOnInit: true })],
  );

  const [imageTarget, setImageTarget] = useState<number>(0);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const images: number[] = Array.from(Array(10).keys());

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselFocus}>
        {emblaApi?.selectedScrollSnap()}
      </div>
      <div className={styles.carouselViewPort} ref={emblaRef}>
        <div className={styles.photoList}>
          {images.map((index) => (
            <div key={index} className={`${styles.photoItem}`}>
              <div className={`${styles.photoItemContent}`}>{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carouselControl}>
        <div>
          <PrevButton onPrevButtonClick={onPrevButtonClick} />
          <NextButton onNextButtonClick={onNextButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
