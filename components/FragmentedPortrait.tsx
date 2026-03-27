"use client"

import { motion } from "framer-motion"

/**
 * Fragmented portrait grid — 3x4 grid of cells creating a "broken mirror" effect.
 * Uses placeholder grayscale cells for now. Replace with actual portrait image later.
 * TODO: Replace placeholder with actual portrait image, split into grid cells
 */
export function FragmentedPortrait() {
  const cells = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="grid grid-cols-3 gap-[2px] w-full max-w-[280px] aspect-[3/4]">
      {cells.map((i) => {
        const row = Math.floor(i / 3)
        const col = i % 3
        // Subtle parallax offsets for broken mirror effect
        const offsetX = (col - 1) * 3
        const offsetY = (row - 1.5) * 2

        return (
          <motion.div
            key={i}
            className="bg-[#1A1A1A] border border-[#333]/30 overflow-hidden relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ x: offsetX, y: offsetY }}
            style={{
              backgroundImage: `linear-gradient(135deg, #1A1A1A ${50 + i * 3}%, #222 100%)`,
            }}
          >
            {/* Placeholder: faint grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
