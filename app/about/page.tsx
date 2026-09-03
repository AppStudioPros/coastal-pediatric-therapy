"use client";
import { useState } from "react";
import { MapPin, ArrowRight, Users, Heart, Star } from "lucide-react";

export const dynamic = "force-static";

const tabs = [
  { id: "story", label: "Our Story" },
  { id: "team", label: "Meet the Team" },
  { id: "locations", label: "Our Locations" },
];

const teamSkeletons = [
  { name: "Coming Soon", role: "Speech-Language Pathologist" },
  { name: "Coming Soon", role: "Occupational Therapist" },
  { name: "Coming Soon", role: "Physical Therapist" },
  { name: "Coming Soon", role: "Speech-Language Pathologist" },
  { name: "Coming Soon", role: "Occupational Therapist" },
  { name: "Coming Soon", role: "Clinic Director" },
];

export default function AboutPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="bg-[#e8f4f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Coastal Pediatric Therapy Center</h1>
          <p className="text-lg text-gray-600">
            Serving Northeast Florida families since 1996 with compassionate, evidence-based pediatric therapy.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-[64px] z-40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
                  active === i ? "bg-[#1e7faa] text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      {active === 0 && (
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#e8f4f9] flex items-center justify-center">
                <Heart size={24} className="text-[#1e7faa]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Coastal Pediatric Therapy Center was founded in 1996 with a simple belief: every child deserves to reach their full potential. What began as a small, dedicated practice in Jacksonville Beach has grown into a trusted regional resource for families across Northeast Florida.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over nearly three decades, we&apos;ve helped thousands of children develop the communication, motor, and daily living skills they need to thrive at home, at school, and in life. Our approach has always been play-based — we believe children learn best when therapy feels like fun.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a multidisciplinary team of speech-language pathologists, occupational therapists, and physical therapists who collaborate to provide whole-child care. Rather than treating symptoms in isolation, we look at each child as a whole person and work together to develop coordinated treatment plans that address their unique strengths and challenges.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Family involvement is at the heart of everything we do. We partner with parents, caregivers, teachers, and pediatricians to ensure progress extends far beyond the therapy room. When families are engaged and informed, children succeed faster and maintain their gains longer.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mt-8">
              {[
                { icon: Star, stat: "Since 1996", label: "Serving Northeast Florida" },
                { icon: Users, stat: "2 Locations", label: "Jacksonville Beach & Mandarin" },
                { icon: Heart, stat: "Play-Based", label: "Therapy Approach" },
              ].map(({ icon: Icon, stat, label }) => (
                <div key={stat} className="bg-[#e8f4f9] rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-[#1e7faa]" />
                  </div>
                  <p className="font-bold text-gray-900 text-lg">{stat}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Meet the Team */}
      {active === 1 && (
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Meet the Team</h2>
            <p className="text-gray-500 mb-10">
              Our compassionate, highly skilled therapists are dedicated to helping every child succeed.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamSkeletons.map((member, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#e8f4f9] mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} className="text-[#1e7faa]" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto mb-2 animate-pulse" />
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              Full team bios coming soon. Contact us at{" "}
              <a href="mailto:info@coastaltherapy.net" className="text-[#1e7faa] hover:underline">
                info@coastaltherapy.net
              </a>{" "}
              to learn about our staff.
            </p>
          </div>
        </section>
      )}

      {/* Our Locations */}
      {active === 2 && (
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Locations</h2>
            <p className="text-gray-500 mb-10">
              Two convenient locations serving Jacksonville Beach, Mandarin, and surrounding communities.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Jacksonville Beach",
                  address: "2730 Isabella Blvd, Suite 10",
                  city: "Jacksonville Beach, FL 32250",
                  mapLink: "https://maps.google.com/?q=2730+Isabella+Blvd+Suite+10+Jacksonville+Beach+FL+32250",
                },
                {
                  name: "Mandarin",
                  address: "6100 Greenland Rd, Suite 901",
                  city: "Jacksonville, FL 32258",
                  mapLink: "https://maps.google.com/?q=6100+Greenland+Rd+Suite+901+Jacksonville+FL+32258",
                },
              ].map((loc) => (
                <div key={loc.name} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#e8f4f9] flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[#1e7faa]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{loc.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{loc.address}</p>
                  <p className="text-gray-600 text-sm mb-4">{loc.city}</p>
                  <div className="text-sm text-gray-500 mb-5">
                    <p><span className="font-medium">Mon–Thu:</span> 9:00 AM – 5:30 PM</p>
                    <p><span className="font-medium">Fri:</span> 9:00 AM – 5:00 PM</p>
                  </div>
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1e7faa] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#155f82] transition"
                  >
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Coastal Pediatric Therapy Center",
            "url": "https://coastaltherapy.net/about",
            "foundingDate": "1996",
            "description": "Coastal Pediatric Therapy Center has served Northeast Florida families since 1996 with play-based, multidisciplinary pediatric therapy.",
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
            ]
          })
        }}
      />
    </>
  );
}
