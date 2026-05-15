import styles from "./Skillsets.module.css";
import SkillsetItem from "./SkillsetItem";

import { skillsetList } from "../../data/skill";

const Skillsets = () => {
  return (
    <section id="Skillsets" className={`${styles.skillsets}`}>
      <div className={`${styles.sectionContent}`}>
        <div className={`${styles.sectionTitle}`}>
          <h1>My Skillsets</h1>
          <h2>Everything I gathered througthout my tech journey</h2>
        </div>
        <div className={`${styles.skillsetList}`}>
          {skillsetList.map((skillset) => {
            return <SkillsetItem key={skillset.id} skillset={skillset} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skillsets;
