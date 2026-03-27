"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function GlitchEffect() {
  const [active, setActive] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const bufferRef = useRef("")

  const triggerGlitch = useCallback(() => {
    setActive(true)
    setTimeout(() => {
      setActive(false)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 4000)
    }, 3000)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      bufferRef.current += e.key.toUpperCase()

      // Keep only last 6 characters
      if (bufferRef.current.length > 6) {
        bufferRef.current = bufferRef.current.slice(-6)
      }

      if (bufferRef.current.endsWith("VORTEX")) {
        bufferRef.current = ""
        triggerGlitch()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [triggerGlitch])

  return (
    <>
      {/* Glitch overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[10002] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Color channel split */}
            <div
              className="absolute inset-0"
              style={{
                background: "transparent",
                mixBlendMode: "difference",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-red/20"
                animate={{
                  x: [0, 5, -3, 7, -5, 2, 0],
                  y: [0, -3, 5, -2, 4, -1, 0],
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 bg-lime/20"
                animate={{
                  x: [0, -5, 3, -7, 5, -2, 0],
                  y: [0, 3, -5, 2, -4, 1, 0],
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
              />
            </div>

            {/* Random blocks */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-lime/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 30}%`,
                  height: `${2 + Math.random() * 8}%`,
                }}
                animate={{
                  x: [0, Math.random() * 20 - 10],
                  opacity: [0.3, 0, 0.5, 0],
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}

            {/* Invert flash */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundColor: [
                  "transparent",
                  "rgba(255,255,255,0.8)",
                  "transparent",
                  "rgba(191,255,0,0.3)",
                  "transparent",
                ],
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-20 left-1/2 z-[10003] font-mono text-xs tracking-wider bg-lime text-[#0A0A0A] px-4 py-2"
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
          >
            YOU FOUND THE VORTEX. WELCOME TO THE INNER CIRCLE.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
