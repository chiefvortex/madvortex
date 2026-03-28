import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import projects from "@/content/projects.json"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return { title: "Project Not Found | madvortex" }
  }

  return {
    title: `${project.client} — ${project.title} | madvortex`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]

  if (!project) {
    notFound()
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <article className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            {/* Back link */}
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-dim transition-colors hover:text-lime"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to Archive
            </Link>

            {/* Hero image placeholder */}
            <div className="relative mb-12 aspect-video overflow-hidden rounded">
              <div className="grid-texture h-full w-full" />
              <div className="absolute left-4 top-4 font-mono text-[10px] text-lime">
                {project.id}
              </div>
            </div>

            {/* Metadata block */}
            <div className="mb-12 grid gap-4 rounded bg-surface p-6 font-mono text-xs sm:grid-cols-2 md:grid-cols-4">
              <div>
                <p className="mb-1 text-lime">PROJECT_ID</p>
                <p className="text-foreground">{project.id}</p>
              </div>
              <div>
                <p className="mb-1 text-lime">CLIENT</p>
                <p className="text-foreground">{project.client}</p>
              </div>
              <div>
                <p className="mb-1 text-lime">ROLE</p>
                <p className="text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="mb-1 text-lime">YEAR</p>
                <p className="text-foreground">{project.year}</p>
              </div>
            </div>

            {/* Title and description */}
            <h1 className="mb-4 font-sans text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
              {project.title}
            </h1>
            <p className="mb-12 text-lg leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Gallery placeholder */}
            <div className="mb-12 grid gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-video overflow-hidden rounded"
                >
                  <div className="grid-texture h-full w-full" />
                </div>
              ))}
            </div>

            {/* Prev/Next navigation */}
            <div className="flex items-center justify-between border-t border-border pt-8">
              {prevProject ? (
                <Link
                  href={`/work/${prevProject.slug}`}
                  className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-dim transition-colors hover:text-lime"
                >
                  <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                  <span className="hidden sm:inline">{prevProject.client}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-dim transition-colors hover:text-lime"
                >
                  <span className="hidden sm:inline">{nextProject.client}</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
