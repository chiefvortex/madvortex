"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

type Project = {
  slug: string
  client: string
  title: string
  category: string
  description: string
}

type Adjacent = {
  slug: string
  client: string
  title: string
} | null

type WorkDetailProps = {
  project: Project
  prev: Adjacent
  next: Adjacent
}

export function WorkDetail({ project, prev, next }: WorkDetailProps) {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs text-lime tracking-wider hover:text-lime/70 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          BACK TO CASE FILES
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
            CASE FILE // DECLASSIFIED
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.02em] text-foreground uppercase">
            {project.client}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{project.title}</p>
          <span className="inline-block mt-2 font-mono text-[10px] tracking-wider border border-[#333] px-2 py-0.5 text-muted-foreground">
            {project.category.toUpperCase()}
          </span>
        </motion.div>

        {/* Hero image placeholder */}
        {/* TODO: Replace with actual project image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10 aspect-video bg-[#1A1A1A] border border-[#333] relative overflow-hidden img-classified"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-[#333] tracking-wider">
              [ HERO IMAGE ]
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-[680px]"
        >
          <p className="text-foreground/90 leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Gallery placeholder */}
        {/* TODO: Replace with actual project images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4"
        >
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="aspect-video bg-[#1A1A1A] border border-[#333] img-classified"
            />
          ))}
        </motion.div>

        {/* Navigation */}
        <div className="mt-20 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="p-6 border border-[#333] hover:border-lime/40 transition-colors group"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground mb-2 tracking-wider">
                <ArrowLeft size={12} />
                PREVIOUS
              </div>
              <p className="text-sm font-medium text-foreground">{prev.client}</p>
              <p className="text-xs text-muted-foreground">{prev.title}</p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="p-6 border border-[#333] hover:border-lime/40 transition-colors text-right group"
            >
              <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-muted-foreground mb-2 tracking-wider">
                NEXT
                <ArrowRight size={12} />
              </div>
              <p className="text-sm font-medium text-foreground">{next.client}</p>
              <p className="text-xs text-muted-foreground">{next.title}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  )
}
