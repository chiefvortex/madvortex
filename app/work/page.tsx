import type { Metadata } from "next"

import { WorkArchive } from "@/components/work-archive"

export const metadata: Metadata = {
  title: "Output Logs",
  description: "Selected work spanning VFX, CGI, 3D, AI video, and direction.",
}

export default function WorkPage() {
  return <WorkArchive />
}
