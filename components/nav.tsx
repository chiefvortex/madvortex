"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "WORK", href: "/work" },
  { label: "LABS", href: "/labs" },
  { label: "THOUGHTS", href: "/shower-thoughts" },
  { label: "LINKS", href: "/links" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="font-sans text-lg font-bold tracking-wide text-foreground transition-colors hover:text-lime"
          >
            madvortex
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline font-mono text-[11px] uppercase tracking-wide text-dim transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Say Hello - Desktop */}
          <a
            href="mailto:naveen@vortexfilms.in"
            className="hidden font-mono text-[11px] uppercase tracking-wide text-lime transition-opacity hover:opacity-80 md:block"
          >
            SAY HELLO →
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full flex-col px-6 py-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="font-sans text-lg font-bold tracking-wide text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  madvortex
                </Link>
                <button
                  type="button"
                  className="p-2 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className="font-sans text-3xl font-bold uppercase tracking-wide text-foreground transition-colors hover:text-lime"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1, ease: "easeOut" }}
                >
                  <a
                    href="mailto:naveen@vortexfilms.in"
                    className="font-mono text-sm uppercase tracking-wide text-lime"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SAY HELLO →
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
