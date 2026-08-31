import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coastal Pediatric Therapy Center | Speech, OT & PT in Jacksonville FL",
  description: "Coastal Pediatric Therapy Center provides play-based Speech, Occupational, and Physical Therapy for children in Jacksonville Beach and Mandarin, FL since 1996.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
