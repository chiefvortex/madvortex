import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { getAllPosts, getFeaturedPost, getPopularPosts } from "@/lib/mdx"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export const metadata = {
  title: "Shower Thoughts | madvortex",
  description: "Opinions, observations, and the occasional rant about VFX, filmmaking, and building things.",
}

export default function ShowerThoughtsPage() {
  const posts = getAllPosts()
  const featuredPost = getFeaturedPost()
  const popularPosts = getPopularPosts()
  const recentPosts = posts.filter((p) => !p.featured).slice(0, 4)

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <section className="px-6 py-12" aria-labelledby="thoughts-heading">
          <div className="mx-auto max-w-4xl">
            {/* Section heading */}
            <div className="mb-12">
              <h1
                id="thoughts-heading"
                className="mb-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl"
              >
                SHOWER_THOUGHTS
              </h1>
              <p className="font-mono text-xs text-muted">
                OPINIONS. OBSERVATIONS. OCCASIONAL RANTS.
              </p>
            </div>

            {/* Featured post */}
            {featuredPost && (
              <article className="mb-16">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-wide text-lime">
                  FEATURED
                </p>
                <Link
                  href={`/shower-thoughts/${featuredPost.slug}`}
                  className="group block rounded bg-surface p-6 transition-transform hover:-translate-y-1"
                >
                  <h2 className="mb-3 font-sans text-2xl font-bold text-foreground transition-colors group-hover:text-lime md:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-4 leading-relaxed text-muted">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 font-mono text-[10px] text-dim">
                    <span>{formatDate(featuredPost.date)}</span>
                    <span>·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </Link>
              </article>
            )}

            {/* Two-column layout for recent and popular */}
            <div className="grid gap-12 md:grid-cols-2">
              {/* Recent posts */}
              <div>
                <h2 className="mb-6 font-mono text-[11px] uppercase tracking-wide text-dim">
                  RECENT
                </h2>
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <article key={post.slug}>
                      <Link
                        href={`/shower-thoughts/${post.slug}`}
                        className="group block"
                      >
                        <h3 className="mb-2 font-sans text-lg font-bold text-foreground transition-colors group-hover:text-lime">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 font-mono text-[10px] text-dim">
                          <span>{formatDate(post.date)}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Popular posts */}
              <div>
                <h2 className="mb-6 font-mono text-[11px] uppercase tracking-wide text-dim">
                  POPULAR
                </h2>
                <ol className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <li key={post.slug} className="flex gap-4">
                      <span className="font-mono text-2xl font-bold text-border">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Link
                        href={`/shower-thoughts/${post.slug}`}
                        className="group flex-1"
                      >
                        <h3 className="font-sans text-sm font-bold text-foreground transition-colors group-hover:text-lime">
                          {post.title}
                        </h3>
                        <p className="mt-1 font-mono text-[10px] text-dim">
                          {post.readTime}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
