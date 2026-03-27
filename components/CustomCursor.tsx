"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

type CursorState = {
  x: number
  y: number
  label: string | null
}

export function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0, label: null })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [visible, setVisible] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))
    setVisible(true)

    setTrail((prev) => {
      const next = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]
      return next.slice(-3)
    })
  }, [])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const interactive = target.closest("a, button, [data-cursor]")
    if (interactive) {
      const label = interactive.getAttribute("data-cursor") || "ENTER"
      setCursor((prev) => ({ ...prev, label }))
    } else {
      setCursor((prev) => ({ ...prev, label: null }))
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setVisible(false)
  }, [])

  useEffect(() => {
    // Skip custom cursor on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseOver, handleMouseLeave])

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      {/* Ghost trail */}
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="absolute font-mono text-lime"
          style={{
            left: point.x,
            top: point.y,
            transform: "translate(-50%, -50%)",
            fontSize: "16px",
          }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          +
        </motion.div>
      ))}

      {/* Main cursor */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="absolute"
            style={{
              left: cursor.x,
              top: cursor.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {cursor.label ? (
              <motion.div
                className="border border-lime rounded-full flex items-center justify-center"
                initial={{ width: 16, height: 16 }}
                animate={{ width: 48, height: 48 }}
                transition={{ duration: 0.15 }}
              >
                <span className="font-mono text-lime text-[8px] tracking-wider">
                  {cursor.label}
                </span>
              </motion.div>
            ) : (
              <span className="font-mono text-lime text-[16px] leading-none">+</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
