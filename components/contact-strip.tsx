"use client"

import { motion } from "framer-motion"

export function ContactStrip() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-foreground"
        >
          Say hello. Or don&apos;t.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-muted-foreground"
        >
          naveen@vortexfilms.in
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="mailto:naveen@vortexfilms.in"
            className="inline-flex items-center px-6 py-3 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 rounded"
          >
            Say Hello
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Bangalore, India
        </motion.p>
      </div>
    </section>
  )
}
