"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const services = [
  {
    title: "VFX & Compositing",
    description: "Precision post-production for commercials and branded films.",
  },
  {
    title: "3D & CGI Production",
    description: "High-end product visuals and cinematic CG sequences.",
  },
  {
    title: "AI-Assisted Video",
    description: "Modern AI-integrated production pipelines.",
  },
  {
    title: "Creative Direction",
    description: "Visual systems and narrative-led content for brands.",
  },
]

export function ServicesBrief() {
  return (
    <section className="py-36 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="Capabilities" title="What I Build" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 border border-border rounded bg-card/50 hover:border-border/80 transition-colors"
            >
              <h3 className="text-sm font-semibold text-foreground tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
