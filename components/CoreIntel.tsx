"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TypewriterText } from "./TypewriterText"
import { FragmentedPortrait } from "./FragmentedPortrait"

const TAGLINES = [
  "FILMMAKER. FOUNDER. SYSTEMS ARCHITECT.",
  "BUILDING AT THE INTERSECTION OF CINEMA \u00D7 CODE.",
  "11+ YEARS IN VISUAL PRODUCTION. NOW ENGINEERING THE FUTURE.",
  "VORTEX FILMS \u2014 FROM PIXELS TO PERCEPTION.",
]

const STATS_LINE =
  "> 11 YEARS. 200+ PROJECTS. NIKE. AMD. SPOTIFY. IKEA. QATAR AIRWAYS. ONE8. NOTHING."

export function CoreIntel() {
  const [taglineIndex, setTaglineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nameLetters = "NAVEEN KUMAR".split("")

  return (
    <section
      id="core-intel"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 pt-24 pb-16 relative"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section label */}
        <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-8">
          SECTION_01 // CORE_INTEL
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Name + tagline (60%) */}
          <div className="lg:w-[60%]">
            {/* Massive name */}
            <h1 className="text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.9] tracking-[0.02em] mb-8">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            {/* Rotating tagline */}
            <div className="h-12 relative overflow-hidden">
              <motion.p
                key={taglineIndex}
                className="font-mono text-sm sm:text-base tracking-[0.1em] text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {TAGLINES[taglineIndex]}
              </motion.p>
            </div>
          </div>

          {/* Right - Fragmented portrait (40%) */}
          <div className="lg:w-[40%] flex items-center justify-center">
            <FragmentedPortrait />
          </div>
        </div>

        {/* Stats line - typewriter */}
        <div className="mt-16 border-t border-[#333] pt-8">
          <p className="font-mono text-xs sm:text-sm text-lime tracking-wider">
            <TypewriterText text={STATS_LINE} speed={25} />
          </p>
        </div>

        {/* Bio */}
        <motion.div
          className="mt-16 max-w-[720px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Naveen Kumar is a filmmaker and technologist with 11+ years in visual
            production. As founder of Vortex Films (est. 2022) and Vortex Labs, he
            operates at the intersection of cinematic storytelling, VFX engineering,
            and emerging technology. His client portfolio includes Nike, AMD, Spotify,
            IKEA, Qatar Airways, One8, and a growing roster of Web3/Network State
            projects. He holds a B.Tech from NIT Jalandhar and is currently building
            the visual infrastructure for the decentralized internet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
