"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

const tabs = [
  { id: "story", label: "Our Story" },
  { id: "team", label: "Meet the Team" },
  { id: "locations", label: "Our Locations" },
];

const teamMembers = [
  { initials: "SL", role: "Speech-Language Pathologist" },
  { initials: "OT", role: "Occupational Therapist" },
  { initials: "PT", role: "Physical Therapist" },
  { initials: "SL", role: "Speech-Language Pathologist" },
  { initials: "OT", role: "Occupational Therapist" },
  { initials: "CD", role: "Clinic Director" },
];

const stats = [
  { stat: "Since 1996", label: "Serving Northeast Florida" },
  { stat: "2 Locations", label: "Jacksonville Beach & Mandarin" },
  { stat: "Play-Based", label: "Therapy Approach" },
];

export default function AboutPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="bg-[#eaf7f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1e3a4a] mb-4">About Coastal Pediatric Therapy Center</h1>
          <p className="text-lg text-[#4a7a8a]">
            Serving Northeast Florida families since 1996 with compassionate, evidence-based pediatric therapy.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-[#cce8ef] sticky top-[64px] z-40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex py-2 overflow-x-auto">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`px-5 py-3 text-sm font-semibold transition whitespace-nowrap border-b-2 ${
                  active === i
                    ? "border-[#2fb8c6] text-[#2fb8c6]"
                    : "border-transparent text-[#4a7a8a] hover:text-[#2fb8c6]"
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
            <h2 className="text-3xl font-bold text-[#1e3a4a] mb-6 gold-underline">Our Story</h2>
            <div className="mt-4 space-y-4 text-[#4a7a8a] leading-relaxed">
              <p>
                Coastal Pediatric Therapy Center was founded in 1996 with a simple belief: every child deserves to reach their full potential. What began as a small, dedicated practice in Jacksonville Beach has grown into a trusted regional resource for families across Northeast Florida.
              </p>
              <p>
                Over nearly three decades, we&apos;ve helped thousands of children develop the communication, motor, and daily living skills they need to thrive at home, at school, and in life. Our approach has always been play-based — we believe children learn best when therapy feels like fun.
              </p>
              <p>
                We are a multidisciplinary team of speech-language pathologists, occupational therapists, and physical therapists who collaborate to provide whole-child care. Rather than treating symptoms in isolation, we look at each child as a whole person and work together to develop coordinated treatment plans that address their unique strengths and challenges.
              </p>
              <p>
                Family involvement is at the heart of everything we do. We partner with parents, caregivers, teachers, and pediatricians to ensure progress extends far beyond the therapy room. When families are engaged and informed, children succeed faster and maintain their gains longer.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {stats.map(({ stat, label }) => (
                <div key={stat} className="bg-[#eaf7f9] border border-[#cce8ef] rounded-2xl p-5 text-center">
                  <p className="font-bold text-[#1e3a4a] text-lg mb-1">{stat}</p>
                  <p className="text-sm text-[#4a7a8a]">{label}</p>
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
            <h2 className="text-3xl font-bold text-[#1e3a4a] mb-3 gold-underline">Meet the Team</h2>
            <p className="text-[#4a7a8a] mt-4 mb-10">
              Our compassionate, highly skilled therapists are dedicated to helping every child succeed.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="bg-white border border-[#cce8ef] rounded-2xl p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-xl">{member.initials}</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full w-3/4 mx-auto mb-2 animate-pulse" />
                  <p className="text-sm text-[#4a7a8a]">{member.role}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[#4a7a8a] text-sm mt-8">
              Full team bios coming soon. Contact us at{" "}
              <a href="mailto:info@coastaltherapy.net" className="text-[#2fb8c6] hover:underline">
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
            <h2 className="text-3xl font-bold text-[#1e3a4a] mb-3 gold-underline">Our Locations</h2>
            <p className="text-[#4a7a8a] mt-4 mb-10">
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
                <div key={loc.name} className="bg-[#eaf7f9] border border-[#cce8ef] rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-[#1e3a4a] mb-3">{loc.name}</h3>
                  <p className="text-[#4a7a8a] text-sm mb-1">{loc.address}</p>
                  <p className="text-[#4a7a8a] text-sm mb-4">{loc.city}</p>
                  <div className="text-sm text-[#4a7a8a] mb-5">
                    <p>(904) 372-4070</p>
                    <p>Fax: (904) 372-4075</p>
                    <p className="mt-1"><span className="font-medium text-[#1e3a4a]">Mon–Fri:</span> 8:30 AM – 5:30 PM</p>
                  </div>
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2fb8c6] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2aa8b8] transition"
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
