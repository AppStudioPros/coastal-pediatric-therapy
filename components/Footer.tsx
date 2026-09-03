import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

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
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo + tagline + Instagram */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Coastal Pediatric<br />Therapy Center</h3>
          <p className="text-sm leading-relaxed mb-4">
            Play-based Speech, Occupational, and Physical Therapy for children in Northeast Florida since 1996.
          </p>
          <a
            href="https://www.instagram.com/coastalpediatrictherapy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-pink-400 hover:text-pink-300 transition font-medium"
          >
            <ExternalLink size={16} />
            @coastalpediatrictherapy
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm grid grid-cols-2 gap-x-4">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="shrink-0" />
              <a href="tel:9043724070" className="hover:text-white">(904) 372-4070</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0" />
              <a href="mailto:info@coastaltherapy.net" className="hover:text-white">info@coastaltherapy.net</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-gray-200">Jacksonville Beach</p>
                <p className="text-gray-400">2730 Isabella Blvd, Suite 10<br />Jacksonville Beach, FL 32250</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-gray-200">Mandarin</p>
                <p className="text-gray-400">6100 Greenland Rd, Suite 901<br />Jacksonville, FL 32258</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={15} className="mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400">Mon–Thu: 9:00am – 5:30pm</p>
                <p className="text-gray-400">Fri: 9:00am – 5:00pm</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>&copy; 2026 Coastal Pediatric Therapy Center. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition">Terms of Service</Link>
            <Link href="/privacy-policy#hipaa" className="hover:text-gray-300 transition">HIPAA Notice</Link>
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
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:00",
                "closes": "17:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "areaServed": "Northeast Florida"
          })
        }}
      />
    </footer>
  );
}
