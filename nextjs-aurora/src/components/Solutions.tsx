"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Shield,
  Home,
  Circle,
  Umbrella,
  Waves,
  Trophy,
  ArrowDown,
  Trees,
  ChevronRight,
} from "lucide-react";

interface SolutionsProps {
  title?: string;
  description?: string;
}

const defaultSolutions = [
  {
    icon: Sparkles,
    title: "Holiday",
    description: "Celebrate every season with vibrant, customizable displays",
    color: "from-red-500 to-green-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Illuminate your property for enhanced safety and peace of mind",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Home,
    title: "Accent",
    description: "Highlight architectural features with precision lighting",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Circle,
    title: "Globe",
    description: "Elegant globe lighting for sophisticated outdoor ambiance",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Umbrella,
    title: "Patio",
    description: "Create the perfect outdoor entertainment atmosphere",
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: Waves,
    title: "Pool",
    description: "Transform your pool area into a stunning nighttime oasis",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Trophy,
    title: "Game Day",
    description: "Show your team spirit with custom color combinations",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: ArrowDown,
    title: "Downlighting",
    description: "Professional downward lighting for walkways and entries",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Trees,
    title: "Landscape",
    description: "Accentuate your landscaping with strategic LED placement",
    color: "from-green-500 to-lime-500",
    bgColor: "bg-green-500/10",
  },
];

export function Solutions({
  title = "Trimlight Solutions",
  description = "From festive holidays to everyday elegance, discover the perfect lighting solution for every occasion and space",
}: SolutionsProps) {
  const solutions = defaultSolutions;
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const visibleSolutions = isMobile && !showAll ? solutions.slice(0, 3) : solutions;

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-white mb-4">{title}</h2>
          <p className="text-base md:text-xl text-white/60 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
          {visibleSolutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${solution.color}`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 ${solution.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      className={`w-8 h-8 bg-gradient-to-br ${solution.color} text-transparent`}
                      style={{
                        filter: "drop-shadow(0 0 8px currentColor)",
                        color: "white",
                      }}
                    />
                  </motion.div>

                  <h3 className="text-white mb-3 flex items-center justify-between">
                    {solution.title}
                    <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </h3>

                  <p className="text-white/60 group-hover:text-white/80 transition-colors">
                    {solution.description}
                  </p>
                </div>

                {/* Animated border effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              </motion.a>
            );
          })}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less — mobile only */}
        {isMobile && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-16"
        >
          <p className="text-white/60 mb-6">
            Not sure which solution is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-white/20 transition-colors"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
