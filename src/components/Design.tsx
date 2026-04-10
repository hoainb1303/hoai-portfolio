import DesignGallery from "./DesignGallery";

import styles from "./Design.module.css";

const Design = () => {
  return (
    <section id="works" className={`${styles.works}`}>
      <div className={`${styles.worksContainer}`}>
        <h1>My Works</h1>
        <DesignGallery></DesignGallery>
      </div>
    </section>
  );
};

export default Design;
