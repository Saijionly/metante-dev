"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  phase: number;
  twinkleSpeed: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      const count = 500;
      stars = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        z: Math.random() * width,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.0018 + 0.0006,
      }));
    }

    function handleScroll() {
      scrollRef.current = window.scrollY;
    }

    function draw(time: number) {
      if (!canvas || !ctx) return;
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      const baseSpeed = 1.2;
      const scrollBoost = Math.min(scrollRef.current * 0.04, 18);
      const speed = baseSpeed + scrollBoost;

      const cx = width / 2;
      const cy = height / 2;

      for (const star of stars) {
        star.z -= speed;
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width;
          star.y = (Math.random() - 0.5) * height;
          star.z = width;
        }

        const k = 128 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px < 0 || px > width || py < 0 || py > height) continue;

        const size = Math.max(0.3, (1 - star.z / width) * 2.2);
        const depthOpacity = Math.min(1, (1 - star.z / width) * 1.5);
        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(time * star.twinkleSpeed + star.phase));
        const opacity = depthOpacity * twinkle;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}