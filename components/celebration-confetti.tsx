"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function CelebrationConfetti() {
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#6A704D", "#A6777F", "#EDE2D2", "#422E26", "#D4A373"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return null;
}
