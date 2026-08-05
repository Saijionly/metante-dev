"use client";

import { useRef, useState } from "react";
import { RevealFx } from "@once-ui-system/core";
import { person } from "@/resources";
import { Starfield } from "./Starfield";
import styles from "./SpaceHero.module.scss";

const roles = ["Computer Engineer", "Full-Stack Developer", "IoT Builder"];

export function SpaceHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -10, ry: px * 10 });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Starfield />
      <div className={styles.perspective}>
        <div
          className={styles.content}
          style={{
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          }}
        >
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
      </div>
      <div className={styles.scrollHint}>scroll to explore</div>
    </div>
  );
}