"use client"

import { useEffect, useState } from "react"

import { useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

type TypewriterTextProps = {
  text: string
  className?: string
  delay?: number
}

export function TypewriterText({ text, className, delay = 150 }: TypewriterTextProps) {
  const shouldReduceMotion = useReducedMotion()
  const [visibleText, setVisibleText] = useState(shouldReduceMotion ? text : "")

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleText(text)
      return
    }

    setVisibleText("")

    let index = 0
    let interval = 0

    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1
        setVisibleText(text.slice(0, index))

        if (index >= text.length) {
          window.clearInterval(interval)
        }
      }, 26)
    }, delay)

    return () => {
      window.clearTimeout(start)
      window.clearInterval(interval)
    }
  }, [delay, shouldReduceMotion, text])

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span>{visibleText}</span>
      <span
        aria-hidden
        className="inline-block h-[1.1em] w-[0.65ch] bg-lime align-middle animate-pulse"
      />
    </span>
  )
}
