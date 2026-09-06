import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make a Payment | Coastal Pediatric Therapy Center",
  description:
    "Securely pay your balance online through the Coastal Pediatric Therapy Center patient payment portal, or learn about other payment options.",
};

export default function MakeAPaymentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
