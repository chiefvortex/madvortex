"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { TypewriterText } from "./typewriter-text"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      <div className="hero-orb absolute right-[-12%] top-24 h-[28rem] w-[28rem] animate-drift opacity-80 md:h-[36rem] md:w-[36rem]" />
      <div className="site-shell relative flex min-h-screen items-end pb-20 pt-32 md:pb-24 md:pt-40">
        <motion.div
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0, 1, 0.94, 1] }}
          className="max-w-6xl"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="kicker">NK — 25 / BANGALORE</p>
          <h1 className="hero-title mt-6 max-w-5xl">I MAKE THINGS MOVE.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-[18px]">
            Visual engineer. Founder of Vortex. Based in Bangalore.
          </p>
          <div className="mt-10 border-l border-l-lime pl-4">
            <TypewriterText
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-lime md:text-[12px]"
              text="> 11 YEARS. 200+ PROJECTS. NIKE. AMD. SPOTIFY. IKEA. QATAR AIRWAYS. ONE8."
            />
          </div>
        </motion.div>

        <motion.div
          animate={shouldReduceMotion ? undefined : { opacity: [0.35, 1, 0.35], y: [0, 8, 0] }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
          transition={{ duration: 2.6, ease: "easeOut", repeat: Number.POSITIVE_INFINITY }}
        >
          <Link
            aria-label="Scroll to selected work"
            className="flex flex-col items-center gap-3"
            href="#selected-work"
          >
            <span className="h-12 w-px bg-lime/60" />
            <ChevronDown className="h-4 w-4 text-lime" strokeWidth={1.6} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
