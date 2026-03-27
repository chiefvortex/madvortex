import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/mdx"
import projects from "@/content/projects.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://madvortex.co"

  const posts = getAllPosts()

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/shower-thoughts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shower-thoughts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/labs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...projectRoutes,
    ...postRoutes,
  ]
}
