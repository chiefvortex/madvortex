"use client"

import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import tools from "@/content/tools.json"

export default function LabsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <section className="px-6 py-12" aria-labelledby="labs-heading">
          <div className="mx-auto max-w-4xl">
            {/* Section heading */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1
                id="labs-heading"
                className="mb-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl"
              >
                SIDE_QUESTS
              </h1>
              <p className="font-mono text-xs text-muted">
                EXPERIMENTAL TOOLS & UTILITIES
              </p>
            </motion.div>

            {/* Tools grid */}
            <div className="grid gap-6">
              {tools.map((tool, index) => (
                <motion.article
                  key={tool.id}
                  className="relative rounded bg-surface p-6 opacity-60"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  {/* Coming soon badge */}
                  <div className="absolute right-4 top-4 rounded bg-background px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-dim">
                    COMING SOON
                  </div>

                  {/* Tool name */}
                  <h2 className="mb-2 font-sans text-xl font-bold text-foreground">
                    {tool.name}
                  </h2>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {tool.description}
                  </p>

                  {/* Built with tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {tool.builtWith.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-background px-2 py-1 font-mono text-[10px] text-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <p className="font-mono text-[10px] uppercase tracking-wide text-lime">
                    STATUS: {tool.status}
                  </p>
                </motion.article>
              ))}
            </div>

            {/* Bottom message */}
            <motion.p
              className="mt-12 text-center font-mono text-xs text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              More experiments brewing. Check back.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
