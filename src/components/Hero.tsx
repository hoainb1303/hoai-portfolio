"use client";
import styles from "./Hero.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

const Hero = () => {
  useGSAP(() => {
    SkillRotation();
  }, []);

  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.heroContent}`}>
        <div className={`$styles.heroLeft}`}>
          <div className={`${styles.heroText}`}>
            <p>Hi! My name is Hoai.</p>
          </div>
        </div>
        <div className={`${styles.heroRight}`}>
          <div className={`${styles.heroImage}`}>
            <svg
              id="svg-path"
              className={`${styles.heroSvgPath}`}
              viewBox="0 0 512 512"
            >
              <path id="circle-path" d="M256,0 a256,256 0 1,1 -0.1,0" />
            </svg>
            <div id="hero-skill-1" className={`${styles.heroSkill}`}>
              <p>SKILL 1</p>
            </div>
            <div id="hero-skill-2" className={`${styles.heroSkill}`}>
              <p>SKILL 2</p>
            </div>
            <div id="hero-skill-3" className={`${styles.heroSkill}`}>
              <p>SKILL 3</p>
            </div>
            <p>IMAGE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const SkillRotation = () => {
  const duration = 6;

  for (let i: number = 1; i <= 3; i++) {
    const target: string = `#hero-skill-${i}`;
    const Looping = () =>
      gsap.to(target, {
        motionPath: {
          path: "#circle-path",
          align: "#circle-path",
          alignOrigin: [0.5, 0.5],
        },
        duration: duration,
        ease: "none",
        repeat: -1,
      });

    // Show up
    gsap.to(target, {
      scale: 1,
      ease: "elastic.out(1,0.5)",
      duration: 1,
      delay: (duration / 3) * (i - 1),
    });
    // Rorate
    gsap.to(target, {
      motionPath: {
        path: "#circle-path",
        align: "#circle-path",
        alignOrigin: [0.5, 0.5],
        start: 0.75,
        end: 1.0,
      },
      duration: duration / 2,
      delay: (duration / 3) * (i - 1),
      ease: "power2.in",
      onComplete: Looping,
    });

    // Hover
    const box = document.querySelector(target);
    box?.addEventListener("mouseenter", () => {
      gsap.to(target, {
        scale: 1.5,
        ease: "back.in",
        duration: 0.5,
      });
    });

    box?.addEventListener("mouseleave", () => {
      gsap.to(target, {
        scale: 1,
        ease: "back.in",
        delay: 1,
        duration: 0.5,
      });
    });
  }
};
