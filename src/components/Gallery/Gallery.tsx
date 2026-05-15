import Carousel from "./Carousel";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionTitle}>
          <h1>My Designs</h1>
          <p>Some of my design works that I pround to put in the showcase</p>
        </div>
        <Carousel></Carousel>
      </div>
    </section>
  );
};

export default Gallery;
