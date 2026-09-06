"use client";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredGrid from "@/components/StaggeredGrid";
import { ClipboardList, Handshake, MapPin, Phone, Mail, Clock, Printer } from "lucide-react";

export const dynamic = "force-static";

const whyReferCards = [
  {
    icon: ClipboardList,
    title: "Comprehensive Evaluation",
    desc: "We provide thorough initial evaluations and share findings with your office within 5 business days.",
  },
  {
    icon: Handshake,
    title: "Collaborative Care",
    desc: "We work alongside your practice to coordinate treatment goals, progress updates, and discharge planning.",
  },
  {
    icon: MapPin,
    title: "Convenient Locations",
    desc: "Two locations in Jacksonville Beach and Mandarin, plus telehealth options for your patients.",
  },
];

const referralSteps = [
  {
    num: "01",
    title: "Send a Referral",
    desc: "Fax your referral to (904) 372-4075 or call us at (904) 372-4070. Include the child's name, date of birth, diagnosis/reason for referral, and your contact information.",
  },
  {
    num: "02",
    title: "We Verify Insurance",
    desc: "Our team contacts the family and verifies their insurance benefits before scheduling. We accept most major insurance plans.",
  },
  {
    num: "03",
    title: "Evaluation Scheduled",
    desc: "The family is contacted to schedule an initial evaluation. You'll receive a copy of the evaluation report within 5 business days of completion.",
  },
  {
    num: "04",
    title: "Ongoing Updates",
    desc: "With parental consent, we provide progress updates and collaborate on treatment planning throughout the course of care.",
  },
];

const treatmentAreas = [
  "Speech & Language Disorders",
  "Articulation & Phonological Disorders",
  "Language Delays & Disorders",
  "Fluency (Stuttering)",
  "Augmentative & Alternative Communication (AAC)",
  "Feeding & Swallowing Difficulties",
  "Sensory Processing Disorder",
  "Fine & Gross Motor Delays",
  "Developmental Coordination Disorder",
  "Autism Spectrum Disorder",
  "Attention & Executive Function",
  "Reading & Learning Differences",
];

export default function PhysicianResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center text-white"
        style={{ backgroundColor: "#1e3a4a" }}
      >
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Physician &amp; Provider Resources</h1>
            <p className="text-white/80 text-lg">
              We make the referral process simple for your practice. Our team handles the rest.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1 — Why Refer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1e3a4a] mb-10 text-center gold-underline">
              Why Refer to Coastal Pediatric?
            </h2>
          </AnimatedSection>
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyReferCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="card-hover bg-white border border-[#B8E4F0] rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6FB] flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#24B5D0]" />
                  </div>
                  <h3 className="font-bold text-[#1e3a4a] text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-[#4a7a8a] leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </StaggeredGrid>
        </div>
      </section>

      {/* Section 2 — How to Refer */}
      <section className="py-16 px-4 bg-[#EAF6FB]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1e3a4a] mb-10 text-center gold-underline">
              How to Refer a Patient
            </h2>
          </AnimatedSection>
          <StaggeredGrid className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {referralSteps.map((step) => (
              <div
                key={step.num}
                className="card-hover bg-white border border-[#B8E4F0] rounded-2xl p-6"
              >
                <span className="block font-black text-5xl text-[#B8E4F0] leading-none mb-3">
                  {step.num}
                </span>
                <h3 className="font-bold text-[#1e3a4a] text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[#4a7a8a] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Section 3 — What We Treat */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1e3a4a] mb-8 text-center gold-underline">
              What We Treat
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {treatmentAreas.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#24B5D0] shrink-0" />
                  <span className="text-sm text-[#1e3a4a]">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4 — Contact Referral Team */}
      <section className="py-16 px-4 bg-[#EAF6FB]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1e3a4a] mb-10 text-center gold-underline">
              Contact Our Referral Team
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left — contact info card */}
            <AnimatedSection direction="left">
              <div className="bg-white border border-[#B8E4F0] rounded-2xl p-6">
                <h3 className="font-bold text-[#1e3a4a] text-lg mb-5">Referral Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Printer size={16} className="text-[#24B5D0] shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1e3a4a] text-xs uppercase tracking-wide mb-0.5">Referral Fax</p>
                      <p className="text-[#4a7a8a]">(904) 372-4075</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#24B5D0] shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1e3a4a] text-xs uppercase tracking-wide mb-0.5">Phone</p>
                      <p className="text-[#4a7a8a]">(904) 372-4070</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-[#24B5D0] shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1e3a4a] text-xs uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:info@coastaltherapy.net" className="text-[#24B5D0] hover:underline">
                        info@coastaltherapy.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#24B5D0] shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1e3a4a] text-xs uppercase tracking-wide mb-0.5">Office Hours</p>
                      <p className="text-[#4a7a8a]">Monday–Friday, 8:30am–5:30pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — CTA buttons */}
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-4">
                <a
                  href="fax:9043724075"
                  className="cta-blue-2 w-full text-center bg-[#24B5D0] text-white font-bold px-8 py-5 rounded-xl text-lg hover:bg-[#1A9EC0] transition"
                >
                  Fax a Referral
                  <span className="block text-sm font-normal text-white/80 mt-1">(904) 372-4075</span>
                </a>
                <a
                  href="tel:9043724070"
                  className="w-full text-center border-2 border-[#24B5D0] text-[#24B5D0] font-bold px-8 py-5 rounded-xl text-lg hover:bg-[#EAF6FB] transition"
                >
                  Call Our Office
                  <span className="block text-sm font-normal text-[#4a7a8a] mt-1">(904) 372-4070</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Coastal Pediatric Therapy Center",
            "url": "https://coastaltherapy.net/physician-resources",
            "telephone": "(904) 372-4070",
            "faxNumber": "(904) 372-4075",
            "email": "info@coastaltherapy.net",
            "description":
              "Coastal Pediatric Therapy Center offers comprehensive pediatric speech, occupational, and physical therapy services in Jacksonville Beach and Mandarin, FL. Physician referrals welcome.",
            "medicalSpecialty": [
              "Speech-Language Pathology",
              "Occupational Therapy",
              "Physical Therapy",
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
                  "addressCountry": "US",
                },
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
                  "addressCountry": "US",
                },
              },
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "17:30",
              },
            ],
          }),
        }}
      />

      <CTASection />
    </>
  );
}
