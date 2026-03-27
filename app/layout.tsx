import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://madvortex.co"),
  title: {
    default: "NAVEEN KUMAR \u2014 Filmmaker \u00D7 Founder | Vortex Films",
    template: "%s | MADVORTEX",
  },
  description:
    "Digital dossier of Naveen Kumar. 11+ years in visual production. Founder of Vortex Films & Vortex Labs. Engineering perception through cinema, VFX, and code.",
  keywords: [
    "Naveen Kumar",
    "madvortex",
    "Vortex Films",
    "Vortex Labs",
    "VFX",
    "CGI",
    "3D",
    "AI Video",
    "Filmmaker",
    "Bangalore",
  ],
  authors: [{ name: "Naveen Kumar" }],
  creator: "Naveen Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madvortex.co",
    siteName: "MADVORTEX",
    title: "NAVEEN KUMAR \u2014 Filmmaker \u00D7 Founder | Vortex Films",
    description:
      "Digital dossier of Naveen Kumar. 11+ years in visual production. Founder of Vortex Films & Vortex Labs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NAVEEN KUMAR - MADVORTEX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVEEN KUMAR \u2014 Filmmaker \u00D7 Founder",
    description:
      "Digital dossier. 11+ years in visual production. Engineering perception.",
    creator: "@madvortex",
    images: ["/og-image.jpg"],
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
    <html lang="en">
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
                "Filmmaker and technologist with 11+ years in visual production. Founder of Vortex Films & Vortex Labs.",
              url: "https://madvortex.co",
              email: "naveen@vortexfilms.in",
              jobTitle: "Filmmaker & Founder",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Vortex Films",
                  foundingDate: "2022",
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
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "NIT Jalandhar",
              },
              sameAs: [
                "https://x.com/madvortex",
                "https://linkedin.com/in/madvortex",
                "https://instagram.com/madvortex",
                "https://github.com/madvortex",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#0A0A0A] text-[#E8E8E8]`}
      >
        {children}
      </body>
    </html>
  )
}
