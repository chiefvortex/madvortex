import type { MetadataRoute } from "next"

import { getAllPosts } from "@/lib/mdx"
import { projects, tools } from "@/lib/utils"

const siteUrl = "https://madvortex.co"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/labs", "/shower-thoughts", "/links"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-03-28"),
  }))

  const workRoutes = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date("2026-03-28"),
  }))

  const labRoutes = tools.map((tool) => ({
    url: `${siteUrl}/labs/${tool.slug}`,
    lastModified: new Date("2026-03-28"),
  }))

  const thoughtRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/shower-thoughts/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [...staticRoutes, ...workRoutes, ...labRoutes, ...thoughtRoutes]
}
