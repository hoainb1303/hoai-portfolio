import { Skillset } from "@/types";
import styles from "./SkillsetItem.module.css";

const SkillsetItem = ({ skillset }: { skillset: Skillset }) => {
  return (
    <div className={styles.skillset}>
      <svg className={styles.skillsetIcon} viewBox={skillset.icon.viewBox}>
        <path fill="currentColor" d={skillset.icon.path}></path>
      </svg>
      <h1>{skillset.title}</h1>
      <h2>{skillset.description}</h2>
      <div className={styles.skillList}>
        {skillset.skillList.map((item) => {
          return (
            <div className={styles.skillItem} key={item.id}>
              <svg viewBox={item.icon.viewBox}>
                <path fill="currentColor" d={item.icon.path} />
              </svg>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsetItem;
