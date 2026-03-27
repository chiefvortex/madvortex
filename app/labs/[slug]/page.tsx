import { notFound } from "next/navigation"
import type { Metadata } from "next"
import tools from "@/content/tools.json"
import { BackLink } from "@/components/back-link"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) return {}

  return {
    title: tool.name,
    description: tool.description,
  }
}

export default async function LabDetailPage({ params }: Props) {
  const { slug } = await params
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) notFound()

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        <BackLink href="/labs" label="Back to labs" />

        <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-foreground uppercase">
          {tool.name}
        </h1>
        <p className="mt-2 text-muted-foreground">{tool.description}</p>

        <div className="mt-10 aspect-video bg-secondary rounded border border-border flex items-center justify-center">
          <p className="text-muted-foreground text-sm">
            {tool.status === "soon" ? "Coming soon." : "Tool UI goes here."}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {tool.builtWith.map((tech) => (
              <span
                key={tech}
                className="text-sm text-foreground border border-border px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
