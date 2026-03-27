"use client"

import { motion } from "framer-motion"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
