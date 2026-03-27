"use client"

import { useState } from "react"

import { motion, useReducedMotion } from "framer-motion"

export function ContactStrip() {
  const shouldReduceMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText("naveen@vortexfilms.in")
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section className="section-shell pt-8">
      <div className="panel grid gap-8 p-6 md:grid-cols-[1.05fr_.95fr] md:p-8 lg:p-10">
        <div>
          <p className="kicker text-lime">OPEN CHANNEL</p>
          <h2 className="page-title mt-4 text-[clamp(2.4rem,7vw,5.25rem)]">SAY HELLO. OR DON&apos;T.</h2>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="mono-data text-[11px] text-dim">EMAIL</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                className="text-link text-xl uppercase tracking-[0.06em] text-text md:text-2xl"
                href="mailto:naveen@vortexfilms.in"
              >
                naveen@vortexfilms.in
              </a>
              <button
                className="mono-data border border-lime/40 px-3 py-2 text-[11px] text-lime transition-colors duration-300 hover:bg-lime hover:text-background"
                onClick={copyEmail}
                type="button"
              >
                {copied ? "COPIED ✓" : "[COPY]"}
              </button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <p className="mono-data text-[11px] text-dim">LOCATION</p>
              <p className="mt-3 text-lg uppercase tracking-[0.08em] text-text">BANGALORE, INDIA</p>
            </div>
            <div>
              <p className="mono-data text-[11px] text-dim">COORDINATES</p>
              <motion.p
                animate={shouldReduceMotion ? undefined : { opacity: [1, 0.7, 1] }}
                className="mono-data mt-3 text-[11px] tracking-[0.22em] text-lime"
                transition={{ duration: 1.6, ease: "easeOut", repeat: Number.POSITIVE_INFINITY }}
              >
                12.9121° N, 77.6446° E
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
