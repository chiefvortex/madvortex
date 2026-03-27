import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import currentIntel from "@/content/currently.json"
import externalLinks from "@/content/links.json"
import projectArchive from "@/content/projects.json"
import labArchive from "@/content/tools.json"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Project = {
  id: string
  slug: string
  client: string
  title: string
  role: string
  classification: string
  year: string
  categories: string[]
  featured: boolean
  status: string
  summary: string
  description: string[]
  deliverables: string[]
  palette: {
    from: string
    via: string
    to: string
  }
}

export type Tool = {
  slug: string
  name: string
  status: string
  description: string
  builtWith: string[]
  releaseWindow: string
  summary: string
  details: string[]
}

export type SocialLink = {
  platform: string
  handle: string
  url: string
  icon: string
}

export type CurrentEntry = {
  label: string
  value: string
}

export const projects = projectArchive as Project[]
export const tools = labArchive as Tool[]
export const links = externalLinks as SocialLink[]
export const currentStack = currentIntel as CurrentEntry[]

export function getFeaturedProjects(limit = 4) {
  return projects.filter((project) => project.featured).slice(0, limit)
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
  }
}

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug)
}

export function getAdjacentTools(slug: string) {
  const index = tools.findIndex((tool) => tool.slug === slug)

  return {
    previous: index > 0 ? tools[index - 1] : null,
    next: index >= 0 && index < tools.length - 1 ? tools[index + 1] : null,
  }
}

export function formatDisplayDate(input: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(input))
}
