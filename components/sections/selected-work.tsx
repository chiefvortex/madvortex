"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = ["All", "VFX", "CGI", "3D", "AI Video"] as const
type Category = (typeof categories)[number]

const projects = [
  {
    id: 1,
    title: "CGI Brand Film",
    client: "AMD",
    category: "CGI" as Category,
    color: "#0d0d14",
  },
  {
    id: 2,
    title: "Motion-led Campaign Visuals",
    client: "Nike",
    category: "VFX" as Category,
    color: "#0d0d14",
  },
  {
    id: 3,
    title: "3D Product Storytelling",
    client: "Spotify",
    category: "3D" as Category,
    color: "#0d0d14",
  },
  {
    id: 4,
    title: "Retail Visual Systems",
    client: "IKEA",
    category: "CGI" as Category,
    color: "#0d0d14",
  },
  {
    id: 5,
    title: "Premium Brand Motion",
    client: "Qatar Airways",
    category: "AI Video" as Category,
    color: "#0d0d14",
  },
  {
    id: 6,
    title: "Brand Visual Direction",
    client: "One8",
    category: "VFX" as Category,
    color: "#0d0d14",
  },
]

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<Category>("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="work" className="py-36 md:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 
            className="font-heading text-3xl md:text-4xl font-bold text-foreground"
            style={{ letterSpacing: "-0.02em" }}
          >
            Selected Work
          </h2>
        </motion.div>

        {/* Filter controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              role="tab"
              aria-selected={activeFilter === category}
              aria-controls="projects-grid"
              className={cn(
                "px-5 py-2.5 text-sm tracking-wide uppercase transition-all duration-300",
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-[rgba(255,255,255,0.08)] text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div
          id="projects-grid"
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative will-change-transform"
            >
              <a
                href="#"
                className="block relative aspect-video overflow-hidden border border-[rgba(255,255,255,0.06)] transition-all duration-500 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`View ${project.title} project for ${project.client}`}
              >
                {/* Placeholder image with grid lines and diagonal scan lines */}
                <div
                  className="absolute inset-0 transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-1"
                  style={{
                    backgroundColor: project.color,
                  }}
                >
                  {/* Dark gradient base */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(135deg, rgba(0,51,255,0.08) 0%, transparent 50%),
                        linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.9) 100%)
                      `,
                    }}
                  />
                  
                  {/* Faint grid lines */}
                  <div 
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  
                  {/* Diagonal scan lines */}
                  <div 
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 2px,
                        rgba(255,255,255,0.1) 2px,
                        rgba(255,255,255,0.1) 4px
                      )`,
                    }}
                  />
                  
                  {/* Cinematic bars */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Project info overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <span className="text-xs tracking-[0.2em] text-primary/90 uppercase mb-2 font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-1 transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.client}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-36 md:mt-40">
        <div className="border-t border-[rgba(255,255,255,0.04)]" />
      </div>
    </section>
  )
}
