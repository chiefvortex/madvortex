"use client"

import { motion } from "framer-motion"

type Transmission = {
  date: string
  location: string
  type: string
  content: string
  author: string
}

const TRANSMISSIONS: readonly Transmission[] = [
  {
    date: "2026.03.28 \u2014 14:32 UTC+5:30",
    location: "BANGALORE, IN",
    type: "FIELD_NOTE",
    content:
      "Currently at Network School. Building the visual infrastructure for the network state ecosystem. The gap between Web3 vision and Web3 presentation is a canyon. We're the bridge.",
    author: "NK",
  },
  {
    date: "2026.03.15 \u2014 09:17 UTC+5:30",
    location: "HSR LAYOUT, BANGALORE",
    type: "PROJECT_UPDATE",
    content:
      "Wrapped the Qatar Airways project. 47 shots, zero compromises. The brief said 'premium.' We delivered 'unforgettable.' Entire pipeline was AI-assisted this time \u2014 40% faster than last year's process.",
    author: "NK",
  },
  {
    date: "2026.02.28 \u2014 22:45 UTC+5:30",
    location: "BANGALORE, IN",
    type: "SIGNAL",
    content:
      "Every VFX studio that doesn't integrate AI into their pipeline within 18 months will cease to exist as a competitive entity. This isn't pessimism. It's physics. The tools changed. The taste didn't.",
    author: "NK",
  },
  {
    date: "2026.01.10 \u2014 03:12 UTC+5:30",
    location: "BANGALORE, IN",
    type: "REFLECTION",
    content:
      "Started Vortex from a bedroom with a cracked copy of After Effects and an obsession with making things move. Four years later, we're engineering perception for brands that refuse to look like everyone else. The journey from pirated software to production pipelines is a story nobody tells, but everyone lives.",
    author: "NK",
  },
] as const

function getTypeBadgeColor(type: string): string {
  switch (type) {
    case "FIELD_NOTE":
      return "text-lime border-lime/30"
    case "PROJECT_UPDATE":
      return "text-foreground border-[#333]"
    case "SIGNAL":
      return "text-red border-red/30"
    case "REFLECTION":
      return "text-muted-foreground border-[#333]"
    default:
      return "text-muted-foreground border-[#333]"
  }
}

export function Transmissions() {
  return (
    <section id="transmissions" className="py-20 px-6 sm:px-12">
      <div className="max-w-[800px] mx-auto">
        {/* Section header */}
        <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
          SECTION_03 // TRANSMISSIONS
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-[0.05em] mb-2">
          TRANSMISSIONS
        </h2>
        <p className="font-mono text-xs text-muted-foreground mb-12">
          UNENCRYPTED FEED
        </p>

        {/* Entries */}
        <div className="space-y-0">
          {TRANSMISSIONS.map((entry, i) => (
            <motion.div
              key={i}
              className="border-t border-[#333] py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-[10px] text-lime tracking-wider">
                  [{entry.date}]
                </span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                  LOCATION: {entry.location}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-wider border px-2 py-0.5 ${getTypeBadgeColor(entry.type)}`}
                >
                  {entry.type}
                </span>
              </div>

              {/* Content */}
              <div className="font-mono text-sm leading-relaxed text-foreground/90 pl-0 sm:pl-4">
                {entry.content.split(". ").map((sentence, j) => (
                  <span key={j}>
                    {j > 0 && ". "}
                    {sentence}
                  </span>
                ))}
              </div>

              {/* Author */}
              <p className="font-mono text-xs text-muted-foreground mt-4">
                &mdash; {entry.author}
              </p>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-[#333]" />
        </div>
      </div>
    </section>
  )
}
