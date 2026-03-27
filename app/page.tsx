import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { SelectedWork } from "@/components/sections/selected-work"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { TrustedBy } from "@/components/sections/trusted-by"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <TrustedBy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
