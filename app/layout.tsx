import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/contexts/BookingContext";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Coastal Pediatric Therapy Center | Speech, OT & PT in Jacksonville FL",
  description: "Coastal Pediatric Therapy Center provides play-based Speech, Occupational, and Physical Therapy for children in Jacksonville Beach and Mandarin, FL since 1996.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <BookingProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
