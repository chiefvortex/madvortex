import type { Metadata } from "next"
import { getAllPosts } from "@/lib/mdx"
import { ThoughtsListing } from "./thoughts-listing"

export const metadata: Metadata = {
  title: "Shower Thoughts",
  description: "Opinions, observations, and occasionally useful things by Naveen Kumar.",
}

export default function ShowerThoughts() {
  const posts = getAllPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const recent = posts.filter((p) => p.slug !== featured?.slug)
  const popular = posts.filter((p) => p.popular)

  return (
    <ThoughtsListing
      featured={featured ?? null}
      recent={recent}
      popular={popular}
    />
  )
}
