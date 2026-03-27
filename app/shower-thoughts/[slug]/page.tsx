import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

import { mdxComponents } from "@/components/mdx-components"
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
          <MDXRemote components={mdxComponents} source={post.content} />
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
