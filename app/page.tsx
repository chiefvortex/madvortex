import { BootSequence } from "@/components/boot-sequence"
import { ContactStrip } from "@/components/contact-strip"
import { Currently } from "@/components/currently"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { WorkPreview } from "@/components/work-preview"

export default function HomePage() {
  return (
    <>
      <BootSequence />
      <Hero />
      <WorkPreview />
      <Intro />
      <Currently />
      <ContactStrip />
    </>
  )
}
