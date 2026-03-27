"use client"

import Link from "next/link"
import { motion } from "framer-motion"

type ProjectCardProps = {
  slug: string
  client: string
  title: string
  category: string
  index?: number
}

export function ProjectCard({ slug, client, title, category, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${slug}`} className="group block" data-cursor="VIEW">
        <div className="relative aspect-video bg-[#1A1A1A] overflow-hidden border border-[#333] group-hover:border-lime/40 transition-all duration-300 group-hover:-translate-y-1">
          {/* Placeholder with grid texture */}
          {/* TODO: Replace with actual project thumbnail */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <p className="text-lg font-semibold text-foreground tracking-tight">{client}</p>
              <p className="text-sm text-muted-foreground mt-1">{title}</p>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground/70 border border-[#333] px-2 py-0.5">
              {category.toUpperCase()}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
