"use client";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./DesignGallery.module.css";

const DesignGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: false,
    loop: true,
  });

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
    </div>
  );
};

export default DesignGallery;
