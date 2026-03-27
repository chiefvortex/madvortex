"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { TypewriterText } from "./typewriter-text"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const nameLetters = "I MAKE THINGS MOVE.".split("")

  return (
    <section className="relative overflow-hidden">
      {/* Gaussian glow orbs */}
      <div className="hero-orb absolute right-[-12%] top-24 h-[28rem] w-[28rem] animate-drift opacity-80 md:h-[36rem] md:w-[36rem]" />
      <div
        className="absolute left-[-8%] bottom-20 h-[20rem] w-[20rem] rounded-full animate-drift pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,0,0,0.06), transparent 60%)",
          filter: "blur(60px)",
          animationDelay: "-8s",
        }}
      />

      {/* Dither texture accents */}
      <div className="absolute top-0 left-0 w-48 h-48 dither-dots pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-32 dither-lime pointer-events-none opacity-50" />

      <div className="site-shell relative flex min-h-screen items-end pb-20 pt-32 md:pb-24 md:pt-40">
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: [0, 1, 0.94, 1] }
          }
          className="max-w-6xl"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="kicker">NK &mdash; 25 / BANGALORE</p>

          {/* Staggered letter animation with blur-in + glitch hover */}
          <h1 className="hero-title mt-6 max-w-5xl">
            {shouldReduceMotion
              ? "I MAKE THINGS MOVE."
              : nameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block glitch-hover"
                    initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.03 * i,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
          </h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg md:text-[18px]"
            style={{ color: "var(--muted-color)" }}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Visual engineer. Founder of Vortex. Based in Bangalore.
          </motion.p>

          <motion.div
            className="mt-10 border-l pl-4"
            style={{ borderColor: "var(--lime-color)" }}
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <TypewriterText
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-lime md:text-[12px]"
              text="> 11 YEARS. 200+ PROJECTS. NIKE. AMD. SPOTIFY. IKEA. QATAR AIRWAYS. ONE8."
            />
          </motion.div>
        </motion.div>

        {/* Scroll indicator with pulse */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.35, 1, 0.35], y: [0, 8, 0] }
          }
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
          transition={{
            duration: 2.6,
            ease: "easeOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <Link
            aria-label="Scroll to selected work"
            className="flex flex-col items-center gap-3"
            href="#selected-work"
          >
            <span className="h-12 w-px" style={{ background: "rgba(191,255,0,0.6)" }} />
            <ChevronDown className="h-4 w-4" style={{ color: "var(--lime-color)" }} strokeWidth={1.6} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
