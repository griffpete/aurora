"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { LightBulb } from "./LightBulb";
import { Phone } from "lucide-react";

interface navigationProps {
  companyTitle: string;
}

export function Navigation({companyTitle}: navigationProps) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  const lightCount = 12;

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      {/* Decorative light string */}
      <div className="absolute top-0 left-0 right-0 flex justify-around items-center py-2 px-8">
        {Array.from({ length: lightCount }).map((_, i) => (
          <LightBulb key={i} delay={i * 0.05} index={i} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 mt-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <h3 className="text-white">{companyTitle}</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-8"
          >
            <a
              href="#features"
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="text-white/80 hover:text-white transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
