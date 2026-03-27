"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/work", label: "Work" },
  { href: "/labs", label: "Labs" },
  { href: "/shower-thoughts", label: "Shower Thoughts" },
  { href: "/links", label: "Links" },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors"
          >
            madvortex
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-200 relative",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {(pathname === link.href || pathname.startsWith(link.href + "/")) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                )}
              </Link>
            ))}
            <ThemeToggle />
            <a
              href="mailto:naveen@vortexfilms.in"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Say Hello
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="mailto:naveen@vortexfilms.in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 }}
              className="text-lg text-primary"
            >
              Say Hello
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
