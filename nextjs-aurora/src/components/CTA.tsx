"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Get a free consultation and quote. Our experts will help you design
            the perfect lighting solution for your home.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Phone,
              title: "Call Us",
              content: "(555) 123-4567",
              action: "tel:5551234567",
            },
            {
              icon: Mail,
              title: "Email Us",
              content: "info@trimlight.local",
              action: "mailto:info@trimlight.local",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              content: "Your City, ST",
              action: "#",
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.action}
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
                <div className="text-white">{contact.content}</div>
              </motion.a>
            );
          })}
        </div>

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
            className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-12 py-5 rounded-full shadow-2xl inline-flex items-center space-x-3"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg">Schedule Free Consultation</span>
          </motion.button>

          <p className="text-white/40 mt-6">
            No obligation • Free quote • Professional installation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
