import fs from "fs"
import path from "path"

import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")

export type PostFrontmatter = {
  title: string
  date: string
  readTime: string
  featured: boolean
  popular: boolean
  excerpt: string
}

export type Post = PostFrontmatter & {
  slug: string
  content: string
}

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx$/, "")
  const fullPath = path.join(postsDirectory, fileName)
  const source = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(source)

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

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readPostFile)
    .sort((left, right) => (left.date > right.date ? -1 : 1))
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return undefined
  }

  return readPostFile(`${slug}.mdx`)
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts()
  const index = posts.findIndex((post) => post.slug === slug)

  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  }
}
