"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-bg-primary">
      {/* Subtle top light glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,169,126,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Brand name */}
      <motion.p
        className="body-text mb-4 text-sm uppercase tracking-[0.3em] text-white/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Introducing
      </motion.p>

      <motion.h1
        className="heading-xl text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white/90"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        SonicWave
        <span className="block text-accent">Pro</span>
      </motion.h1>

      <motion.p
        className="body-text mt-6 max-w-md text-center text-base sm:text-lg text-white/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Premium wireless audio, precision engineered for the purist.
      </motion.p>

      {/* Scroll prompt */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-body">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-white/30"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
