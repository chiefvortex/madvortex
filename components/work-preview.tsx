"use client"

import Link from "next/link"
import { ProjectCard } from "./project-card"
import { SectionHeading } from "./section-heading"
import projects from "@/content/projects.json"

export function WorkPreview() {
  const featured = projects.slice(0, 3)

  return (
    <section className="py-36 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="Recent Work" title="Selected Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              client={project.client}
              title={project.title}
              category={project.category}
              index={i}
            />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            View all work
            <span className="text-primary">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
