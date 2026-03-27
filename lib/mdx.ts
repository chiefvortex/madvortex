import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")

export type Post = {
  slug: string
  title: string
  date: string
  readTime: string
  featured: boolean
  popular: boolean
  excerpt: string
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        readTime: data.readTime ?? "",
        featured: data.featured ?? false,
        popular: data.popular ?? false,
        excerpt: data.excerpt ?? "",
        content,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return undefined

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    readTime: data.readTime ?? "",
    featured: data.featured ?? false,
    popular: data.popular ?? false,
    excerpt: data.excerpt ?? "",
    content,
  }
}

export function getAdjacentPosts(slug: string): { prev: Post | null; next: Post | null } {
  const posts = getAllPosts()
  const index = posts.findIndex((p) => p.slug === slug)

  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  }
}
