import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"

import { Footer } from "@/components/footer"
import { GrainOverlay } from "@/components/grain-overlay"
import { MotionProvider } from "@/components/motion-provider"
import { Nav } from "@/components/nav"

import "./globals.css"

const siteUrl = "https://madvortex.co"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "700"],
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NAVEEN KUMAR — Filmmaker × Founder | madvortex",
    template: "%s | madvortex",
  },
  description:
    "Digital dossier of Naveen Kumar. 11+ years in visual production. Founder of Vortex Films & Vortex Labs. Engineering perception through cinema, VFX, and code.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "madvortex",
    title: "NAVEEN KUMAR — Filmmaker × Founder | madvortex",
    description:
      "Digital dossier of Naveen Kumar. 11+ years in visual production. Founder of Vortex Films & Vortex Labs. Engineering perception through cinema, VFX, and code.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madvortex_",
    title: "NAVEEN KUMAR — Filmmaker × Founder | madvortex",
    description:
      "Digital dossier of Naveen Kumar. 11+ years in visual production. Founder of Vortex Films & Vortex Labs. Engineering perception through cinema, VFX, and code.",
  },
  keywords: [
    "Naveen Kumar",
    "madvortex",
    "filmmaker",
    "visual engineer",
    "VFX",
    "CGI",
    "3D",
    "AI video",
    "Bangalore",
    "Vortex Films",
    "Vortex Labs",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naveen Kumar",
  alternateName: "madvortex",
  description:
    "Filmmaker and visual engineer based in Bangalore, India. Founder of Vortex Films & Vortex Labs.",
  url: siteUrl,
  email: "mailto:naveen@vortexfilms.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: [
    "https://x.com/madvortex_",
    "https://linkedin.com/in/madvortex",
    "https://instagram.com/madvortex.cc",
    "https://github.com/naveenkumar2627",
    "https://youtube.com/@vortexfilmsin",
    "https://behance.net/madvortex",
  ],
  knowsAbout: ["Film Direction", "VFX", "CGI", "3D", "AI Video", "Creative Systems"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`} lang="en">
      <body className="bg-background text-text antialiased">
        <MotionProvider>
          <GrainOverlay />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </MotionProvider>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          type="application/ld+json"
        />
      </body>
    </html>
  )
}
