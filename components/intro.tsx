"use client"

import { motion } from "framer-motion"

export function Intro() {
  return (
    <section className="py-36 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left -- intro copy */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-foreground"
            >
              Naveen Kumar is a visual engineer based in Bangalore who builds
              cinematic systems for brands that refuse to look like everyone else.
            </motion.p>

            <div className="w-12 h-px bg-border my-10" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                I started Vortex from a bedroom with a cracked copy of After Effects and an
                obsession with making things move. Today I build visual systems for brands
                that refuse to look like everyone else.
              </p>
              <p>
                VFX, CGI, 3D, AI -- whatever the tool, the goal is always the same: make it
                impossible to scroll past. I care about craft, speed, and the kind of
                attention to detail that clients notice but can't always name.
              </p>
            </motion.div>
          </div>

          {/* Right -- abstract visual placeholder */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full aspect-square bg-secondary rounded border border-border relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border border-primary/20 rounded rotate-45" />
                <div className="absolute w-16 h-16 border border-primary/10 rounded rotate-12" />
              </div>
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%)",
                  backgroundSize: "4px 4px",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
