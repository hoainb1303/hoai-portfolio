"use client";
import { RefObject, useRef } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(MotionPathPlugin, SplitText);

const Hero = () => {
  const heroTextRef = useRef(null);

  useGSAP(() => {
    HeroTextAnimation(heroTextRef);
    SkillRotation();
  }, []);

  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.heroContent}`}>
        <div className={`$styles.heroLeft}`}>
          <div ref={heroTextRef} className={`${styles.heroText}`}>
            <h3>Hey! I&apos;m Hoai Nguyen.</h3>
            <h1>A UX/UI Designer</h1>
            <h1>Front-end Developer</h1>
            <p>
              I enjoy building clean, user-friendly web application, creating
              simple but smart and practical solutions, supported by a strong
              foundation in system thinking.
            </p>
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

const HeroTextAnimation = (ref: RefObject<null>) => {
  const split = SplitText.create(ref.current, { type: "words" });
  gsap.from(split.words, {
    x: 150,
    opacity: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.04,
  });
};

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
      onComplete: () => {
        Looping();
      },
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
