"use client"

import { useState } from "react"
import { Twitter, Linkedin, Link2, Check } from "lucide-react"

interface ShareButtonsProps {
  title: string
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnX = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(title)
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    )
  }

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    )
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={shareOnX}
        className="flex items-center gap-2 rounded bg-surface px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-dim transition-colors hover:text-foreground"
        aria-label="Share on X"
      >
        <Twitter className="h-3.5 w-3.5" />
        X
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="flex items-center gap-2 rounded bg-surface px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-dim transition-colors hover:text-foreground"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-3.5 w-3.5" />
        LinkedIn
      </button>
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-2 rounded bg-surface px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-dim transition-colors hover:text-foreground"
        aria-label={copied ? "Link copied" : "Copy link"}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-lime" />
            <span className="text-lime">Copied</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5" />
            Copy Link
          </>
        )}
      </button>
    </div>
  )
}
