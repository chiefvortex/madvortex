"use client"

import { motion } from "framer-motion"
import {
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Youtube,
  Palette,
  Mail,
  ArrowUpRight,
} from "lucide-react"
import linksData from "@/content/links.json"

const iconMap: Record<string, React.ElementType> = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  github: Github,
  youtube: Youtube,
  palette: Palette,
  mail: Mail,
}

export function LinksPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[560px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
            COORDINATES // EXTERNAL
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.05em]">
            FIND ME HERE
          </h1>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            (OR DON&apos;T. I&apos;M NOT YOUR DAD.)
          </p>
        </motion.div>

        <div className="space-y-3">
          {linksData.map((link, i) => {
            const Icon = iconMap[link.icon] ?? Mail
            const isExternal = !link.url.startsWith("mailto:")

            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-4 border border-[#333] bg-[#0D0D0D] hover:border-lime/40 transition-all duration-200 group"
                data-cursor="OPEN"
              >
                <div className="flex items-center gap-4">
                  <Icon size={18} className="text-muted-foreground group-hover:text-lime transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{link.platform}</p>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-wider">{link.handle}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-lime transition-colors"
                />
              </motion.a>
            )
          })}
        </div>
      </div>
    </main>
  )
}
