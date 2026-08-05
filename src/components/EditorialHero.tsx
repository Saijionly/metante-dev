"use client";

import { Column, Row, Text, RevealFx, Media } from "@once-ui-system/core";
import { person } from "@/resources";
import styles from "./EditorialHero.module.scss";

export function EditorialHero() {
  return (
    <Column fillWidth className={styles.wrapper} gap="0">
      <RevealFx translateY="8">
        <Row fillWidth horizontal="between" vertical="start" wrap gap="24">
          <Column gap="4">
            <div className={styles.bigName}>{person.firstName.split(" ")[0]}</div>
            <div className={styles.bigName}>{person.lastName}</div>
          </Column>
          <Row className={styles.avatarFloat} width={7} height={7}>
            <Media src={person.avatar} alt={person.name} sizes="112px" />
          </Row>
        </Row>
      </RevealFx>

      <RevealFx translateY="8" delay={0.15}>
        <Row fillWidth paddingTop="24" paddingBottom="24" horizontal="between" wrap gap="16">
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            style={{ maxWidth: "360px" }}
          >
            As a multidisciplinary engineer, I focus on building reliable, efficient, and
            innovative technology solutions that bridge software and hardware.
          </Text>
          <Column align="end" gap="4">
            <div className={styles.roleLabel}>computer engineer</div>
            <div className={styles.roleLabel}>software developer</div>
            <div className={styles.roleLabel}>hardware developer</div>
            <Text variant="label-default-s" onBackground="neutral-weak" paddingTop="4">
              based in {person.location.split("/")[1]?.replace("_", " ")}, PH
            </Text>
          </Column>
        </Row>
      </RevealFx>

      <div className={styles.divider} />
    </Column>
  );
}