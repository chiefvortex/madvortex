"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-36 md:py-40 border-t border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Accent line element */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase font-medium">
                Contact
              </span>
            </div>
            
            <h2 
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 text-balance"
              style={{ letterSpacing: "-0.03em" }}
            >
              Let&apos;s Build Something
            </h2>
            <p 
              className="text-lg text-muted-foreground mb-12 text-pretty"
              style={{ lineHeight: 1.7 }}
            >
              We take on a limited number of new projects each quarter. If your
              brand needs visual engineering, let&apos;s talk.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="mailto:naveen@vortexfilms.in"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background will-change-transform"
              aria-label="Send email to Vortex"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://linkedin.com/company/vortex"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-[rgba(255,255,255,0.06)] text-foreground px-8 py-4 text-sm tracking-wide uppercase transition-all duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background will-change-transform"
              aria-label="View Vortex on LinkedIn (opens in new tab)"
            >
              View on LinkedIn
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm tracking-wide">Bangalore, India</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
