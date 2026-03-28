"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface Project {
  id: string
  slug: string
  client: string
  title: string
  category: string
  role: string
  year: string
}

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
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
        className="block rounded bg-surface overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Case file header */}
        <div className="border-b border-border p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-lime">
              PROJECT_ID: {project.id}
            </span>
            <span className="font-mono text-[10px] text-dim">
              CLASSIFICATION: {project.category}
            </span>
          </div>
        </div>

        {/* Thumbnail placeholder */}
        <div className="relative aspect-video overflow-hidden">
          <div className="grid-texture h-full w-full" />
          
          {/* Hover border accent */}
          <div className="absolute bottom-0 left-0 h-full w-[3px] bg-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Horizontal divider */}
        <div className="border-t border-border" />

        {/* Content */}
        <div className="p-4">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-foreground">
            CLIENT: {project.client}
          </p>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-wide text-muted">
            ROLE: {project.role}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-dim">STATUS:</span>
              <span className="font-mono text-[10px] text-lime">DECLASSIFIED</span>
              <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
            </div>
            <span className="font-mono text-[10px] text-lime transition-opacity group-hover:opacity-80">
              VIEW CASE FILE →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
