"use client"

import { motion } from "framer-motion"
import { Sparkles, Box, Cpu, Film } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "VFX & Compositing",
    description:
      "Precision post-production and visual enhancement for commercials and branded films.",
  },
  {
    icon: Box,
    title: "3D & CGI Production",
    description:
      "High-end product visuals, environments, and cinematic CG sequences.",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Video",
    description:
      "Fast, modern image and motion workflows integrated into premium production pipelines.",
  },
  {
    icon: Film,
    title: "Creative Direction & Brand Films",
    description:
      "Visual systems and narrative-led content for brands that need more than templates.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What We Build
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 md:p-10 border border-[rgba(255,255,255,0.06)] bg-card transition-all duration-500 hover:border-primary"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-[rgba(255,255,255,0.06)] mb-6 transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                <service.icon
                  className="w-6 h-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {service.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[3px] border-r-[3px] border-transparent transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-primary" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[3px] border-l-[3px] border-transparent transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-primary" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
