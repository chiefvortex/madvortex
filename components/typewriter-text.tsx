"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
}

export function TypewriterText({
  text,
  className,
  speed = 40,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      setDisplayText(text)
      return
    }

    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      <span
        className={cn(
          "ml-0.5 inline-block w-2 bg-lime",
          showCursor ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        _
      </span>
    </span>
  )
}
