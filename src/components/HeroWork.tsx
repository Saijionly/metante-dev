"use client";

import { Column, Row, Text, Media } from "@once-ui-system/core";
import { about } from "@/resources";
import styles from "./HeroWork.module.scss";

export function HeroWork() {
  const items = about.projects.items;
  if (!items || items.length === 0) return null;

  return (
    <Row fillWidth gap="16" s={{ direction: "column" }} wrap horizontal="center">
      {items.map((project, index) => (
        <a key={index} href={`${about.path}#${about.projects.title}`} style={{ textDecoration: "none" }}>
          <Column className={styles.card} gap="8" minWidth={14} maxWidth={18}>
            <Row
              className={styles.thumb}
              border="neutral-medium"
              radius="m"
              fillWidth
              height={9}
            >
              {project.images && project.images[0] && (
                <Media
                  sizes="220px"
                  radius="m"
                  aspectRatio="16 / 9"
                  alt={project.images[0].alt}
                  src={project.images[0].src}
                />
              )}
            </Row>
            <Column gap="2" paddingX="4">
              <Text variant="body-strong-s" onBackground="neutral-strong">
                {project.name}
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {project.role}
              </Text>
            </Column>
          </Column>
        </a>
      ))}
    </Row>
  );
}