"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_ITEMS = [
  { label: "CORE_INTEL", href: "#core-intel", angle: -90 },
  { label: "OUTPUT_LOGS", href: "#output-logs", angle: -18 },
  { label: "TRANSMISSIONS", href: "#transmissions", angle: 54 },
  { label: "COORDINATES", href: "#coordinates", angle: 126 },
  { label: "DOSSIER", href: "#dossier", angle: 198 },
] as const

export function VortexNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = useCallback((href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const radius = 100

  return (
    <>
      {/* Fixed dial button - bottom right */}
      <div className="fixed bottom-6 right-6 z-[9990]">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-16 h-16 rounded-full border border-lime/30 bg-[#0A0A0A] flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          data-cursor="OPEN"
          animate={{
            boxShadow: isOpen
              ? "0 0 20px rgba(191, 255, 0, 0.3)"
              : "0 0 10px rgba(191, 255, 0, 0.1)",
          }}
        >
          <motion.div
            className="font-space text-lime text-xs font-bold tracking-wider"
            animate={{ rotate: isOpen ? 0 : 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            MV
          </motion.div>
        </motion.button>

        {/* Radial menu - desktop */}
        <AnimatePresence>
          {isOpen && (
            <div className="hidden md:block">
              {NAV_ITEMS.map((item, i) => {
                const rad = (item.angle * Math.PI) / 180
                const x = Math.cos(rad) * radius
                const y = Math.sin(rad) * radius

                return (
                  <motion.button
                    key={item.label}
                    className="absolute font-mono text-[10px] tracking-wider text-lime hover:text-[#0A0A0A] hover:bg-lime px-2 py-1 border border-lime/30 bg-[#0A0A0A] whitespace-nowrap"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavigate(item.href)}
                    data-cursor="VIEW"
                  >
                    {item.label}
                  </motion.button>
                )
              })}

              {/* Connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: radius * 2 + 40,
                  height: radius * 2 + 40,
                }}
              >
                {NAV_ITEMS.map((item) => {
                  const rad = (item.angle * Math.PI) / 180
                  const x = Math.cos(rad) * radius + radius + 20
                  const y = Math.sin(rad) * radius + radius + 20
                  return (
                    <motion.line
                      key={item.label}
                      x1={radius + 20}
                      y1={radius + 20}
                      x2={x}
                      y2={y}
                      stroke="#BFFF00"
                      strokeOpacity={0.2}
                      strokeWidth={1}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )
                })}
              </svg>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[9989] bg-[#0A0A0A]/95 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.label}
                className="font-mono text-sm tracking-[0.2em] text-lime hover:bg-lime hover:text-[#0A0A0A] px-4 py-2 border border-lime/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavigate(item.href)}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
