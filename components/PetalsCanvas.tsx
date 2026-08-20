"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  opacity: number;
  color: string;
}

export default function PetalsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const colors = [
      "rgba(200, 164, 93, 0.4)",
      "rgba(232, 216, 180, 0.5)",
      "rgba(168, 181, 162, 0.4)",
      "rgba(244, 235, 215, 0.6)",
    ];

    const count = width < 768 ? 20 : 35;
    const petals: Petal[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 0.8 + 0.4,
      speedX: Math.random() * 0.6 - 0.3,
      angle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.5 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.angle);
      ctx.beginPath();

      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(petal.size / 2, -petal.size / 2, petal.size, -petal.size / 4, petal.size, 0);
      ctx.bezierCurveTo(petal.size, petal.size / 4, petal.size / 2, petal.size / 2, 0, 0);

      ctx.fillStyle = petal.color;
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.x += petal.speedX + Math.sin(petal.y * 0.01) * 0.2;
        petal.angle += petal.angularSpeed;

        if (petal.y > height + 20) {
          petal.y = -20;
          petal.x = Math.random() * width;
        }

        drawPetal(petal);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}
