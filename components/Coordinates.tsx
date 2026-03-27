"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"

const LINKS = [
  { label: "EMAIL", value: "naveen@vortexfilms.in", href: "mailto:naveen@vortexfilms.in", action: "COPY" },
  { label: "LINKEDIN", value: "/in/naveenkumar", href: "https://linkedin.com/in/madvortex", action: "OPEN" },
  { label: "TWITTER", value: "@madvortex", href: "https://x.com/madvortex", action: "OPEN" },
  { label: "INSTAGRAM", value: "@madvortex", href: "https://instagram.com/madvortex", action: "OPEN" },
  { label: "GITHUB", value: "@madvortex", href: "https://github.com/madvortex", action: "OPEN" },
] as const

export function Coordinates() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("naveen@vortexfilms.in")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <section id="coordinates" className="py-20 px-6 sm:px-12">
      <div className="max-w-[700px] mx-auto">
        {/* Section header */}
        <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
          SECTION_04 // COORDINATES
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[0.05em] mb-8">
            INITIATE CONTACT
          </h2>

          <div className="h-px bg-[#333] mb-8" />

          {/* Contact links */}
          <div className="space-y-4">
            {LINKS.map((link) => (
              <div
                key={link.label}
                className="flex items-center justify-between font-mono text-sm"
              >
                <span className="text-muted-foreground min-w-[100px]">
                  {link.label}
                </span>
                <span className="text-foreground mx-4">
                  &rarr; {link.value}
                </span>
                {link.action === "COPY" ? (
                  <button
                    onClick={handleCopy}
                    className="text-lime hover:bg-lime hover:text-[#0A0A0A] px-3 py-1 border border-lime/30 text-[10px] tracking-wider transition-colors"
                    data-cursor="COPY"
                  >
                    {copied ? "COPIED \u2713" : "COPY"}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime hover:bg-lime hover:text-[#0A0A0A] px-3 py-1 border border-lime/30 text-[10px] tracking-wider transition-colors"
                    data-cursor="OPEN"
                  >
                    OPEN
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="h-px bg-[#333] my-8" />

          {/* Location */}
          <div className="font-mono text-xs space-y-2 text-muted-foreground">
            <p>CURRENT BASE: HSR LAYOUT, BANGALORE, IN</p>
            <p className="flicker">
              COORDINATES: 12.9121&deg; N, 77.6446&deg; E
            </p>
          </div>

          <div className="h-px bg-[#333] my-8" />

          {/* Mission statement */}
          <div className="space-y-2">
            <p className="font-mono text-xs text-muted-foreground">
              VORTEX FILMS &mdash; EST. 2022
            </p>
            <p className="text-sm italic text-muted-foreground">
              &ldquo;We don&apos;t make content. We engineer perception. Every frame is a
              system. Every project is a prototype for what comes next.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
