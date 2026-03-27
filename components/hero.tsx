"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[100px]" />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-6"
        >
          Naveen Kumar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.03em] text-foreground leading-[1.05]"
        >
          I make things move.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Visual engineer. Founder of Vortex. Based in Bangalore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/work"
            className="inline-flex items-center px-6 py-3 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 rounded"
          >
            See the work
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-muted-foreground/30" />
        <ChevronDown size={14} className="text-muted-foreground/30 animate-bounce" />
      </motion.div>
    </section>
  )
}
