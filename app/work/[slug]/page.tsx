import { notFound } from "next/navigation"
import type { Metadata } from "next"
import projects from "@/content/projects.json"
import { WorkDetail } from "./work-detail"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: `${project.client} -- ${project.title}`,
    description: project.description.slice(0, 160),
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  if (projectIndex === -1) notFound()

  const project = projects[projectIndex]
  const prev = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null
  const next = projectIndex > 0 ? projects[projectIndex - 1] : null

  return (
    <WorkDetail
      project={project}
      prev={prev ? { slug: prev.slug, client: prev.client, title: prev.title } : null}
      next={next ? { slug: next.slug, client: next.client, title: next.title } : null}
    />
  )
}
