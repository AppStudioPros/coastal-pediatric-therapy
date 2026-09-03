import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pediatric Therapy Services | Coastal Pediatric Therapy Center",
  description: "Speech & Language, Occupational Therapy, Physical Therapy, Sensory Integration, Feeding Therapy, and Reading Intervention for children in Jacksonville, FL.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
