import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Twitter, Linkedin, Link2 } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { ShareButtons } from "./share-buttons"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found | madvortex" }
  }

  return {
    title: `${post.title} | madvortex`,
    description: post.excerpt,
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const posts = getAllPosts()
  const postIndex = posts.findIndex((p) => p.slug === slug)
  const post = posts[postIndex]

  if (!post) {
    notFound()
  }

  const prevPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null
  const nextPost = postIndex > 0 ? posts[postIndex - 1] : null

  // Simple MDX to HTML conversion (basic paragraphs and headers)
  const contentHtml = post.content
    .split("\n\n")
    .filter((block) => block.trim())
    .map((block, i) => {
      const trimmed = block.trim()
      if (trimmed.startsWith("## ")) {
        return `<h2 key="${i}">${trimmed.slice(3)}</h2>`
      }
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return `<p key="${i}"><strong>${trimmed.slice(2, -2)}</strong></p>`
      }
      return `<p key="${i}">${trimmed}</p>`
    })
    .join("")

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <article className="px-6 py-12">
          <div className="mx-auto max-w-3xl">
            {/* Back link */}
            <Link
              href="/shower-thoughts"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-dim transition-colors hover:text-lime"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to Thoughts
            </Link>

            {/* Post header */}
            <header className="mb-12">
              <h1 className="mb-4 font-sans text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 font-mono text-[11px] text-dim">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            {/* Post content */}
            <div
              className="prose mb-12"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Share buttons */}
            <div className="mb-12 border-t border-border pt-8">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-wide text-dim">
                SHARE THIS
              </p>
              <ShareButtons title={post.title} />
            </div>

            {/* Prev/Next navigation */}
            <div className="flex items-center justify-between border-t border-border pt-8">
              {prevPost ? (
                <Link
                  href={`/shower-thoughts/${prevPost.slug}`}
                  className="group max-w-[45%]"
                >
                  <p className="mb-1 font-mono text-[10px] text-dim">PREVIOUS</p>
                  <p className="font-sans text-sm font-bold text-foreground transition-colors group-hover:text-lime">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/shower-thoughts/${nextPost.slug}`}
                  className="group max-w-[45%] text-right"
                >
                  <p className="mb-1 font-mono text-[10px] text-dim">NEXT</p>
                  <p className="font-sans text-sm font-bold text-foreground transition-colors group-hover:text-lime">
                    {nextPost.title}
                  </p>
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
