"use client";

import { RevealFx } from "@once-ui-system/core";
import { person } from "@/resources";
import { Starfield } from "./Starfield";
import styles from "./SpaceHero.module.scss";

const roles = ["Computer Engineer", "Full-Stack Developer", "IoT Builder"];

export function SpaceHero() {
  return (
    <div className={styles.wrapper}>
      <Starfield />
      <div className={styles.content}>
        <RevealFx translateY="8">
          <div>
            <div className={styles.nameOutline}>{person.firstName.split(" ")[0]}</div>
            <div className={styles.nameSolid}>{person.lastName}</div>
            <div className={styles.nickname}>( engineer )</div>

            <div className={styles.roleList}>
              {roles.map((role) => (
                <div key={role} className={styles.roleItem}>
                  <span className={styles.star}>✦</span>
                  {role}
                </div>
              ))}
            </div>
          </div>
        </RevealFx>

        <RevealFx translateY="8" delay={0.2}>
          <div className={styles.photoFrame}>
            <img src={person.avatar} alt={person.name} />
          </div>
        </RevealFx>
      </div>
      <div className={styles.scrollHint}>scroll to explore</div>
    </div>
  );
}