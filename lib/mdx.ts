import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface Post {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  featured: boolean
  popular: boolean
  content: string
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        readTime: data.readTime,
        excerpt: data.excerpt,
        featured: data.featured || false,
        popular: data.popular || false,
        content,
      }
    })

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      readTime: data.readTime,
      excerpt: data.excerpt,
      featured: data.featured || false,
      popular: data.popular || false,
      content,
    }
  } catch {
    return undefined
  }
}

export function getFeaturedPost(): Post | undefined {
  const posts = getAllPosts()
  return posts.find((post) => post.featured)
}

export function getPopularPosts(): Post[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.popular)
}

export function getRecentPosts(count: number = 3): Post[] {
  const posts = getAllPosts()
  return posts.slice(0, count)
}
