import type { Metadata } from "next";
import { Heart, Users, Star, Briefcase, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Coastal Pediatric Therapy Center",
  description: "Join the Coastal Pediatric Therapy Center team in Jacksonville, FL. We're always looking for compassionate, skilled Speech-Language Pathologists, Occupational Therapists, and Physical Therapists.",
};

const values = [
  {
    icon: Heart,
    title: "Child-Centered Care",
    desc: "Every decision we make starts with the child. We create an environment where kids feel safe, seen, and motivated.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    desc: "Our SLPs, OTs, and PTs work together — sharing knowledge, consulting on complex cases, and celebrating wins as a team.",
  },
  {
    icon: Star,
    title: "Clinical Excellence",
    desc: "We invest in our therapists through continuing education, mentorship, and access to evidence-based resources.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#eaf7f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1e3a4a] mb-4">Join Our Team</h1>
          <p className="text-lg text-[#4a7a8a]">
            We&apos;re always looking for passionate, skilled therapists who want to make a lasting difference in children&apos;s lives.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a4a] mb-4">Why Work at Coastal?</h2>
          <p className="text-[#4a7a8a] leading-relaxed mb-8">
            Since 1996, Coastal Pediatric Therapy Center has built a reputation not just for clinical excellence, but for a workplace culture where therapists thrive. We&apos;re a small, close-knit team that genuinely supports each other — and we believe happy therapists create better outcomes for the children and families we serve.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#cce8ef] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#eaf7f9] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#2fb8c6]" />
                </div>
                <h3 className="font-bold text-[#1e3a4a] mb-2">{title}</h3>
                <p className="text-[#4a7a8a] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Open positions */}
          <div className="bg-[#eaf7f9] border border-[#cce8ef] rounded-2xl p-8 text-center">
            <Briefcase size={36} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1e3a4a] mb-2">No Open Positions Right Now</h3>
            <p className="text-[#4a7a8a] text-sm max-w-md mx-auto mb-6">
              We don&apos;t have any open roles at this time, but we&apos;re always happy to hear from talented therapists. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:info@coastaltherapy.net?subject=Career%20Inquiry%20—%20Coastal%20Pediatric%20Therapy"
              className="inline-flex items-center gap-2 bg-[#2fb8c6] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2aa8b8] transition"
            >
              <Mail size={16} />
              Send Your Resume
            </a>
            <p className="text-xs text-gray-400 mt-3">info@coastaltherapy.net</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "hiringOrganization": {
              "@type": "MedicalBusiness",
              "name": "Coastal Pediatric Therapy Center",
              "url": "https://coastaltherapy.net",
              "telephone": "(904) 372-4070"
            },
            "description": "Coastal Pediatric Therapy Center is a pediatric therapy practice in Jacksonville, FL hiring Speech-Language Pathologists, Occupational Therapists, and Physical Therapists.",
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jacksonville",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            }
          })
        }}
      />
    </>
  );
}
