"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const colorThemes = [
  {
    name: "Christmas",
    colors: ["#ef4444", "#10b981", "#ffffff"],
    gradient: "from-red-500 to-green-500",
  },
  {
    name: "Halloween",
    colors: ["#f97316", "#8b5cf6", "#000000"],
    gradient: "from-orange-500 to-purple-600",
  },
  {
    name: "Patriotic",
    colors: ["#ef4444", "#ffffff", "#3b82f6"],
    gradient: "from-red-500 via-white to-blue-500",
  },
  {
    name: "Ocean",
    colors: ["#06b6d4", "#3b82f6", "#14b8a6"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    name: "Sunset",
    colors: ["#f59e0b", "#ec4899", "#8b5cf6"],
    gradient: "from-amber-500 via-pink-500 to-purple-600",
  },
  {
    name: "Spring",
    colors: ["#10b981", "#fbbf24", "#ec4899"],
    gradient: "from-green-500 via-yellow-500 to-pink-500",
  },
];

interface DemoProps {
  title?: string;
  description?: string;
}

export function Demo({
  title = "Endless Color Possibilities",
  description = "Create the perfect ambiance for any occasion with 16 million color combinations",
}: DemoProps) {
  const [selectedTheme, setSelectedTheme] = useState(0);

  return (
    <section
      id="demo"
      className="py-12 md:py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-white mb-4">{title}</h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Theme selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {colorThemes.map((theme, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTheme(index)}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full border-2 transition-all ${
                selectedTheme === index
                  ? "border-white bg-white/10 text-white"
                  : "border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              {theme.name}
            </motion.button>
          ))}
        </div>

        {/* Color preview */}
        <motion.div
          key={selectedTheme}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-800 border-4 border-white/10 shadow-2xl">
            {/* Animated light strip simulation */}
            <div className="absolute inset-0 flex items-end p-8">
              <div className="w-full flex justify-around">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        colorThemes[selectedTheme].colors[
                          i % colorThemes[selectedTheme].colors.length
                        ],
                      boxShadow: `0 0 20px ${
                        colorThemes[selectedTheme].colors[
                          i % colorThemes[selectedTheme].colors.length
                        ]
                      }`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* House silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 400 300"
                className="w-2/3 h-2/3 opacity-20"
                fill="white"
              >
                <polygon points="200,50 100,150 100,250 300,250 300,150" />
                <rect x="150" y="180" width="40" height="70" />
                <rect x="210" y="180" width="40" height="70" />
                <rect x="170" y="120" width="60" height="50" />
              </svg>
            </div>

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${colorThemes[selectedTheme].gradient} opacity-30 mix-blend-overlay`}
            />
          </div>

          {/* Color chips */}
          <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            {colorThemes[selectedTheme].colors.map((color, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white/20 shadow-lg"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 30px ${color}`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
