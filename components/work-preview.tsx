"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

import { getFeaturedProjects } from "@/lib/utils"

import { ProjectCard } from "./project-card"
import { SectionHeading } from "./section-heading"

const featuredProjects = getFeaturedProjects()

export function WorkPreview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="section-shell" id="selected-work">
      <SectionHeading
        description="A small slice of the output log: brand films, visual systems, and post-production built with cinematic discipline."
        label="SELECTED WORK"
      />

      <motion.div
        className="mt-10 grid gap-6 lg:grid-cols-4"
        initial={shouldReduceMotion ? false : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        whileInView={shouldReduceMotion ? undefined : "visible"}
      >
        {featuredProjects.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8">
        <Link className="mono-data text-[11px] tracking-[0.24em] text-lime" href="/work">
          <span className="text-link">VIEW ALL WORK →</span>
        </Link>
      </div>
    </section>
  )
}
