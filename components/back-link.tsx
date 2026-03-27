"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

type BackLinkProps = {
  href: string
  label: string
}

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  )
}
