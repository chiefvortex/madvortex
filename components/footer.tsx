"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Instagram, Github } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "https://x.com/madvortex_", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://linkedin.com/in/madvortex", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/madvortex.cc", label: "Instagram" },
  { icon: Github, href: "https://github.com/naveenkumar2627", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="border-t border-lime px-6 py-8" aria-label="Footer">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Copyright */}
        <p className="font-mono text-[11px] text-dim">© 2026 madvortex</p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim transition-colors hover:text-lime"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  )
}
