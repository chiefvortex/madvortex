import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Geist } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://madvortex.co"),
  title: "Vortex | Visual Engineering Studio",
  description:
    "Vortex is a Bangalore-based creative engineering studio specializing in VFX, CGI, 3D visuals, and AI-assisted video for global brands.",
  keywords: [
    "VFX",
    "CGI",
    "3D",
    "AI Video",
    "Visual Effects",
    "Creative Studio",
    "Bangalore",
    "Brand Films",
  ],
  authors: [{ name: "Vortex" }],
  creator: "Vortex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vortexfilms.in",
    siteName: "Vortex",
    title: "Vortex | Visual Engineering Studio",
    description:
      "VFX. CGI. 3D. AI-Assisted Video. For brands that refuse to blend in.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vortex - Visual Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortex | Visual Engineering Studio",
    description:
      "VFX. CGI. 3D. AI-Assisted Video. For brands that refuse to blend in.",
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
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vortex",
              description:
                "Creative engineering studio specializing in VFX, CGI, 3D visuals, and AI-assisted video",
              url: "https://vortexfilms.in",
              logo: "https://vortexfilms.in/logo.png",
              email: "naveen@vortexfilms.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "India",
              },
              sameAs: [
                "https://linkedin.com/company/vortex",
                "https://twitter.com/vortex",
                "https://instagram.com/vortex",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${geist.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
