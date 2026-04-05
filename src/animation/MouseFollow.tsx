"use client";

import React, { useState, useRef } from "react";

interface Props {
  children: React.ReactNode;
  intensity?: number; // কতটুকু নড়াচড়া করবে
  className?: string; // বাইরের স্থির ডিভ-এর স্টাইল
}

export default function MouseFollow({
  children,
  intensity = 40,
  className = "",
}: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect();

    // কেন্দ্র থেকে মাউসের দূরত্ব বের করা (-0.5 থেকে 0.5)
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setPosition({
      x: x * intensity,
      y: y * intensity,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="w-full h-full transition-transform duration-500 ease-out will-change-transform scale-110"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
