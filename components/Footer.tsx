import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Coastal Pediatric Therapy Center</h3>
          <p className="text-sm leading-relaxed">Play-based Speech, Occupational, and Physical Therapy for children in Northeast Florida since 1996.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["Services", "/services"], ["Getting Started", "/getting-started"], ["Insurance", "/insurance"], ["Locations", "/locations"], ["Testimonials", "/testimonials"], ["Contact", "/contact"]].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={15} /><a href="tel:9043724070" className="hover:text-white">(904) 372-4070</a></li>
            <li className="flex items-center gap-2"><Mail size={15} /><a href="mailto:info@coastaltherapy.net" className="hover:text-white">info@coastaltherapy.net</a></li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /><span>Jacksonville Beach &amp; Mandarin, FL<br />Mon–Fri 8:00 AM – 6:30 PM</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Coastal Pediatric Therapy Center. All rights reserved.
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
            "medicalSpecialty": ["Speech-Language Pathology", "Occupational Therapy", "Physical Therapy"],
            "address": [
              { "@type": "PostalAddress", "addressLocality": "Jacksonville Beach", "addressRegion": "FL", "addressCountry": "US" },
              { "@type": "PostalAddress", "addressLocality": "Mandarin", "addressRegion": "FL", "addressCountry": "US" }
            ],
            "openingHours": "Mo-Fr 08:00-18:30",
            "areaServed": "Northeast Florida"
          })
        }}
      />
    </footer>
  );
}
