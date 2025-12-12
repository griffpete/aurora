"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Professional installation by certified technicians",
  "Customizable to your exact home dimensions",
  "Weather-resistant and built to last decades",
  "Smart home integration compatible",
  "Programmable schedules and animations",
  "Local support and service",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">
              The Future of Home Lighting
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Trimlight's patented permanent lighting system is professionally
              installed along your roofline, offering unmatched versatility and
              control. Say goodbye to the hassle of seasonal decorating and hello
              to effortless elegance year-round.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg"
            >
              Learn More About Trimlight
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Interactive color wheel */}
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #ef4444, #f97316, #fbbf24, #10b981, #3b82f6, #8b5cf6, #ec4899, #ef4444)",
                }}
              />
              <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">16M+</div>
                  <div className="text-white/60">Color Options</div>
                </div>
              </div>
              {/* Orbiting lights */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-white"
                  style={{
                    top: "50%",
                    left: "50%",
                    marginLeft: "-8px",
                    marginTop: "-8px",
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i * Math.PI * 2) / 8) * 180,
                    y: Math.sin((i * Math.PI * 2) / 8) * 180,
                  }}
                  transition={{
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
