"use client";
import React from "react";
import { useState } from "react";
import styles from "./Skills.module.css";
import { skills } from "../data/skill";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(skills[0]);

  return (
    <section id="skills" className={`${styles.skills}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.skillList}`}>
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className={`${styles.skillItem}`}
                onMouseEnter={() => {
                  setActiveSkill(skill);
                }}
              >
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
        <div className={`${styles.skillDetail}`}>
          <p>{activeSkill.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
