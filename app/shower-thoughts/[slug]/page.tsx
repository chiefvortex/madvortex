import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Reveal } from "@/components/reveal"
import { ShareActions } from "@/components/share-actions"
import { formatDisplayDate } from "@/lib/utils"
import { getAdjacentPosts, getAllPosts, getPostBySlug } from "@/lib/mdx"

type PostDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

/**
 * Simple markdown-to-HTML renderer for blog content.
 * Handles headings, bold, italic, inline code, and paragraphs.
 * Replaces next-mdx-remote to avoid CVE-2026-0969.
 */
function renderMarkdown(content: string): React.ReactNode[] {
  const blocks = content.trim().split(/\n\n+/)

  return blocks.map((block, i) => {
    const trimmed = block.trim()
    if (!trimmed) return null

    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-12 text-2xl font-bold uppercase tracking-[0.12em] text-text md:text-3xl"
        >
          {trimmed.replace("## ", "")}
        </h2>
      )
    }

    if (trimmed.startsWith("### ")) {
      return (
        <h3
          key={i}
          className="mt-10 text-xl font-semibold uppercase tracking-[0.12em] text-text"
        >
          {trimmed.replace("### ", "")}
        </h3>
      )
    }

    if (trimmed.startsWith("> ")) {
      return (
        <blockquote
          key={i}
          className="mt-6 border-l border-l-lime pl-4 font-medium italic text-text"
        >
          {trimmed.replace(/^>\s?/gm, "")}
        </blockquote>
      )
    }

    // Format inline elements
    const formatted = trimmed
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-text">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em class="italic text-text">$1</em>')
      .replace(
        /`(.+?)`/g,
        '<code class="rounded-[4px] border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[0.92em] text-lime">$1</code>'
      )
      .replace(/--/g, "\u2014")

    return (
      <p
        key={i}
        className="mt-5"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    )
  })
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const adjacentPosts = getAdjacentPosts(post.slug)

  return (
    <div className="page-shell max-w-4xl">
      <Reveal>
        <p className="kicker text-lime">THOUGHT ENTRY</p>
        <h1 className="page-title mt-5">{post.title}</h1>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="mono-data text-[11px] text-dim">{formatDisplayDate(post.date)}</span>
          <span className="mono-data text-[11px] text-dim">{post.readTime}</span>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="flex flex-col gap-4 border-y border-white/8 py-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm text-muted">{post.excerpt}</p>
          <ShareActions path={`/shower-thoughts/${post.slug}`} title={post.title} />
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <article className="max-w-none">
          {renderMarkdown(post.content)}
        </article>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {adjacentPosts.previous ? (
          <Link
            className="panel block p-5 transition-colors duration-300 hover:border-lime/50"
            href={`/shower-thoughts/${adjacentPosts.previous.slug}`}
          >
            <p className="mono-data text-[11px] text-dim">PREVIOUS ENTRY</p>
            <p className="mt-3 text-2xl uppercase tracking-[0.08em] text-text">
              {adjacentPosts.previous.title}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {adjacentPosts.next ? (
          <Link
            className="panel block p-5 transition-colors duration-300 hover:border-lime/50"
            href={`/shower-thoughts/${adjacentPosts.next.slug}`}
          >
            <p className="mono-data text-[11px] text-dim">NEXT ENTRY</p>
            <p className="mt-3 text-2xl uppercase tracking-[0.08em] text-text">
              {adjacentPosts.next.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
