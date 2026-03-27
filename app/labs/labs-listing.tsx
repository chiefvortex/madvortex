"use client"

import { motion } from "framer-motion"
import { Beaker } from "lucide-react"
import tools from "@/content/tools.json"

export function LabsListing() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
          VORTEX LABS // EXPERIMENTS
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.05em] mb-2">
          THE LAB
        </h1>
        <p className="font-mono text-xs text-muted-foreground mb-12">
          THINGS I BUILD WHEN NOBODY&apos;S WATCHING.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 border border-[#333] bg-[#0D0D0D] opacity-60"
            >
              <div className="flex items-start justify-between">
                <Beaker size={18} className="text-muted-foreground mt-1" />
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground border border-[#333] px-2 py-0.5">
                  {tool.status === "soon" ? "COMING SOON" : "FREE"}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground tracking-tight">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tool.builtWith.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-muted-foreground/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center font-mono text-xs text-muted-foreground"
        >
          MORE EXPERIMENTS BREWING. CHECK BACK.
        </motion.p>
      </div>
    </main>
  )
}
