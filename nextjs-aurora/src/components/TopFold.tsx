"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

interface TopFoldProps {
  title?: string;
  coloredTitle?: string;
  subTitle?: string;
  description?: string;
  ctaText?: string;
  secondCtaText?: string;
  heroImageUrl?: string;
  stats?: Array<{ title: string; description: string }>;
}

export function TopFold({
  title = "Transform Your Home",
  coloredTitle = "With Custom LED Lighting",
  subTitle = "Permanent LED Lighting Solutions",
  description = "Year-round elegance meets cutting-edge technology. Control millions of colors from your phone. No more ladders, no more hassle.",
  ctaText = "Get Free Quote",
  secondCtaText = "View Gallery",
  heroImageUrl = "https://images.unsplash.com/photo-1669219905807-aa5aa1bb3447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBlcm1hbmVudCUyMGxpZ2h0cyUyMG5pZ2h0fGVufDF8fHx8MTc2NTUxNDIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  stats = [
    { title: "50K+", description: "Homes Illuminated" },
    { title: "16M+", description: "Color Options" },
    { title: "Lifetime", description: "Warranty" },
  ],
}: TopFoldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    [],
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="House with permanent lighting at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10" suppressHydrationWarning>
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            suppressHydrationWarning
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            <Sparkles className="w-4 h-4" />
            <span>{subTitle}</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-6"
        >
          {title}
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            {coloredTitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl text-white/80 mb-6 md:mb-10 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center space-x-2 shadow-2xl w-full sm:w-auto justify-center"
          >
            <span>{ctaText}</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-white/20 transition-colors w-full sm:w-auto"
          >
            {secondCtaText}
          </motion.button>
        </motion.div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.title}
                </div>
                <div className="text-white/60">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
