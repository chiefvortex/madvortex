"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

type Project = {
  id: string
  client: string
  title: string
  classification: string
  role: string
  year: number
  status: string
}

const PROJECTS: readonly Project[] = [
  { id: "VX-001", client: "ONE8 \u00D7 VIRAT KOHLI", title: "Directorial Debut", classification: "COMMERCIAL", role: "DIRECTOR / VFX LEAD", year: 2024, status: "DECLASSIFIED" },
  { id: "VX-002", client: "NIKE", title: "Campaign", classification: "COMMERCIAL", role: "VFX LEAD", year: 2024, status: "DECLASSIFIED" },
  { id: "VX-003", client: "AMD", title: "Visual Identity", classification: "COMMERCIAL", role: "CREATIVE DIRECTOR", year: 2023, status: "DECLASSIFIED" },
  { id: "VX-004", client: "SPOTIFY", title: "Visual Campaign", classification: "COMMERCIAL", role: "VFX LEAD", year: 2023, status: "DECLASSIFIED" },
  { id: "VX-005", client: "IKEA", title: "Product Visuals", classification: "COMMERCIAL", role: "3D LEAD", year: 2023, status: "DECLASSIFIED" },
  { id: "VX-006", client: "QATAR AIRWAYS / QDF", title: "Premium Brand Motion", classification: "COMMERCIAL", role: "DIRECTOR", year: 2024, status: "DECLASSIFIED" },
  { id: "VX-007", client: "SPACE", title: "Web3 Visual System", classification: "WEB3", role: "CREATIVE DIRECTOR", year: 2024, status: "DECLASSIFIED" },
  { id: "VX-008", client: "THE BLACKOUT", title: "Short Film", classification: "SHORTFILM", role: "DIRECTOR / VFX", year: 2022, status: "DECLASSIFIED" },
  { id: "VX-009", client: "OKU", title: "Brand Identity", classification: "WEB3", role: "CREATIVE DIRECTOR", year: 2023, status: "DECLASSIFIED" },
  { id: "VX-010", client: "BURST", title: "Visual System", classification: "WEB3", role: "VFX LEAD", year: 2023, status: "DECLASSIFIED" },
] as const

export function OutputLogs() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll > 0) {
        setScrollProgress(el.scrollLeft / maxScroll)
      }
    }

    el.addEventListener("scroll", handleScroll, { passive: true })
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="output-logs" className="py-20 relative">
      {/* Section header */}
      <div className="px-6 sm:px-12 mb-8">
        <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
          SECTION_02 // OUTPUT_LOGS
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-[0.05em]">
          CASE FILES
        </h2>
        <p className="font-mono text-xs text-muted-foreground mt-2">
          {PROJECTS.length} PROJECTS DECLASSIFIED &mdash; SCROLL HORIZONTALLY
        </p>
      </div>

      {/* Horizontal scroll carousel */}
      <div
        ref={scrollRef}
        className="horizontal-scroll flex gap-6 px-6 sm:px-12 pb-4"
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            className="snap-card w-[85vw] sm:w-[60vw] lg:w-[40vw] flex-shrink-0 border border-[#333] bg-[#0D0D0D] p-6 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            {/* Project ID + classification */}
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-xs text-lime tracking-wider">
                PROJECT_ID: {project.id}
              </p>
              <span className="font-mono text-[10px] text-muted-foreground border border-[#333] px-2 py-0.5">
                {project.classification}
              </span>
            </div>

            <div className="h-px bg-[#333] mb-6" />

            {/* Thumbnail placeholder */}
            {/* TODO: Replace with actual project thumbnails */}
            <div className="aspect-video bg-[#1A1A1A] mb-6 relative overflow-hidden img-classified">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xs text-[#333] tracking-wider">
                  [ THUMBNAIL ]
                </span>
              </div>
            </div>

            <div className="h-px bg-[#333] mb-4" />

            {/* Project details */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">CLIENT:</span>
                <span className="text-foreground">{project.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ROLE:</span>
                <span className="text-foreground">{project.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">YEAR:</span>
                <span className="text-foreground">{project.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">STATUS:</span>
                <span className="text-foreground">
                  {project.status}{" "}
                  <span className="inline-block w-2 h-2 rounded-full bg-lime ml-1" />
                </span>
              </div>
            </div>

            {/* View link */}
            <div className="mt-6 pt-4 border-t border-[#333]">
              <button
                className="lime-underline font-mono text-xs text-lime tracking-wider"
                data-cursor="VIEW"
              >
                VIEW CASE FILE &rarr;
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="px-6 sm:px-12 mt-6">
        <div className="h-[2px] bg-[#333] relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-lime"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
