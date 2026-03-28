import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "NAVEEN KUMAR — Filmmaker × Founder | madvortex",
  description:
    "Digital dossier of Naveen Kumar. 11+ years in visual production. Founder of Vortex Films & Vortex Labs. Engineering perception through cinema, VFX, and code.",
  keywords: [
    "Naveen Kumar",
    "madvortex",
    "filmmaker",
    "VFX",
    "CGI",
    "visual engineer",
    "Vortex Films",
    "Vortex Labs",
    "Bangalore",
    "India",
  ],
  authors: [{ name: "Naveen Kumar" }],
  creator: "Naveen Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madvortex.co",
    siteName: "madvortex",
    title: "NAVEEN KUMAR — Filmmaker × Founder | madvortex",
    description:
      "Digital dossier of Naveen Kumar. 11+ years in visual production. Founder of Vortex Films & Vortex Labs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naveen Kumar - madvortex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVEEN KUMAR — Filmmaker × Founder | madvortex",
    description:
      "Digital dossier of Naveen Kumar. 11+ years in visual production. Engineering perception through cinema, VFX, and code.",
    images: ["/og-image.jpg"],
    creator: "@madvortex_",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Naveen Kumar",
              alternateName: "madvortex",
              description:
                "Filmmaker and visual engineer with 11+ years in production. Founder of Vortex Films & Vortex Labs.",
              url: "https://madvortex.co",
              email: "naveen@vortexfilms.in",
              jobTitle: "Filmmaker & Founder",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Vortex Films",
                },
                {
                  "@type": "Organization",
                  name: "Vortex Labs",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "India",
              },
              sameAs: [
                "https://x.com/madvortex_",
                "https://linkedin.com/in/madvortex",
                "https://instagram.com/madvortex.cc",
                "https://github.com/naveenkumar2627",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
