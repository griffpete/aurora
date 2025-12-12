"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, Calendar, Shield } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "App Controlled",
    description:
      "Control your lights from anywhere with our intuitive mobile app. Change colors, patterns, and schedules with a tap.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "Premium LED technology uses 90% less energy than traditional bulbs while lasting 50,000+ hours.",
  },
  {
    icon: Calendar,
    title: "Year-Round Beauty",
    description:
      "Perfect for holidays, special occasions, or everyday elegance. Adapt your lighting to any season or event.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description:
      "We stand behind our product with a comprehensive lifetime warranty. Your investment is protected forever.",
  },
];

export function Features() {
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
          <h2 className="text-white mb-4">
            Why Choose Trimlight?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Experience the perfect blend of innovation, quality, and convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
