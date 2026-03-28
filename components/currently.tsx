"use client"

import { motion } from "framer-motion"
import currentlyData from "@/content/currently.json"

const items = [
  { label: "READING", value: currentlyData.reading },
  { label: "BUILDING", value: currentlyData.building },
  { label: "OBSESSING OVER", value: currentlyData.obsessing },
  { label: "LISTENING", value: currentlyData.listening },
]

export function Currently() {
  return (
    <section className="px-6 py-24 md:py-32" aria-labelledby="currently-heading">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          id="currently-heading"
          className="sr-only"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Currently
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              className="rounded bg-surface p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-lime">
                {item.label}
              </p>
              <p className="font-sans text-lg font-bold text-foreground">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
