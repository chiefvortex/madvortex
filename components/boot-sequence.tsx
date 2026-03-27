"use client"

import { useEffect, useState } from "react"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

const bootMessages = [
  "INITIALIZING...",
  "LOADING CORE_INTEL",
  "DECRYPTING OUTPUT_LOGS",
  "ACCESS GRANTED",
]

export function BootSequence() {
  const shouldReduceMotion = useReducedMotion()
  const [isActive, setIsActive] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const hasSeenBoot = window.sessionStorage.getItem("madvortex.boot")

    if (hasSeenBoot === "seen") {
      return
    }

    setIsActive(true)

    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current < bootMessages.length - 1 ? current + 1 : current))
    }, shouldReduceMotion ? 220 : 550)

    const finish = window.setTimeout(() => {
      window.sessionStorage.setItem("madvortex.boot", "seen")
      setIsActive(false)
      window.clearInterval(interval)
    }, shouldReduceMotion ? 700 : 2500)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(finish)
    }
  }, [shouldReduceMotion])

  return (
    <AnimatePresence>
      {isActive ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-background px-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden">
            <motion.span
              animate={shouldReduceMotion ? undefined : { opacity: [0.8, 1, 0.92, 1] }}
              className="page-title block text-center text-[clamp(2.4rem,8vw,6.5rem)]"
            >
              MADVORTEX
            </motion.span>
            <motion.div
              animate={shouldReduceMotion ? undefined : { x: ["-120%", "120%"] }}
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-lime shadow-[0_0_14px_rgba(191,255,0,0.6)]"
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
          </div>
          <motion.p
            animate={{ opacity: 1 }}
            className="mono-data mt-8 text-center tracking-[0.28em] text-lime"
            key={bootMessages[messageIndex]}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {bootMessages[messageIndex]}
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
