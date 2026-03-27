"use client"

import { Linkedin, Twitter, Instagram, Github } from "lucide-react"

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/madvortex", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/madvortex", label: "X" },
  { icon: Instagram, href: "https://instagram.com/madvortex", label: "Instagram" },
  { icon: Github, href: "https://github.com/madvortex", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="border-t border-primary/30 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          <span className="text-foreground">madvortex.co</span>
          <span className="mx-2">/</span>
          2026 Naveen Kumar
        </div>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
