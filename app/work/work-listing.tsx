"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import projects from "@/content/projects.json"

const categories = ["All", "VFX", "CGI", "3D", "AI Video", "Direction"]

export function WorkListing() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === active.toLowerCase()
        )

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
          OUTPUT_LOGS // FULL ARCHIVE
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.05em] mb-8">
          CASE FILES
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 font-mono text-[10px] tracking-wider border transition-all duration-200 ${
                active === cat
                  ? "border-lime bg-lime text-[#0A0A0A]"
                  : "border-[#333] text-muted-foreground hover:text-lime hover:border-lime/40"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                client={project.client}
                title={project.title}
                category={project.category}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center font-mono text-xs text-muted-foreground mt-20">
            NO FILES IN THIS CLASSIFICATION.
          </p>
        )}
      </div>
    </main>
  )
}
