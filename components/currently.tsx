"use client"

import { motion } from "framer-motion"
import currentlyData from "@/content/currently.json"

const items = [
  { label: "Reading", value: currentlyData.reading },
  { label: "Building", value: currentlyData.building },
  { label: "Obsessing Over", value: currentlyData.obsessing },
  { label: "Listening", value: currentlyData.listening },
]

export function Currently() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground mb-8">
            Currently
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5">
            {items.map((item) => (
              <div key={item.label} className="flex items-baseline gap-6">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground min-w-[120px] shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
