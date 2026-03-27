export function GrainOverlay() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="noise-overlay absolute inset-[-20%] animate-grainShift" />
      <div className="scanline-overlay absolute inset-0" />
    </div>
  )
}
