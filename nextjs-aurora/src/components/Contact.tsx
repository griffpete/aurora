"use client";

import { useMemo } from "react";
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

interface ContactProps {
  title?: string;
  description?: string;
  cards?: Array<{
    title: string;
    description: string;
    lucideIconName: string;
  }>;
  ctaText?: string;
  pullBack?: string;
}

export function Contact({
  title = "Ready to Transform Your Home?",
  description = "Get a free consultation and quote. Our experts will help you design the perfect lighting solution for your home.",
  cards,
  ctaText = "Schedule Free Consultation",
  pullBack = "No obligation • Free quote • Professional installation",
}: ContactProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 3,
      })),
    [],
  );

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0" suppressHydrationWarning>
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-purple-500 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            suppressHydrationWarning
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-white mb-4 md:mb-6">{title}</h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Contact cards */}
        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {cards.map((contact, index) => {
              const Icon =
                iconMap[toPascalCase(contact.lucideIconName)] ||
                iconMap.HelpCircle;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white/60 mb-1">{contact.title}</div>
                  <div className="text-white">{contact.description}</div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Main CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-8 py-4 md:px-12 md:py-5 rounded-full shadow-2xl inline-flex items-center space-x-2 md:space-x-3"
          >
            <Icons.Phone className="w-5 h-5" />
            <span className="text-base md:text-lg">{ctaText}</span>
          </motion.button>

          <p className="text-white/40 mt-6">{pullBack}</p>
        </motion.div>
      </div>
    </section>
  );
}
