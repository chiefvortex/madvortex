import { BootSequence } from "@/components/boot-sequence"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { WorkPreview } from "@/components/work-preview"
import { Intro } from "@/components/intro"
import { Currently } from "@/components/currently"
import { ContactStrip } from "@/components/contact-strip"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <BootSequence>
      <Nav />
      <main>
        <Hero />
        <WorkPreview />
        <Intro />
        <Currently />
        <ContactStrip />
      </main>
      <Footer />
    </BootSequence>
  )
}
