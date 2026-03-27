import type { Metadata } from "next"
import Link from "next/link"

import { Reveal } from "@/components/reveal"
import { formatDisplayDate } from "@/lib/utils"
import { getAllPosts } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Shower Thoughts",
  description: "Writing on VFX, creative systems, premium craft, and emerging production workflows.",
}

export default function ShowerThoughtsPage() {
  const posts = getAllPosts()
  const featuredPost = posts.find((post) => post.featured) ?? posts[0]
  const recentPosts = posts.filter((post) => post.slug !== featuredPost.slug)
  const popularPosts = posts.filter((post) => post.popular)

  return (
    <div className="page-shell">
      <div className="max-w-3xl">
        <p className="kicker text-lime">THOUGHT LOG</p>
        <h1 className="page-title mt-5">SHOWER_THOUGHTS</h1>
        <p className="mt-5 max-w-2xl">
          Notes on taste, systems, Indian premium work, and the strange overlap between filmmaking
          and software.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-8">
          <Reveal>
            <Link className="group block" href={`/shower-thoughts/${featuredPost.slug}`}>
              <article className="panel overflow-hidden p-6 transition-colors duration-300 hover:border-lime/50 md:p-8">
                <p className="mono-data text-[11px] text-lime">FEATURED POST</p>
                <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-text md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 max-w-3xl text-[17px]">{featuredPost.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="mono-data text-[11px] text-dim">
                    {formatDisplayDate(featuredPost.date)}
                  </span>
                  <span className="mono-data text-[11px] text-dim">{featuredPost.readTime}</span>
                </div>
              </article>
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {recentPosts.map((post, index) => (
              <Reveal delay={index * 0.06} key={post.slug}>
                <Link className="group block h-full" href={`/shower-thoughts/${post.slug}`}>
                  <article className="panel flex h-full flex-col p-5 transition-colors duration-300 hover:border-lime/50">
                    <div className="flex items-center justify-between gap-4">
                      <p className="mono-data text-[11px] text-dim">{formatDisplayDate(post.date)}</p>
                      <p className="mono-data text-[11px] text-dim">{post.readTime}</p>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold uppercase tracking-[0.08em] text-text">
                      {post.title}
                    </h3>
                    <p className="mt-4">{post.excerpt}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.08}>
          <aside className="panel h-fit p-6">
            <p className="mono-data text-[11px] text-lime">POPULAR POSTS</p>
            <div className="mt-6 space-y-5">
              {popularPosts.map((post, index) => (
                <Link className="block" href={`/shower-thoughts/${post.slug}`} key={post.slug}>
                  <div className="flex gap-4">
                    <span className="mono-data text-[11px] text-dim">{String(index + 1).padStart(2, "0")}</span>
                    <div className="space-y-2">
                      <p className="text-lg uppercase tracking-[0.08em] text-text">{post.title}</p>
                      <p className="mono-data text-[11px] text-dim">{post.readTime}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  )
}
