import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Jacksonville Beach Pediatric Therapy | Coastal Pediatric Therapy Center",
  description: "Coastal Pediatric Therapy Center's Jacksonville Beach location offers Speech, Occupational, and Physical Therapy for children at 2730 Isabella Blvd, Suite 10. Serving Jacksonville Beach, Neptune Beach, Atlantic Beach, and Ponte Vedra.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Coastal Pediatric Therapy Center — Jacksonville Beach",
  url: "https://coastaltherapy.net/locations/jacksonville-beach",
  telephone: "(904) 372-4070",
  description: "Multidisciplinary pediatric therapy clinic in Jacksonville Beach, FL offering Speech & Language Therapy, Occupational Therapy, and Physical Therapy for children since 1996.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2730 Isabella Blvd, Suite 10",
    addressLocality: "Jacksonville Beach",
    addressRegion: "FL",
    postalCode: "32250",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.2897, longitude: -81.3973 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:30" },
  ],
  areaServed: ["Jacksonville Beach, FL", "Neptune Beach, FL", "Atlantic Beach, FL", "Ponte Vedra Beach, FL", "Jacksonville, FL"],
  medicalSpecialty: ["Speech-Language Pathology", "Occupational Therapy", "Physical Therapy"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Coastal Pediatric Therapy Center's Jacksonville Beach location?",
      acceptedAnswer: { "@type": "Answer", text: "Our Jacksonville Beach clinic is at 2730 Isabella Blvd, Suite 10, Jacksonville Beach, FL 32250. We serve Jacksonville Beach, Neptune Beach, Atlantic Beach, Ponte Vedra, and surrounding areas." },
    },
    {
      "@type": "Question",
      name: "What therapy services are available at the Jacksonville Beach location?",
      acceptedAnswer: { "@type": "Answer", text: "Speech & Language Therapy, Occupational Therapy, and Physical Therapy are all available at our Jacksonville Beach location. We also offer telehealth and private school services." },
    },
    {
      "@type": "Question",
      name: "What are the hours at the Jacksonville Beach clinic?",
      acceptedAnswer: { "@type": "Answer", text: "The Jacksonville Beach clinic is open Monday through Friday. Office hours are 8:30 AM to 5:30 PM. Therapy appointments are available from 8:00 AM to 6:30 PM." },
    },
    {
      "@type": "Question",
      name: "Is Coastal Pediatric Therapy the best pediatric therapy center in Jacksonville Beach?",
      acceptedAnswer: { "@type": "Answer", text: "Coastal Pediatric Therapy Center has served Jacksonville Beach families since 1996. With 30 years of experience, a multidisciplinary therapy team, and a play-based approach, we are one of the most trusted pediatric therapy providers in the Jacksonville Beach area." },
    },
    {
      "@type": "Question",
      name: "How do I get started at the Jacksonville Beach location?",
      acceptedAnswer: { "@type": "Answer", text: "Fill out the New Patient Request Form at coastaltherapy.net/new-patient-request-form. Our team will verify your insurance, request any needed referrals, and contact you to schedule an evaluation at our Jacksonville Beach clinic." },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://coastaltherapy.net" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://coastaltherapy.net/locations" },
    { "@type": "ListItem", position: 3, name: "Jacksonville Beach", item: "https://coastaltherapy.net/locations/jacksonville-beach" },
  ],
};

export default function JaxBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="bg-[#EAF6FB] py-14 px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#3d82b8] uppercase tracking-widest mb-3">Jacksonville Beach Location</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a4a] mb-5 leading-tight">
              Pediatric Therapy in Jacksonville Beach, FL
            </h1>
            <p className="text-lg text-[#4a7a8a] mb-8 max-w-2xl mx-auto">
              Speech, Occupational, and Physical Therapy for children — play-based, one-on-one, and tailored to your child. Serving Jacksonville Beach families since 1996.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/new-patient-request-form" className="bg-[#FFEB70] text-[#1e3a4a] font-bold px-7 py-3 rounded-full hover:bg-yellow-300 transition cta-pulse">
                Request an Appointment
              </Link>
              <a href="tel:9043724070" className="border-2 border-[#3d82b8] text-[#3d82b8] font-semibold px-7 py-3 rounded-full hover:bg-[#3d82b8] hover:text-white transition">
                (904) 372-4070
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Location Details */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[#1e3a4a] mb-5">Find Us</h2>
            <div className="bg-[#EAF6FB] rounded-2xl p-6 mb-5">
              <p className="font-bold text-[#1e3a4a] mb-1">Address</p>
              <p className="text-[#4a7a8a]">2730 Isabella Blvd, Suite 10<br />Jacksonville Beach, FL 32250</p>
            </div>
            <div className="bg-[#EAF6FB] rounded-2xl p-6 mb-5">
              <p className="font-bold text-[#1e3a4a] mb-1">Phone</p>
              <a href="tel:9043724070" className="text-[#3d82b8] font-semibold">(904) 372-4070</a>
              <p className="text-[#4a7a8a] text-sm mt-1">Fax: (904) 372-4075</p>
            </div>
            <div className="bg-[#EAF6FB] rounded-2xl p-6">
              <p className="font-bold text-[#1e3a4a] mb-2">Hours</p>
              <p className="text-[#4a7a8a] text-sm">Office: Monday–Friday, 8:30 AM – 5:30 PM</p>
              <p className="text-[#4a7a8a] text-sm">Appointments: Monday–Friday, 8:00 AM – 6:30 PM</p>
            </div>
            <a href="https://maps.google.com/?q=2730+Isabella+Blvd+Suite+10+Jacksonville+Beach+FL+32250" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-[#3d82b8] font-semibold underline underline-offset-4">
              Get Directions →
            </a>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[#1e3a4a] mb-5">Services at This Location</h2>
            {[
              { title: "Speech & Language Therapy", desc: "Articulation, language delays, apraxia, stuttering, AAC, and feeding therapy for children of all ages." },
              { title: "Occupational Therapy", desc: "Fine motor skills, sensory processing, handwriting, self-care, and school readiness." },
              { title: "Physical Therapy", desc: "Gross motor delays, torticollis, balance, coordination, and developmental milestone support." },
              { title: "Telehealth", desc: "Virtual therapy sessions available for families who prefer remote appointments." },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-[#cce8ef] rounded-xl p-4 mb-3">
                <p className="font-bold text-[#1e3a4a] mb-1">{title}</p>
                <p className="text-[#4a7a8a] text-sm">{desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-12 px-4 bg-[#f8fdfe]">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1e3a4a] mb-4">Serving Jacksonville Beach and Surrounding Communities</h2>
            <p className="text-[#4a7a8a] mb-6">Families travel to our Jacksonville Beach clinic from across the Beaches area and Northeast Florida.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Jacksonville Beach", "Neptune Beach", "Atlantic Beach", "Ponte Vedra Beach", "Palm Valley", "Nocatee", "St. Augustine"].map(area => (
                <span key={area} className="bg-[#EAF6FB] text-[#3d82b8] font-semibold px-4 py-2 rounded-full text-sm">{area}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a4a] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="border border-[#cce8ef] rounded-xl p-5">
                  <p className="font-bold text-[#1e3a4a] mb-2">{faq.name}</p>
                  <p className="text-[#4a7a8a] text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Other Location */}
      <section className="py-10 px-4 bg-[#EAF6FB]">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#4a7a8a] mb-2">Also serving the Southside and Mandarin area</p>
            <Link href="/locations/mandarin" className="text-[#3d82b8] font-semibold underline underline-offset-4">
              View our Mandarin location →
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </>
  );
}
