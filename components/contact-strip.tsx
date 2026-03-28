"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

export function ContactStrip() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText("naveen@vortexfilms.in")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      className="border-t border-border px-6 py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <motion.h2
          id="contact-heading"
          className="mb-8 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          SAY HELLO.
          <br />
          <span className="text-muted">OR DON&apos;T.</span>
        </motion.h2>

        {/* Email with copy button */}
        <motion.div
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="mailto:naveen@vortexfilms.in"
            className="font-mono text-lg text-lime transition-opacity hover:opacity-80 md:text-xl"
          >
            naveen@vortexfilms.in
          </a>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-dim transition-colors hover:text-foreground"
            aria-label={copied ? "Copied" : "Copy email to clipboard"}
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-lime" />
                <span className="text-lime">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                COPY
              </>
            )}
          </button>
        </motion.div>

        {/* Location */}
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-sans text-sm font-bold uppercase tracking-wide text-muted">
            BANGALORE, INDIA
          </p>
          <p className="animate-flicker font-mono text-[10px] text-dim">
            12.9121° N, 77.6446° E
          </p>
        </motion.div>
      </div>
    </section>
  )
}
