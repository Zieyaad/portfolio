"use client";
import { useEffect, useRef } from "react";

const AnimatedBG = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let time = 0;
    let animationFrameId: number;

    const color = (x: number, y: number, r: number, g: number, b: number) => {
      if (!context) return;
      context.fillStyle = `rgb(${r}, ${g}, ${b})`;
      context.fillRect(x, y, 10, 10);
    };

    const R = (x: number, y: number, time: number) => {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + time));
    };

    const G = (x: number, y: number, time: number) => {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300,
            ),
      );
    };

    const B = (x: number, y: number, time: number) => {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(time / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100,
            ),
      );
    };

    const startAnimation = () => {
      for (let x = 0; x <= 30; x++) {
        for (let y = 0; y <= 30; y++) {
          color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
        }
      }
      time = time + 0.01;
      animationFrameId = window.requestAnimationFrame(startAnimation);
    };

    startAnimation();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] absolute z-10 left-0 right-0 top-0 bottom-0 overflow-hidden opacity-50">
      <canvas
        ref={canvasRef}
        width={32}
        height={32}
        className="absolute top-0 left-0 w-full h-full z-10"
        // style={{ filter: "blur(100px)" }}
      />
      <div className="absolute z-20 left-0 top-0 w-full h-full bg-gradient"></div>
    </div>
  );
};

export default AnimatedBG;
