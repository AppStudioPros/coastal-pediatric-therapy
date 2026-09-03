import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started | Coastal Pediatric Therapy Center",
  description: "Starting therapy at Coastal Pediatric Therapy Center is simple. Submit a new patient request and we handle insurance verification, prescriptions, and scheduling.",
};

export default function GettingStartedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
