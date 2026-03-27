import type { Metadata } from "next"
import Link from "next/link"

import { PlatformIcon } from "@/components/platform-icon"
import { Reveal } from "@/components/reveal"
import { links } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Links",
  description: "Find Naveen Kumar across social platforms, video channels, and email.",
}

export default function LinksPage() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-[560px]">
        <div className="text-center">
          <p className="kicker text-lime">DIRECT ACCESS</p>
          <h1 className="page-title mt-5">FIND ME</h1>
        </div>

        <div className="mt-10 space-y-4">
          {links.map((link, index) => {
            const isMail = link.icon === "mail"

            return (
              <Reveal delay={index * 0.05} key={link.platform}>
                <Link
                  className="group block"
                  href={link.url}
                  rel={isMail ? undefined : "noreferrer"}
                  target={isMail ? undefined : "_blank"}
                >
                  <article className="panel flex items-center gap-4 p-5 transition-colors duration-300 hover:border-lime/60">
                    <span className="flex h-11 w-11 items-center justify-center border border-white/10 text-text transition-colors duration-300 group-hover:border-lime/50 group-hover:text-lime">
                      <PlatformIcon icon={link.icon} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-lg uppercase tracking-[0.08em] text-text">{link.platform}</p>
                      <p className="mono-data truncate text-[11px] text-dim">{link.handle}</p>
                    </div>
                    <p className="mono-data text-[11px] text-lime">OPEN</p>
                  </article>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
