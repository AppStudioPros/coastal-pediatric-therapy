"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Getting Started", "/getting-started"],
  ["Insurance", "/insurance"],
  ["About", "/about"],
  ["Resources", "/resources"],
  ["Blog", "/blog"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubStatus("sent");
    } catch {
      setSubStatus("error");
    }
  };

  return (
    <footer className="bg-[#1e3a4a] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Logo + tagline + Instagram */}
        <div>
          <div className="mb-4">
            <p className="font-bold text-lg text-white leading-tight">Coastal Pediatric</p>
            <p className="font-light text-white/80 text-sm">Therapy Center</p>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Play-based Speech, Occupational, and Physical Therapy for children in Northeast Florida since 1996.
          </p>
          <a
            href="https://www.instagram.com/coastalpediatrictherapy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#FAFCAA] hover:text-[#E8EA90] transition font-medium"
          >
            <ExternalLink size={15} />
            @coastalpediatrictherapy
          </a>
        </div>

        {/* Column 2: Site Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Site Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-white/60 hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Locations */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Locations</h4>
          <div className="space-y-5 text-sm">
            <div>
              <p className="font-semibold text-white/90 mb-1">Jacksonville Beach</p>
              <p className="text-white/60 leading-relaxed">
                2730 Isabella Blvd, Suite 10<br />
                Jacksonville Beach, FL 32250
              </p>
              <p className="text-white/60 mt-1">(904) 372-4070</p>
              <p className="text-white/60">Fax: (904) 372-4075</p>
              <p className="text-white/60">info@coastaltherapy.net</p>
              <p className="text-white/50 text-xs mt-1">Mon–Fri 8:30am–5:30pm</p>
            </div>
            <div>
              <p className="font-semibold text-white/90 mb-1">Mandarin</p>
              <p className="text-white/60 leading-relaxed">
                6100 Greenland Rd, Suite 901<br />
                Jacksonville, FL 32258
              </p>
              <p className="text-white/60 mt-1">(904) 372-4070</p>
              <p className="text-white/60">Fax: (904) 372-4075</p>
              <p className="text-white/60">info@coastaltherapy.net</p>
              <p className="text-white/50 text-xs mt-1">Mon–Fri 8:30am–5:30pm</p>
            </div>
          </div>
        </div>

        {/* Column 4: Stay Connected — Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stay Connected</h4>
          <p className="text-white/60 text-sm mb-4 leading-relaxed">
            Get therapy tips, milestone guides, and updates from our team — delivered to your inbox.
          </p>
          {subStatus === "sent" ? (
            <p className="text-[#FAFCAA] text-sm font-semibold">Thanks! You&apos;re subscribed. ✓</p>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#FAFCAA] transition"
              />
              <button
                type="submit"
                className="w-full bg-[#FAFCAA] text-[#1e3a4a] font-bold py-2.5 rounded-lg text-sm hover:bg-[#E8EA90] transition"
              >
                Subscribe
              </button>
              {subStatus === "error" && (
                <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>&copy; 2026 Coastal Pediatric Therapy Center. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition">Terms of Service</Link>
            <Link href="/privacy-policy#hipaa" className="hover:text-white/70 transition">HIPAA Notice</Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Coastal Pediatric Therapy Center",
            "telephone": "(904) 372-4070",
            "faxNumber": "(904) 372-4075",
            "email": "info@coastaltherapy.net",
            "url": "https://coastaltherapy.net",
            "foundingDate": "1996",
            "sameAs": ["https://www.instagram.com/coastalpediatrictherapy/"],
            "medicalSpecialty": [
              "Speech-Language Pathology",
              "Occupational Therapy",
              "Physical Therapy"
            ],
            "location": [
              {
                "@type": "Place",
                "name": "Jacksonville Beach",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2730 Isabella Blvd, Suite 10",
                  "addressLocality": "Jacksonville Beach",
                  "addressRegion": "FL",
                  "postalCode": "32250",
                  "addressCountry": "US"
                }
              },
              {
                "@type": "Place",
                "name": "Mandarin",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "6100 Greenland Rd, Suite 901",
                  "addressLocality": "Jacksonville",
                  "addressRegion": "FL",
                  "postalCode": "32258",
                  "addressCountry": "US"
                }
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "17:30"
              }
            ],
            "areaServed": "Northeast Florida"
          })
        }}
      />
    </footer>
  );
}
