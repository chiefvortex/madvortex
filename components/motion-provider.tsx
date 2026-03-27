"use client"

import type { ReactNode } from "react"

import { MotionConfig } from "framer-motion"

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.6,
        ease: "easeOut",
        type: "tween",
      }}
    >
      {children}
    </MotionConfig>
  )
}
