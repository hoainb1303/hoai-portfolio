import DesignGallery from "./DesignGallery";

import styles from "./Works.module.css";

const Works = () => {
  return (
    <section id="works" className={`${styles.works}`}>
      <div className={`${styles.worksContainer}`}>
        <h1>My Works</h1>
        <DesignGallery></DesignGallery>
      </div>
    </section>
  );
};

export default Works;
