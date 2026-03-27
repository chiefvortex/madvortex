"use client"

import { motion } from "framer-motion"

const brands = [
  "NIKE",
  "AMD",
  "SPOTIFY",
  "IKEA",
  "QATAR AIRWAYS",
  "ONE8",
  "OKU",
  "BURST",
]

export function TrustedBy() {
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-16 md:py-24 border-t border-[rgba(255,255,255,0.06)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-xl font-semibold tracking-tight text-foreground"
        >
          Trusted By
        </motion.h2>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex"
        >
          <div className="flex animate-marquee">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex items-center justify-center px-8 md:px-16"
              >
                <span className="text-sm md:text-base tracking-[0.3em] text-muted-foreground font-mono whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
