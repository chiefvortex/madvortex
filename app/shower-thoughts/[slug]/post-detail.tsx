"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react"
import type { Post } from "@/lib/mdx"

type PostDetailProps = {
  post: Post
  prev: Post | null
  next: Post | null
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function renderContent(content: string) {
  const blocks = content.trim().split(/\n\n+/)

  return blocks.map((block, i) => {
    const trimmed = block.trim()
    if (!trimmed) return null

    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-xl font-bold tracking-[0.05em] uppercase mt-10 mb-4 text-lime">
          {trimmed.replace("## ", "")}
        </h2>
      )
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="text-lg font-semibold mt-8 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      )
    }

    const formatted = trimmed
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, '<code class="bg-secondary px-1.5 py-0.5 text-sm font-mono text-lime">$1</code>')
      .replace(/--/g, "\u2014")

    return (
      <p
        key={i}
        className="mb-6 text-foreground/90"
        style={{ fontSize: "16px", lineHeight: "1.7" }}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    )
  })
}

export function PostDetail({ post, prev, next }: PostDetailProps) {
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[680px] mx-auto">
        <Link
          href="/#transmissions"
          className="inline-flex items-center gap-2 font-mono text-xs text-lime tracking-wider hover:text-lime/70 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          BACK TO TRANSMISSIONS
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
            TRANSMISSION // DECRYPTED
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-[0.02em] text-foreground leading-tight uppercase">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-3 font-mono text-[10px] text-muted-foreground tracking-wider">
            <span>[{formatDate(post.date)}]</span>
            <span>|</span>
            <span>{post.readTime} READ</span>
          </div>
          <p className="mt-1 font-mono text-[10px] text-muted-foreground tracking-wider">
            AUTHOR: NK
          </p>

          <div className="h-px bg-[#333] mt-8 mb-10" />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-foreground"
        >
          {renderContent(post.content)}
        </motion.article>

        {/* Share */}
        <div className="h-px bg-[#333] mt-10 mb-8" />

        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
            SHARE
          </span>
          <a
            href={`https://x.com/intent/tweet?url=https://madvortex.co/shower-thoughts/${post.slug}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-lime tracking-wider lime-underline"
          >
            X
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://madvortex.co/shower-thoughts/${post.slug}&title=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-lime tracking-wider lime-underline"
          >
            LINKEDIN
          </a>
          <button
            onClick={handleCopyLink}
            className="font-mono text-[10px] text-lime tracking-wider lime-underline"
            data-cursor="COPY"
          >
            COPY LINK
          </button>
        </div>

        {/* Prev / Next */}
        <div className="h-px bg-[#333] mt-8 mb-8" />

        <p className="font-mono text-[10px] tracking-[0.2em] text-lime/60 mb-4">
          MORE TRANSMISSIONS
        </p>

        <div className="grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/shower-thoughts/${prev.slug}`}
              className="p-4 border border-[#333] hover:border-lime/40 transition-colors group"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground mb-2">
                <ArrowLeft size={12} />
                PREVIOUS
              </div>
              <p className="text-sm font-medium text-foreground line-clamp-2">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/shower-thoughts/${next.slug}`}
              className="p-4 border border-[#333] hover:border-lime/40 transition-colors text-right group"
            >
              <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-muted-foreground mb-2">
                NEXT
                <ArrowRight size={12} />
              </div>
              <p className="text-sm font-medium text-foreground line-clamp-2">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  )
}
