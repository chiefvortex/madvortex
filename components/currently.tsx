"use client"

import { motion, useReducedMotion } from "framer-motion"

import { currentStack } from "@/lib/utils"

import { SectionHeading } from "./section-heading"

export function Currently() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="section-shell">
      <SectionHeading
        description="A quick read on the inputs shaping the next wave of output."
        label="CURRENTLY"
      />

      <motion.div
        className="mt-10 grid gap-4 md:grid-cols-2"
        initial={shouldReduceMotion ? false : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        whileInView={shouldReduceMotion ? undefined : "visible"}
      >
        {currentStack.map((entry) => (
          <motion.div
            className="panel p-5"
            key={entry.label}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="mono-data text-[11px] text-lime">{entry.label}</p>
            <p className="mt-3 text-2xl uppercase tracking-[0.08em] text-text">{entry.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
