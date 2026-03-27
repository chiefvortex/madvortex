import type { Metadata } from "next"
import { LinksPage } from "./links-page"

export const metadata: Metadata = {
  title: "Links",
  description: "Find Naveen Kumar across the internet.",
}

export default function Links() {
  return <LinksPage />
}
