"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/vortex",
    icon: Linkedin,
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/vortex",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/vortex",
    icon: Instagram,
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-primary py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Left side: Back to top + Copyright */}
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground tracking-wide transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Scroll back to top of page"
            >
              Back to top
            </button>
            <span className="text-muted-foreground/30">/</span>
            <p className="text-sm text-muted-foreground">
              2026 Vortex
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Visit Vortex on ${link.name} (opens in new tab)`}
              >
                <link.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
