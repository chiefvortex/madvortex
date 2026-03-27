import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Reveal } from "@/components/reveal"
import { getAdjacentTools, getToolBySlug, tools } from "@/lib/utils"

type LabDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata({ params }: LabDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    return {}
  }

  return {
    title: tool.name,
    description: tool.description,
  }
}

export default async function LabDetailPage({ params }: LabDetailPageProps) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  const adjacentTools = getAdjacentTools(tool.slug)

  return (
    <div className="page-shell">
      <Reveal className="max-w-4xl">
        <p className="kicker text-lime">LAB NOTE // {tool.releaseWindow}</p>
        <h1 className="page-title mt-5">{tool.name}</h1>
        <p className="mt-5 max-w-2xl text-lg text-text md:text-[19px]">{tool.summary}</p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.78fr]">
        <Reveal className="space-y-5">
          {tool.details.map((paragraph) => (
            <p className="max-w-3xl text-[17px] text-muted md:text-[18px]" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel p-6">
            <p className="mono-data text-[11px] text-lime">SYSTEM STATUS</p>
            <p className="mt-4 text-2xl uppercase tracking-[0.08em] text-text">{tool.status}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tool.builtWith.map((item) => (
                <span
                  className="mono-data border border-white/10 px-3 py-2 text-[11px] text-dim"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <div className="image-panel aspect-[16/7] bg-[linear-gradient(135deg,#111111_0%,#1a2b08_42%,#364c0e_100%)]">
          <div className="grid-texture absolute inset-0 opacity-25" />
          <div className="absolute left-6 top-6 mono-data text-[11px] text-dim">INTERFACE BLUEPRINT</div>
          <div className="absolute inset-10 border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 border border-lime/40" />
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {adjacentTools.previous ? (
          <Link className="panel block p-5 transition-colors duration-300 hover:border-lime/50" href={`/labs/${adjacentTools.previous.slug}`}>
            <p className="mono-data text-[11px] text-dim">PREVIOUS TOOL</p>
            <p className="mt-3 text-2xl uppercase tracking-[0.08em] text-text">
              {adjacentTools.previous.name}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {adjacentTools.next ? (
          <Link className="panel block p-5 transition-colors duration-300 hover:border-lime/50" href={`/labs/${adjacentTools.next.slug}`}>
            <p className="mono-data text-[11px] text-dim">NEXT TOOL</p>
            <p className="mt-3 text-2xl uppercase tracking-[0.08em] text-text">
              {adjacentTools.next.name}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
