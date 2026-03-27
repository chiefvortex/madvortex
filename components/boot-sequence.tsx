"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

const bootMessages = [
  "INITIALIZING...",
  "LOADING CORE_INTEL",
  "DECRYPTING OUTPUT_LOGS",
  "MAPPING TRANSMISSIONS",
  "CALIBRATING VISUAL ENGINE",
  "ACCESS GRANTED",
]

export function BootSequence() {
  const shouldReduceMotion = useReducedMotion()
  const [isActive, setIsActive] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [phase, setPhase] = useState<"scan" | "reveal" | "done">("scan")

  useEffect(() => {
    const hasSeenBoot = window.sessionStorage.getItem("madvortex.boot")
    if (hasSeenBoot === "seen") return

    setIsActive(true)

    const interval = window.setInterval(() => {
      setMessageIndex((current) =>
        current < bootMessages.length - 1 ? current + 1 : current
      )
    }, shouldReduceMotion ? 180 : 380)

    // Phase transitions
    const revealTimer = window.setTimeout(
      () => setPhase("reveal"),
      shouldReduceMotion ? 400 : 1200
    )

    const finish = window.setTimeout(() => {
      window.sessionStorage.setItem("madvortex.boot", "seen")
      setPhase("done")
      setIsActive(false)
      window.clearInterval(interval)
    }, shouldReduceMotion ? 700 : 3000)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(revealTimer)
      window.clearTimeout(finish)
    }
  }, [shouldReduceMotion])

  return (
    <AnimatePresence>
      {isActive ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center px-6"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          initial={{ opacity: 1 }}
          style={{ background: "var(--background-color)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Noise texture */}
          <div className="absolute inset-0 noise-overlay pointer-events-none" />

          {/* Dither corners */}
          <div className="absolute top-0 left-0 w-40 h-40 dither-dots pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 h-40 dither-dots pointer-events-none" />

          {/* MADVORTEX text with scan-line */}
          <div className="relative overflow-hidden">
            <motion.span
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: [0.8, 1, 0.92, 1] }
              }
              className="page-title block text-center text-[clamp(2.4rem,8vw,6.5rem)]"
            >
              MADVORTEX
            </motion.span>

            {/* Scan line beam */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { x: ["-120%", "120%"] }
              }
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
              style={{
                background: "var(--lime-color)",
                boxShadow:
                  "0 0 14px rgba(191,255,0,0.6), 0 0 28px rgba(191,255,0,0.3)",
              }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
          </div>

          {/* XX logomark — gaussian blur entrance */}
          <AnimatePresence>
            {phase === "reveal" && !shouldReduceMotion && (
              <motion.div
                className="absolute"
                initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                animate={{ opacity: 0.15, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.8, filter: "blur(16px)" }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="text-[120px] font-bold leading-none select-none"
                  style={{ color: "var(--text-color)" }}
                >
                  XX
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Boot messages */}
          <motion.p
            animate={{ opacity: 1 }}
            className="mono-data mt-8 text-center tracking-[0.28em]"
            key={bootMessages[messageIndex]}
            style={{ color: "var(--lime-color)" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {bootMessages[messageIndex]}
          </motion.p>

          {/* Progress bar */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[1px]"
            style={{ background: "var(--border-color)" }}
          >
            <motion.div
              className="h-full"
              style={{ background: "var(--lime-color)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: shouldReduceMotion ? 0.7 : 3,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
