import type { Metadata } from "next"
import Link from "next/link"

import { Reveal } from "@/components/reveal"
import { tools } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Labs",
  description: "Side quests, experiments, and tool prototypes under active development.",
}

export default function LabsPage() {
  return (
    <div className="page-shell">
      <div className="max-w-3xl">
        <p className="kicker text-lime">EXPERIMENTAL BRANCH</p>
        <h1 className="page-title mt-5">SIDE_QUESTS</h1>
        <p className="mt-5 max-w-2xl">
          Small tools and production experiments I&apos;m building to make creative work faster,
          sharper, and more repeatable.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <Reveal className="h-full" delay={index * 0.06} key={tool.slug}>
            <Link className="group block h-full opacity-60 transition-opacity duration-300 hover:opacity-100" href={`/labs/${tool.slug}`}>
              <article className="panel flex h-full flex-col gap-6 p-6 transition-colors duration-300 hover:border-lime/50">
                <div className="flex items-center justify-between gap-4">
                  <p className="mono-data text-[11px] text-lime">STATUS: {tool.status}</p>
                  <p className="mono-data text-[11px] text-dim">{tool.releaseWindow}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold uppercase tracking-[0.08em] text-text">
                    {tool.name}
                  </h2>
                  <p className="mt-4">{tool.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {tool.builtWith.map((item) => (
                    <span
                      className="mono-data border border-white/10 px-3 py-2 text-[11px] text-dim"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>

      <p className="mono-data mt-8 text-[11px] tracking-[0.24em] text-dim">
        More experiments brewing. Check back.
      </p>
    </div>
  )
}
