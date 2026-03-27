"use client"

import { useEffect, useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "WORK", href: "/work" },
  { label: "LABS", href: "/labs" },
  { label: "THOUGHTS", href: "/shower-thoughts" },
  { label: "LINKS", href: "/links" },
]

export function Nav() {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          hasScrolled ? "bg-[rgba(10,10,10,0.72)] backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="site-shell flex h-20 items-center justify-between gap-6">
          <Link
            className="text-sm font-bold uppercase tracking-[0.24em] text-text transition-colors duration-300 hover:text-lime"
            href="/"
          >
            madvortex
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-5">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

                return (
                  <Link
                    key={item.href}
                    className={cn(
                      "mono-data text-[11px] tracking-[0.28em] text-dim transition-colors duration-300 hover:text-lime",
                      active ? "text-lime" : "",
                    )}
                    href={item.href}
                  >
                    <span className="text-link">{item.label}</span>
                  </Link>
                )
              })}
            </nav>
            <a
              className="mono-data text-[11px] tracking-[0.28em] text-lime"
              href="mailto:naveen@vortexfilms.in"
            >
              <span className="text-link">SAY HELLO →</span>
            </a>
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className="panel inline-flex h-11 w-11 items-center justify-center text-text md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-[rgba(10,10,10,0.96)] backdrop-blur-md md:hidden"
            exit={{ opacity: 0 }}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
          >
            <div className="site-shell flex h-full flex-col justify-between pb-10 pt-24">
              <div className="space-y-6">
                {navItems.map((item, index) => {
                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

                  return (
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                      key={item.href}
                      transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
                    >
                      <Link
                        className={cn(
                          "page-title block text-[clamp(2rem,10vw,3.25rem)] text-dim transition-colors duration-300",
                          active ? "text-lime" : "hover:text-text",
                        )}
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <motion.a
                animate={{ opacity: 1, y: 0 }}
                className="mono-data text-[13px] tracking-[0.3em] text-lime"
                href="mailto:naveen@vortexfilms.in"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.22 }}
              >
                SAY HELLO →
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
