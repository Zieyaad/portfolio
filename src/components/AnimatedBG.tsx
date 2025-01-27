"use client";

import React, { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
}

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobs = useRef<Blob[]>([
    // Large, slow-moving background blobs
    {
      x: 0.3,
      y: 0.3,
      size: 0.8,
      vx: 0.00025, // Doubled speed
      vy: 0.0002, // Doubled speed
      color: "#ff0080",
    },
    {
      x: 0.7,
      y: 0.5,
      size: 0.7,
      vx: -0.0002, // Doubled speed
      vy: 0.00025, // Doubled speed
      color: "#7928ca",
    },
    {
      x: 0.4,
      y: 0.7,
      size: 0.75,
      vx: 0.0003, // Doubled speed
      vy: -0.000225, // Doubled speed
      color: "#00ff88",
    },
    // Medium, slightly faster blobs for middle layer
    {
      x: 0.45,
      y: 0.4,
      size: 0.4,
      vx: 0.000375, // Doubled speed
      vy: 0.0003, // Doubled speed
      color: "#ff0080",
    },
    {
      x: 0.6,
      y: 0.6,
      size: 0.45,
      vx: -0.00035, // Doubled speed
      vy: 0.000325, // Doubled speed
      color: "#7928ca",
    },
    // Small, faster blobs for detail
    {
      x: 0.5,
      y: 0.5,
      size: 0.2,
      vx: 0.0005, // Doubled speed
      vy: -0.00045, // Doubled speed
      color: "#00ff88",
    },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const drawLayer = (
      blobs: Blob[],
      blur: number,
      composite: GlobalCompositeOperation,
      alpha: number,
    ) => {
      ctx.save();
      ctx.filter = `blur(${blur}px)`;
      ctx.globalCompositeOperation = composite;
      ctx.globalAlpha = alpha;

      blobs.forEach((blob) => {
        const gradient = ctx.createRadialGradient(
          blob.x * canvas.width,
          blob.y * canvas.height,
          0,
          blob.x * canvas.width,
          blob.y * canvas.height,
          blob.size * Math.max(canvas.width, canvas.height),
        );

        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      ctx.restore();
    };

    const animate = () => {
      // Update positions
      blobs.current.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges with some padding
        if (blob.x <= -0.2 || blob.x >= 1.2) blob.vx *= -1;
        if (blob.y <= -0.2 || blob.y >= 1.2) blob.vy *= -1;
      });

      // Clear canvas with a dark background
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw background layer - large, very blurry blobs
      drawLayer(blobs.current.slice(0, 3), 150, "screen", 0.8);

      // Draw middle layer - medium blobs with different blur and blend
      drawLayer(blobs.current.slice(3, 5), 100, "screen", 0.6);

      // Draw detail layer - small, less blurry blobs
      drawLayer(blobs.current.slice(5), 50, "screen", 0.4);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />
    </div>
  );
}

export default App;
