"use client"

import { motion } from "framer-motion"

export function Dossier() {
  return (
    <section id="dossier" className="py-20 px-6 sm:px-12">
      <div className="max-w-[700px] mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
          SECTION_05 // DOSSIER
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[0.05em] mb-8">
            DOSSIER
          </h2>

          <div className="h-px bg-[#333] mb-8" />

          {/* Credentials */}
          <div className="space-y-6 font-mono text-sm">
            <div>
              <p className="text-lime text-[10px] tracking-[0.2em] mb-2">EDUCATION</p>
              <p className="text-foreground">B.Tech &mdash; NIT Jalandhar</p>
            </div>

            <div>
              <p className="text-lime text-[10px] tracking-[0.2em] mb-2">CURRENT ROLES</p>
              <p className="text-foreground">Founder &amp; Creative Director, Vortex Films</p>
              <p className="text-foreground">Founder, Vortex Labs</p>
            </div>

            <div>
              <p className="text-lime text-[10px] tracking-[0.2em] mb-2">SPECIALIZATIONS</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  "VFX & Compositing",
                  "CGI Production",
                  "3D Visualization",
                  "AI-Assisted Video",
                  "Creative Direction",
                  "Motion Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] border border-[#333] px-2 py-1 text-muted-foreground"
                  >
                    {skill.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lime text-[10px] tracking-[0.2em] mb-2">NOTABLE CLIENTS</p>
              <p className="text-muted-foreground text-xs">
                Nike &bull; AMD &bull; Spotify &bull; IKEA &bull; Qatar Airways &bull; One8 &bull; Space &bull; OKU &bull; Burst
              </p>
            </div>

            <div>
              <p className="text-lime text-[10px] tracking-[0.2em] mb-2">EXPERIENCE</p>
              <p className="text-foreground">11+ years in visual production</p>
              <p className="text-foreground">200+ projects delivered</p>
            </div>
          </div>

          <div className="h-px bg-[#333] my-8" />

          {/* Download link placeholder */}
          <button
            className="font-mono text-xs text-lime tracking-wider lime-underline"
            data-cursor="VIEW"
          >
            DOWNLOAD FULL DOSSIER [PDF] &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  )
}
