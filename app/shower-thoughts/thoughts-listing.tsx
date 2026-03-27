"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Post } from "@/lib/mdx"

type Props = {
  featured: Post | null
  recent: Post[]
  popular: Post[]
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

export function ThoughtsListing({ featured, recent, popular }: Props) {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] text-lime/60 mb-4">
          TRANSMISSIONS // ARCHIVE
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.05em] mb-2">
          TRANSMISSIONS
        </h1>
        <p className="font-mono text-xs text-muted-foreground mb-12">
          UNENCRYPTED FEED &mdash; ALL ENTRIES
        </p>

        {/* Featured */}
        {featured && (
          <div className="mb-16">
            <p className="font-mono text-[10px] tracking-[0.2em] text-lime mb-4">
              LATEST
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={`/shower-thoughts/${featured.slug}`}
                className="block p-8 border border-[#333] hover:border-lime/40 transition-all duration-200 group"
              >
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-lime transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-3 font-mono text-[10px] text-muted-foreground tracking-wider">
                  [{formatDate(featured.date)}] | {featured.readTime} READ
                </p>
                {featured.excerpt && (
                  <p className="mt-4 text-muted-foreground text-sm">{featured.excerpt}</p>
                )}
              </Link>
            </motion.div>
          </div>
        )}

        {/* Recent */}
        {recent.length > 0 && (
          <div className="mb-16">
            <p className="font-mono text-[10px] tracking-[0.2em] text-lime mb-4">
              RECENT
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recent.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/shower-thoughts/${post.slug}`}
                    className="block p-6 border border-[#333] hover:border-lime/40 transition-all duration-200 group h-full"
                  >
                    <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-lime transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-mono text-[10px] text-muted-foreground tracking-wider">
                      [{formatDate(post.date)}] | {post.readTime} READ
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Popular */}
        {popular.length > 0 && (
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-lime mb-4">
              POPULAR
            </p>
            <div className="space-y-3">
              {popular.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/shower-thoughts/${post.slug}`}
                    className="flex items-baseline gap-4 py-2 group"
                  >
                    <span className="font-mono text-sm text-muted-foreground/50 min-w-[24px]">
                      {i + 1}.
                    </span>
                    <span className="text-sm text-foreground group-hover:text-lime transition-colors">
                      {post.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
