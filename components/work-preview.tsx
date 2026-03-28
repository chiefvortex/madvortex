"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import projects from "@/content/projects.json"

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

export function WorkPreview() {
  return (
    <section className="px-6 py-24 md:py-32" aria-labelledby="work-heading">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="h-8 w-[3px] bg-lime" aria-hidden="true" />
          <h2
            id="work-heading"
            className="font-sans text-sm font-bold uppercase tracking-wide text-foreground"
          >
            Selected Work
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="block rounded bg-surface transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Thumbnail placeholder */}
                <div className="relative aspect-video overflow-hidden rounded-t">
                  <div className="grid-texture h-full w-full" />
                  
                  {/* Project ID badge */}
                  <div className="absolute left-3 top-3 font-mono text-[10px] text-lime">
                    {project.id}
                  </div>

                  {/* Hover border accent */}
                  <div className="absolute bottom-0 left-0 h-full w-[3px] bg-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-dim">
                    {project.client}
                  </p>
                  <h3 className="mb-2 font-sans text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
                    {project.category}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-lime transition-opacity hover:opacity-80"
          >
            View all work
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
