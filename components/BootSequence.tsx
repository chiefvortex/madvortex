"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BOOT_MESSAGES = [
  "INITIALIZING...",
  "LOADING CORE_INTEL",
  "DECRYPTING OUTPUT_LOGS",
  "MAPPING TRANSMISSIONS",
  "ACCESS GRANTED",
]

type BootSequenceProps = {
  onComplete: () => void
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [messageIndex, setMessageIndex] = useState(0)
  const [scanComplete, setScanComplete] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      onComplete()
      return
    }

    // Check if already seen this session
    const seen = sessionStorage.getItem("boot-seen")
    if (seen) {
      onComplete()
      return
    }

    // Scan line animation
    const scanTimer = setTimeout(() => setScanComplete(true), 1200)

    // Cycle through messages
    const messageTimers = BOOT_MESSAGES.map((_, i) =>
      setTimeout(() => setMessageIndex(i), 800 + i * 350)
    )

    // Exit sequence
    const exitTimer = setTimeout(() => setExiting(true), 2200)
    const completeTimer = setTimeout(() => {
      sessionStorage.setItem("boot-seen", "true")
      onComplete()
    }, 2500)

    return () => {
      clearTimeout(scanTimer)
      messageTimers.forEach(clearTimeout)
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[10001] bg-[#0A0A0A] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo area with scan line reveal */}
          <div className="relative mb-8">
            <motion.div
              className="text-4xl sm:text-5xl font-space font-bold tracking-[0.15em] text-foreground"
              style={{
                clipPath: scanComplete ? "inset(0)" : "inset(0 100% 0 0)",
              }}
            >
              MADVORTEX
            </motion.div>

            {/* Scan line */}
            {!scanComplete && (
              <motion.div
                className="absolute top-0 h-full w-[2px] bg-lime"
                initial={{ left: 0 }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.2, ease: "linear" }}
              />
            )}
          </div>

          {/* Boot messages */}
          <div className="h-6">
            <motion.p
              key={messageIndex}
              className="font-mono text-xs tracking-[0.2em] text-lime"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              {BOOT_MESSAGES[messageIndex]}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
