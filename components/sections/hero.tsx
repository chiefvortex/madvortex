"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const clients = ["NIKE", "AMD", "SPOTIFY", "IKEA", "QATAR AIRWAYS"]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0a0a1a] to-[#0A0A0A]" />
        
        {/* Animated gradient orbs with parallax-like floating motion */}
        <motion.div
          className="absolute inset-0 opacity-30 will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0, 51, 255, 0.15) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-20 will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse at 30% 70%, rgba(0, 51, 255, 0.1) 0%, transparent 40%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Subtle animated noise/grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
        
        {/* Light leak effect */}
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-full h-full opacity-[0.08] will-change-transform"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 51, 255, 0.3) 0%, transparent 60%)",
          }}
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8 font-medium"
          >
            VORTEX
          </motion.span>

          {/* Main headline - heavier weight with tighter letter-spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-[0.95]"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span className="text-balance">WE ENGINEER VISUALS.</span>
          </motion.h1>

          {/* Subheadline - increased line-height */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
            style={{ lineHeight: 1.7 }}
          >
            VFX. CGI. 3D. AI-Assisted Video. For brands that refuse to blend in.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 border border-primary text-primary px-8 py-4 text-sm tracking-wide uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background will-change-transform"
              aria-label="View our selected work"
            >
              See the Work
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - thin line with chevron above client strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
        </motion.div>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </motion.div>

      {/* Client strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 border-t border-[rgba(255,255,255,0.06)] py-8"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-center md:justify-start gap-6 md:gap-12 flex-wrap">
            {clients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-xs tracking-[0.2em] text-muted-foreground font-mono"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll text indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-28 right-6 md:right-12 lg:right-24 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-x-4">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
