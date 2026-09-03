import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources for Families | Coastal Pediatric Therapy Center",
  description: "Developmental milestone guides, sensory processing indicators, and volunteer/student request information from Coastal Pediatric Therapy Center in Jacksonville, FL.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
