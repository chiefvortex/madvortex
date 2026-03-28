"use client"

import { motion } from "framer-motion"

export function Intro() {
  return (
    <section
      className="border-t border-border px-6 py-24 md:py-32"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-5 md:gap-16">
        {/* Text content - 60% */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 id="intro-heading" className="sr-only">
            About Naveen Kumar
          </h2>
          
          <p className="mb-6 text-lg leading-relaxed text-muted md:text-xl">
            <span className="text-foreground font-bold">Naveen Kumar</span> is a
            filmmaker and visual engineer with 11+ years in production. As founder
            of <span className="text-foreground">Vortex Films</span> and{" "}
            <span className="text-foreground">Vortex Labs</span>, he builds at the
            intersection of cinematic craft and emerging technology — from global
            brands to the decentralized web.
          </p>

          <p className="text-lg leading-relaxed text-muted md:text-xl">
            I don&apos;t think of projects as deliverables. I think of them as
            systems — visual architectures with logic, rhythm, and intent. Every
            frame is engineered.
          </p>
        </motion.div>

        {/* Geometric element - 40% */}
        <motion.div
          className="relative flex items-center justify-center md:col-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          aria-hidden="true"
        >
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded border border-border" />
            
            {/* Inner square */}
            <div className="absolute inset-8 rounded border border-dim" />
            
            {/* Cross lines */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border" />
            
            {/* Lime accent dot */}
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime" />
            
            {/* Corner brackets */}
            <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-lime" />
            <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-lime" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-lime" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-lime" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
