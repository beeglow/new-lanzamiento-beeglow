"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = +new Date("2026-05-29T18:00:00-03:00") - +new Date();

  if (difference <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  return {
    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((difference / 1000 / 60) % 60),
    segundos: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {["Días", "Horas", "Minutos", "Segundos"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-white border border-[#6A704D]/10 shadow-sm"
          >
            <span className="text-3xl md:text-5xl font-sans font-bold text-[#6A704D]">
              00
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-[#8C7B70] mt-2">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const items = [
    { value: timeLeft.dias, label: "Días" },
    { value: timeLeft.horas, label: "Horas" },
    { value: timeLeft.minutos, label: "Minutos" },
    { value: timeLeft.segundos, label: "Segundos" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {items.map((item, index) => (
        <div
          key={item.label}
          className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-white border border-[#6A704D]/10 shadow-sm primary-glow animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
        >
          <span className="text-3xl md:text-5xl font-sans font-bold text-[#6A704D] tabular-nums">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-widest text-[#8C7B70] mt-2">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
