import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Coastal Pediatric Therapy Center",
  description: "Learn about Coastal Pediatric Therapy Center — serving Northeast Florida families since 1996 with play-based, multidisciplinary pediatric therapy at two Jacksonville locations.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
