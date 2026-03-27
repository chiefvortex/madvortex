import Link from "next/link"

import { links } from "@/lib/utils"

import { PlatformIcon } from "./platform-icon"

const footerLinks = links.filter((link) =>
  ["X", "LinkedIn", "Instagram", "GitHub"].includes(link.platform),
)

export function Footer() {
  return (
    <footer className="site-shell pb-10 pt-8 md:pb-12">
      <div className="h-px w-full bg-lime/70" />
      <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
        <p className="mono-data text-dim">© 2026 madvortex</p>
        <div className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.platform}
              aria-label={link.platform}
              className="text-dim transition-colors duration-300 hover:text-lime"
              href={link.url}
              rel="noreferrer"
              target="_blank"
            >
              <PlatformIcon icon={link.icon} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
