import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Reveal } from "@/components/reveal"
import { getAdjacentProjects, getProjectBySlug, projects } from "@/lib/utils"

type WorkDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.client} — ${project.title}`,
    description: project.summary,
  }
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const adjacentProjects = getAdjacentProjects(project.slug)

  return (
    <div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
        <Reveal className="space-y-6">
          <p className="kicker text-lime">CASE FILE // {project.id}</p>
          <h1 className="page-title">{project.title}</h1>
          <p className="max-w-3xl text-lg text-text md:text-[19px]">{project.summary}</p>

          <div
            className="image-panel aspect-[16/9]"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.palette.from} 0%, ${project.palette.via} 48%, ${project.palette.to} 100%)`,
            }}
          >
            <div className="grid-texture absolute inset-0 opacity-35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%)]" />
            <div className="absolute left-5 top-5 mono-data text-[11px] text-dim">{project.client}</div>
            <div className="absolute bottom-5 left-5 mono-data text-[11px] text-lime">
              {project.categories.join(" / ")}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel p-6">
            <p className="mono-data text-[11px] text-dim">PROJECT METADATA</p>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="mono-data text-[11px] text-dim">ID</dt>
                <dd className="mt-2 text-lg uppercase tracking-[0.08em] text-text">{project.id}</dd>
              </div>
              <div>
                <dt className="mono-data text-[11px] text-dim">CLIENT</dt>
                <dd className="mt-2 text-lg uppercase tracking-[0.08em] text-text">
                  {project.client}
                </dd>
              </div>
              <div>
                <dt className="mono-data text-[11px] text-dim">ROLE</dt>
                <dd className="mt-2 text-lg uppercase tracking-[0.08em] text-text">{project.role}</dd>
              </div>
              <div>
                <dt className="mono-data text-[11px] text-dim">CLASSIFICATION</dt>
                <dd className="mt-2 text-lg uppercase tracking-[0.08em] text-text">
                  {project.classification}
                </dd>
              </div>
              <div>
                <dt className="mono-data text-[11px] text-dim">YEAR</dt>
                <dd className="mt-2 text-lg uppercase tracking-[0.08em] text-text">{project.year}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.72fr]">
        <Reveal className="space-y-5">
          {project.description.map((paragraph) => (
            <p className="max-w-3xl text-[17px] text-muted md:text-[18px]" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.12}>
          <div className="panel p-6">
            <p className="mono-data text-[11px] text-lime">DELIVERABLES</p>
            <div className="mt-4 space-y-3">
              {project.deliverables.map((deliverable) => (
                <div className="border border-white/6 px-4 py-3" key={deliverable}>
                  <p className="mono-data text-[11px] text-text">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {["FRAME 01", "FRAME 02", "FRAME 03", "FRAME 04"].map((frame, index) => (
          <Reveal delay={index * 0.04} key={frame}>
            <div
              className="image-panel aspect-[4/3]"
              style={{
                backgroundImage: `linear-gradient(${135 + index * 12}deg, ${project.palette.from} 0%, ${project.palette.via} 45%, ${project.palette.to} 100%)`,
              }}
            >
              <div className="grid-texture absolute inset-0 opacity-30" />
              <div className="absolute left-4 top-4 mono-data text-[11px] text-dim">{frame}</div>
              <div className="absolute bottom-4 left-4 mono-data text-[11px] text-lime">
                {project.id}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {adjacentProjects.previous ? (
          <Link className="panel block p-5 transition-colors duration-300 hover:border-lime/50" href={`/work/${adjacentProjects.previous.slug}`}>
            <p className="mono-data text-[11px] text-dim">PREVIOUS CASE FILE</p>
            <p className="mt-3 text-2xl uppercase tracking-[0.08em] text-text">
              {adjacentProjects.previous.client}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {adjacentProjects.next ? (
          <Link className="panel block p-5 text-left transition-colors duration-300 hover:border-lime/50" href={`/work/${adjacentProjects.next.slug}`}>
            <p className="mono-data text-[11px] text-dim">NEXT CASE FILE</p>
            <p className="mt-3 text-2xl uppercase tracking-[0.08em] text-text">
              {adjacentProjects.next.client}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
