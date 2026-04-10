"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center bg-bg-primary px-6"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(200,169,126,0.05) 0%, transparent 60%)",
        }}
      />

      <motion.p
        className="body-text mb-4 text-sm uppercase tracking-[0.3em] text-white/40"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Starting at $349
      </motion.p>

      <motion.h2
        className="heading-xl max-w-3xl text-center text-4xl sm:text-5xl md:text-7xl text-white/90"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        Experience the Future
        <span className="block text-accent">of Sound</span>
      </motion.h2>

      <motion.p
        className="body-text mt-6 max-w-lg text-center text-base sm:text-lg text-white/50"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        40mm custom drivers. Adaptive noise cancellation. 60 hours of uninterrupted listening. This is audio, perfected.
      </motion.p>

      <motion.a
        href="#"
        className="group relative mt-10 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent/20 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(200,169,126,0.15)]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Pre-Order Now
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.a>

      {/* Bottom footer bar */}
      <div className="absolute bottom-0 w-full border-t border-white/5 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/25 font-body">
            © 2026 SonicWave Audio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/25 transition-colors duration-200 hover:text-white/50 font-body"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
