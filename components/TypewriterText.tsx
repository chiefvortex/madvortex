"use client"

import { useEffect, useState, useRef } from "react"

type TypewriterTextProps = {
  text: string
  speed?: number
  className?: string
  triggerOnView?: boolean
}

export function TypewriterText({
  text,
  speed = 30,
  className = "",
  triggerOnView = true,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(!triggerOnView)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!triggerOnView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [triggerOnView])

  useEffect(() => {
    if (!started) return

    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [started, text, speed])

  return (
    <span ref={ref} className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="text-lime animate-pulse">_</span>
      )}
    </span>
  )
}
