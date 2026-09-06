import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physician Resources | Coastal Pediatric Therapy Center",
  description:
    "Referring a patient to Coastal Pediatric Therapy Center in Jacksonville, FL? Learn how to submit a referral, what we treat, and how we collaborate with your practice.",
};

export default function PhysicianResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
