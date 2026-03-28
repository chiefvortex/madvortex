"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "./typewriter-text"

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
      aria-label="Hero section"
    >
      {/* Background radial gradient orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl text-center">
        {/* Eyebrow */}
        <motion.p
          className="mb-6 font-mono text-[10px] uppercase tracking-wide text-dim"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          NK — 25 / BANGALORE
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="mb-6 font-sans text-display font-bold uppercase leading-none text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          I MAKE THINGS MOVE.
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="mb-10 text-lg text-muted md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Visual engineer. Founder of Vortex. Based in Bangalore.
        </motion.p>

        {/* Typewriter credentials */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypewriterText
            text="> 11 YEARS. 200+ PROJECTS. NIKE. AMD. SPOTIFY. IKEA. QATAR AIRWAYS. ONE8."
            className="font-mono text-xs text-lime md:text-sm"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="h-10 w-px bg-dim animate-pulse-gentle" />
        <svg
          className="h-3 w-3 text-dim animate-pulse-gentle"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
