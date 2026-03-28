"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const bootMessages = [
  "INITIALIZING...",
  "LOADING CORE_INTEL",
  "ACCESS GRANTED",
]

export function BootSequence({ children }: { children: React.ReactNode }) {
  const [showBoot, setShowBoot] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if boot sequence has been shown this session
    const hasBooted = sessionStorage.getItem("madvortex-booted")
    
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    
    if (hasBooted || prefersReducedMotion) {
      setShowContent(true)
      return
    }

    setShowBoot(true)
    sessionStorage.setItem("madvortex-booted", "true")

    // Cycle through messages
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev >= bootMessages.length - 1) {
          clearInterval(messageInterval)
          return prev
        }
        return prev + 1
      })
    }, 600)

    // End boot sequence after 2.5s
    const bootTimer = setTimeout(() => {
      setShowBoot(false)
      setShowContent(true)
    }, 2500)

    return () => {
      clearInterval(messageInterval)
      clearTimeout(bootTimer)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {showBoot && (
          <motion.div
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* MADVORTEX text with scan line reveal */}
            <div className="relative overflow-hidden">
              <motion.div
                className="text-4xl md:text-6xl font-sans font-bold tracking-wide text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                MADVORTEX
              </motion.div>
              
              {/* Scan line */}
              <motion.div
                className="absolute inset-y-0 w-1 bg-lime"
                initial={{ left: "-10%" }}
                animate={{ left: "110%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>

            {/* Cycling status text */}
            <motion.div
              className="mt-8 font-mono text-xs text-lime tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="inline-block animate-cursor-blink mr-1">_</span>
              {bootMessages[currentMessage]}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
