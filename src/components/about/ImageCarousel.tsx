"use client";

import { useState } from "react";
import { Media, Row, Column, IconButton, Text } from "@once-ui-system/core";

interface CarouselImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  function goPrev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function goNext() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  const current = images[index];

  return (
    <Column fillWidth gap="8">
      <Row fillWidth border="neutral-medium" radius="m" style={{ position: "relative" }}>
        <Media
          enlarge
          radius="m"
          sizes="(max-width: 560px) 100vw, 700px"
          alt={current.alt}
          src={current.src}
          aspectRatio="16 / 9"
        />
        {images.length > 1 && (
          <>
            <Row
              style={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IconButton
                icon="chevronLeft"
                variant="secondary"
                size="m"
                onClick={goPrev}
                aria-label="Previous image"
              />
            </Row>
            <Row
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IconButton
                icon="chevronRight"
                variant="secondary"
                size="m"
                onClick={goNext}
                aria-label="Next image"
              />
            </Row>
            <Row
              style={{
                position: "absolute",
                bottom: 8,
                right: 12,
                background: "rgba(0,0,0,0.5)",
                borderRadius: "8px",
                padding: "2px 8px",
              }}
            >
              <Text variant="body-default-xs" onBackground="neutral-strong">
                {index + 1} / {images.length}
              </Text>
            </Row>
          </>
        )}
      </Row>
      {images.length > 1 && (
        <Row gap="4" horizontal="center">
          {images.map((_, i) => (
            <Row
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                cursor: "pointer",
                background: i === index ? "var(--brand-solid-strong)" : "var(--neutral-alpha-medium)",
              }}
            />
          ))}
        </Row>
      )}
    </Column>
  );
}