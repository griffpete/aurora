"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = Icons as any;

// Convert kebab-case to PascalCase
const toPascalCase = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

interface FeaturesProps {
  title?: string;
  description?: string;
  cards?: Array<{
    Title: string;
    description: string;
    lucideIconName: string;
  }>;
}

export function Features({
  title = "Why Choose Trimlight?",
  description = "Experience the perfect blend of innovation, quality, and convenience",
  cards,
}: FeaturesProps) {
  if (!cards || cards.length === 0) return null;

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">{title}</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
          }}
        >
          {cards.map((feature, index) => {
            const Icon =
              iconMap[toPascalCase(feature.lucideIconName)] ||
              iconMap.HelpCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
