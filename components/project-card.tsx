"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import type { Project } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
  mode?: "preview" | "archive"
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div
      className="image-panel aspect-[16/9]"
      style={{
        backgroundImage: `linear-gradient(135deg, ${project.palette.from} 0%, ${project.palette.via} 48%, ${project.palette.to} 100%)`,
      }}
    >
      <div className="grid-texture absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%)]" />
      <div className="absolute left-4 top-4 mono-data text-[10px] text-dim">{project.id}</div>
      <div className="absolute bottom-4 right-4 mono-data text-[10px] text-lime">{project.year}</div>
    </div>
  )
}

export function ProjectCard({ project, mode = "preview" }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  if (mode === "archive") {
    return (
      <Link className="group block h-full" href={`/work/${project.slug}`}>
        <motion.article
          className="panel relative h-full overflow-hidden p-5 transition-colors duration-300 hover:border-lime/60"
          transition={{ duration: 0.35, ease: "easeOut" }}
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        >
          <span className="absolute left-0 top-0 h-full w-px bg-transparent transition-colors duration-300 group-hover:bg-lime" />
          <div className="flex items-center justify-between gap-4">
            <span className="mono-data text-[11px] text-lime">PROJECT_ID: {project.id}</span>
            <span className="mono-data text-[11px] text-dim">
              CLASSIFICATION: {project.classification}
            </span>
          </div>
          <div className="case-divider my-4" />
          <ProjectImage project={project} />
          <div className="case-divider my-4" />
          <div className="space-y-2">
            <p className="text-xl font-semibold uppercase tracking-[0.08em] text-text">
              {project.client}
            </p>
            <p className="mono-data text-[11px] text-muted">ROLE: {project.role}</p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime" />
              <span className="mono-data text-[11px] text-lime">STATUS: {project.status}</span>
            </div>
          </div>
          <span className="mono-data mt-6 inline-flex items-center gap-2 text-[11px] text-text">
            <span className="text-link">
              VIEW CASE FILE
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
            </span>
          </span>
        </motion.article>
      </Link>
    )
  }

  return (
    <Link className="group block h-full" href={`/work/${project.slug}`}>
      <motion.article
        className="panel flex h-full flex-col gap-5 overflow-hidden p-5 transition-colors duration-300 hover:border-lime/60"
        transition={{ duration: 0.35, ease: "easeOut" }}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      >
        <ProjectImage project={project} />
        <div className="space-y-2">
          <p className="mono-data text-[11px] text-lime">{project.id}</p>
          <h3 className="text-2xl font-semibold uppercase tracking-[0.08em] text-text">
            {project.title}
          </h3>
          <p className="mono-data text-[11px] text-muted">
            {project.client} / {project.categories.join(" / ")}
          </p>
          <p>{project.summary}</p>
        </div>
        <span className="mono-data mt-auto inline-flex items-center gap-2 text-[11px] text-text">
          <span className="text-link">
            VIEW CASE FILE
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
          </span>
        </span>
      </motion.article>
    </Link>
  )
}
