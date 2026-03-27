"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "+", label: "Years in Production" },
  { value: 10, suffix: "+", label: "Global Brands" },
  { value: 6, suffix: "", label: "Core Team Members" },
]

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="py-36 md:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              About the Studio
            </h2>
            <p 
              className="text-lg text-muted-foreground text-pretty"
              style={{ lineHeight: 1.7 }}
            >
              Vortex is a creative engineering studio based in Bangalore. We build
              high-fidelity visual systems for brands operating at the frontier —
              from global retail to emerging technology. We combine cinematic craft
              with technical execution across VFX, CGI, 3D, and AI-assisted
              production.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="border-l-2 border-primary pl-6"
              >
                <span className="font-heading text-4xl md:text-5xl font-bold text-foreground block mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
