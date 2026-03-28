"use client"

import { motion } from "framer-motion"
import {
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Youtube,
  Globe,
  Mail,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import links from "@/content/links.json"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  github: Github,
  youtube: Youtube,
  globe: Globe,
  mail: Mail,
}

export default function LinksPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <section className="px-6 py-12" aria-labelledby="links-heading">
          <div className="mx-auto max-w-xl">
            {/* Section heading */}
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1
                id="links-heading"
                className="mb-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl"
              >
                FIND ME
              </h1>
              <p className="font-mono text-xs text-muted">
                ACROSS THE INTERNET
              </p>
            </motion.div>

            {/* Links stack */}
            <div className="space-y-4">
              {links.map((link, index) => {
                const Icon = iconMap[link.icon] || Globe
                const isExternal = !link.url.startsWith("mailto:")

                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-l-4 hover:border-lime hover:pl-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  >
                    <Icon className="h-5 w-5 text-dim transition-colors group-hover:text-lime" />
                    <div className="flex-1">
                      <p className="font-sans text-sm font-bold text-foreground">
                        {link.platform}
                      </p>
                      <p className="font-mono text-[11px] text-muted">
                        {link.handle}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-dim opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
