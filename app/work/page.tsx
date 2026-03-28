"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import projects from "@/content/projects.json"

const categories = ["ALL", "COMMERCIAL", "WEB3", "SHORT FILM"] as const

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL")

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <section className="px-6 py-12" aria-labelledby="work-heading">
          <div className="mx-auto max-w-7xl">
            {/* Section heading */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1
                id="work-heading"
                className="mb-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl"
              >
                OUTPUT_LOGS
              </h1>
              <p className="font-mono text-xs text-muted">
                CLASSIFIED PROJECT ARCHIVE
              </p>
            </motion.div>

            {/* Filter tabs */}
            <motion.div
              className="mb-12 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              role="tablist"
              aria-label="Filter projects by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative font-mono text-[11px] uppercase tracking-wide transition-colors ${
                    activeFilter === category
                      ? "text-lime"
                      : "text-dim hover:text-foreground"
                  }`}
                  role="tab"
                  aria-selected={activeFilter === category}
                  aria-controls="projects-grid"
                >
                  {category}
                  {activeFilter === category && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-px w-full bg-lime"
                      layoutId="filter-underline"
                      transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Projects grid */}
            <div
              id="projects-grid"
              className="grid gap-6 md:grid-cols-2"
              role="tabpanel"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <motion.p
                className="py-12 text-center font-mono text-sm text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No projects found in this category.
              </motion.p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
