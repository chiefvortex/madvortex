"use client"

import { useState } from "react"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { projects } from "@/lib/utils"

import { ProjectCard } from "./project-card"

const filters = ["ALL", "VFX", "CGI", "3D", "AI VIDEO", "DIRECTION"] as const

type Filter = (typeof filters)[number]

export function WorkArchive() {
  const shouldReduceMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL")

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <div className="page-shell">
      <div className="max-w-3xl">
        <p className="kicker text-lime">ARCHIVE // ACTIVE</p>
        <h1 className="page-title mt-5">OUTPUT_LOGS</h1>
        <p className="mt-5 max-w-2xl">
          Case files from brand films, motion systems, CGI experiments, and narrative work built
          across commercial and independent timelines.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            className={`mono-data border px-4 py-3 text-[11px] tracking-[0.24em] transition-colors duration-300 ${
              activeFilter === filter
                ? "border-lime bg-lime text-background"
                : "border-white/10 text-dim hover:border-lime/50 hover:text-text"
            }`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 grid gap-6 lg:grid-cols-2"
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          key={activeFilter}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              key={project.slug}
              transition={{ duration: 0.45, ease: "easeOut", delay: shouldReduceMotion ? 0 : index * 0.05 }}
            >
              <ProjectCard mode="archive" project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
