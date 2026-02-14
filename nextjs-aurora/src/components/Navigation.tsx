"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LightBulb } from "./LightBulb";
import { Phone, Menu, X } from "lucide-react";

interface navigationProps {
  companyTitle: string;
}

export function Navigation({companyTitle}: navigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const opacity = Math.min(scrollY / 100, 0.95);
      navRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lightCount = 15;

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      {/* Decorative light string — only rendered on desktop */}
      {isDesktop && (
        <div className="absolute top-0 left-0 right-0 flex justify-around items-center py-2 px-8">
          {Array.from({ length: lightCount }).map((_, i) => (
            <LightBulb key={i} delay={i * 0.05} index={i} />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 md:mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="text-white">{companyTitle}</h3>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors text-lg py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 shadow-lg w-full active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
