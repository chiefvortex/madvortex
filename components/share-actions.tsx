"use client"

import { useState } from "react"

import { Copy, Linkedin } from "lucide-react"

import { PlatformIcon } from "./platform-icon"

type ShareActionsProps = {
  title: string
  path: string
}

export function ShareActions({ title, path }: ShareActionsProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl =
    typeof window === "undefined" ? `https://madvortex.co${path}` : new URL(path, window.location.origin).toString()

  const shareOnX = () => {
    const href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} ${shareUrl}`)}`
    window.open(href, "_blank", "noopener,noreferrer")
  }

  const shareOnLinkedIn = () => {
    const href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(href, "_blank", "noopener,noreferrer")
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        className="mono-data flex items-center gap-2 border border-white/10 px-3 py-2 text-[11px] text-dim transition-colors duration-300 hover:border-lime/50 hover:text-text"
        onClick={shareOnX}
        type="button"
      >
        <PlatformIcon icon="x" />
        X
      </button>
      <button
        className="mono-data flex items-center gap-2 border border-white/10 px-3 py-2 text-[11px] text-dim transition-colors duration-300 hover:border-lime/50 hover:text-text"
        onClick={shareOnLinkedIn}
        type="button"
      >
        <Linkedin className="h-4 w-4" strokeWidth={1.7} />
        LINKEDIN
      </button>
      <button
        className="mono-data flex items-center gap-2 border border-white/10 px-3 py-2 text-[11px] text-dim transition-colors duration-300 hover:border-lime/50 hover:text-text"
        onClick={copyLink}
        type="button"
      >
        <Copy className="h-4 w-4" strokeWidth={1.7} />
        {copied ? "COPIED" : "COPY LINK"}
      </button>
    </div>
  )
}
