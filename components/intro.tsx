"use client"

import { motion, useReducedMotion } from "framer-motion"

import { Reveal } from "./reveal"

export function Intro() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
        <Reveal className="space-y-6">
          <p className="kicker text-lime">FIELD NOTES</p>
          <p className="max-w-3xl text-lg text-text md:text-[19px]">
            Naveen Kumar is a filmmaker and visual engineer with 11+ years in production. As
            founder of Vortex Films and Vortex Labs, he builds at the intersection of cinematic
            craft and emerging technology, from global brands to the decentralized web.
          </p>
          <p className="max-w-3xl text-lg text-text md:text-[19px]">
            I don&apos;t think of projects as deliverables. I think of them as systems, visual
            architectures with logic, rhythm, and intent. Every frame is engineered.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel relative min-h-[420px] overflow-hidden p-6 md:p-8">
            <div className="grid-texture absolute inset-0 opacity-25" />
            <div className="absolute left-6 top-6 mono-data text-[11px] text-dim">
              DOSSIER_OBJECT // BANGALORE_NODE
            </div>
            <div className="absolute right-6 top-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red animate-flicker" />
              <span className="mono-data text-[11px] text-dim">LIVE FEED</span>
            </div>
            <div className="absolute bottom-6 left-6 mono-data text-[11px] text-lime">
              12.9121° N / 77.6446° E
            </div>
            <div className="absolute inset-8 border border-white/10" />
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: [0, 90, 180] }}
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 border border-lime/40"
              transition={{ duration: 18, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: [180, 90, 0] }}
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 border border-white/12"
              transition={{ duration: 14, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border border-red/30 bg-[radial-gradient(circle,rgba(191,255,0,0.18),transparent_65%)]" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
