"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface LightBulbProps {
  delay?: number;
  index?: number;
}

const colors = [
  "#3b82f6", // blue
  "#ef4444", // red
  "#10b981", // green
  "#f59e0b", // amber
  "#8b5cf6", // purple
  "#ec4899", // pink
  "#14b8a6", // teal
  "#f97316", // orange
];

export function LightBulb({ delay = 0, index = 0 }: LightBulbProps) {
  const [colorIndex, setColorIndex] = useState(index % colors.length);
  const [isNearMouse, setIsNearMouse] = useState(false);
  const lightRef = useRef<HTMLDivElement>(null);

  // Auto-rotate colors
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000 + index * 100); // Slightly offset timing for wave effect

    return () => clearInterval(interval);
  }, [index]);

  // Mouse proximity detection
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!lightRef.current) return;

      const rect = lightRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      // Turn off if mouse is within 150px
      setIsNearMouse(distance < 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={lightRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="relative flex flex-col items-center"
    >
      {/* Light bulb */}
      <motion.div
        className="w-5 h-5 rounded-full relative z-10"
        style={{
          backgroundColor: isNearMouse ? "#1f2937" : colors[colorIndex],
          boxShadow: isNearMouse
            ? "none"
            : `0 0 15px ${colors[colorIndex]}, 0 0 30px ${colors[colorIndex]}`,
        }}
        animate={{
          scale: isNearMouse ? 0.8 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
      />

      {/* Shining light triangle */}
      {!isNearMouse && (
        <motion.div
          className="absolute top-5"
          style={{
            width: 0,
            height: 0,
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderTop: `100px solid ${colors[colorIndex]}`,
            filter: `blur(12px)`,
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            opacity: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      )}

      {/* Glow effect */}
      {!isNearMouse && (
        <motion.div
          className="absolute top-0 w-5 h-5 rounded-full"
          style={{
            backgroundColor: colors[colorIndex],
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}