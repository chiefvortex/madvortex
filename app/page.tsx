"use client"

import { useState, useCallback } from "react"
import { BootSequence } from "@/components/BootSequence"
import { GrainOverlay } from "@/components/GrainOverlay"
import { CustomCursor } from "@/components/CustomCursor"
import { PersistentID } from "@/components/PersistentID"
import { VortexNav } from "@/components/VortexNav"
import { CoreIntel } from "@/components/CoreIntel"
import { OutputLogs } from "@/components/OutputLogs"
import { Transmissions } from "@/components/Transmissions"
import { Coordinates } from "@/components/Coordinates"
import { Dossier } from "@/components/Dossier"
import { GlitchEffect } from "@/components/GlitchEffect"

export default function Home() {
  const [booted, setBooted] = useState(false)

  const handleBootComplete = useCallback(() => {
    setBooted(true)
  }, [])

  return (
    <>
      {/* Boot sequence */}
      {!booted && <BootSequence onComplete={handleBootComplete} />}

      {/* Global layers */}
      <GrainOverlay />
      <CustomCursor />
      <GlitchEffect />

      {/* Navigation */}
      {booted && (
        <>
          <PersistentID />
          <VortexNav />
        </>
      )}

      {/* Main content */}
      {booted && (
        <main>
          <CoreIntel />
          <OutputLogs />
          <Transmissions />
          <Coordinates />
          <Dossier />

          {/* Footer */}
          <footer className="py-8 px-6 sm:px-12 border-t border-[#333]">
            <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
                MADVORTEX.CO &mdash; &copy; 2026 NAVEEN KUMAR
              </p>
              <p className="font-mono text-[10px] text-muted-foreground/50 tracking-wider">
                ENGINEERED WITH OBSESSION
              </p>
            </div>
          </footer>
        </main>
      )}
    </>
  )
}
