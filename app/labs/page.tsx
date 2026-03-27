import type { Metadata } from "next"
import { LabsListing } from "./labs-listing"

export const metadata: Metadata = {
  title: "Labs",
  description: "Tools, experiments, and side projects by Naveen Kumar.",
}

export default function Labs() {
  return <LabsListing />
}
