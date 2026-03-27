import type { Metadata } from "next"
import { WorkListing } from "./work-listing"

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Naveen Kumar. VFX, CGI, 3D, and AI-assisted video.",
}

export default function Work() {
  return <WorkListing />
}
