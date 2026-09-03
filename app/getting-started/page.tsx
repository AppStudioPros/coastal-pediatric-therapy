"use client";
import { useState } from "react";
import { MapPin, Monitor, School, ArrowRight } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

export const dynamic = "force-static";

const tabs = [
  { id: "process", label: "New Patient Process" },
  { id: "expect", label: "What to Expect" },
  { id: "scheduling", label: "Scheduling & Hours" },
];

const steps = [
  {
    number: "01",
    title: "Submit a New Patient Request",
    desc: "Fill out our new patient request form or call our office at (904) 372-4070. Once received, our friendly staff will email you a new patient packet to complete before your first visit.",
  },
  {
    number: "02",
    title: "Complete the Patient Packet",
    desc: "The packet is user-friendly and can be completed electronically through our secure, HIPAA-compliant patient portal — at your convenience, from home. It covers medical history, developmental milestones, and insurance information.",
  },
  {
    number: "03",
    title: "We Handle the Insurance",
    desc: "Our team contacts your child's pediatrician for a prescription (if required) and verifies your insurance benefits before your first visit. We clearly explain your coverage so there are no surprises at the front desk.",
  },
  {
    number: "04",
    title: "Schedule Your First Visit",
    desc: "A therapy coordinator will reach out with available appointment times that work for your family. We offer morning through after-school slots, Monday through Friday, across both of our locations.",
  },
  {
    number: "05",
    title: "Begin Your Child's Therapy Journey",
    desc: "Your child's first visit is an evaluation to understand their current needs and establish meaningful goals. After that, your therapist will outline a personalized treatment plan and begin regular sessions.",
  },
];

const settings = [
  {
    icon: MapPin,
    title: "In-Clinic",
    desc: "One-on-one therapy sessions at our Jacksonville Beach or Mandarin locations, in fully equipped therapy suites designed to engage and motivate children.",
  },
  {
    icon: Monitor,
    title: "Telehealth",
    desc: "Virtual therapy sessions available for many of our services — convenient for families balancing busy schedules or located further from our clinics.",
  },
  {
    icon: School,
    title: "Private Schools",
    desc: "We partner with select private schools in the Jacksonville area to provide on-site therapy services, reducing disruption to your child's school day.",
  },
];

export default function GettingStartedPage() {
  const [active, setActive] = useState(0);
  const { openModal } = useBooking();

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#eaf7f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1e3a4a] mb-4">Getting Started</h1>
          <p className="text-lg text-[#4a7a8a]">
            Starting therapy is easier than you think. We handle the details so you can focus on your child.
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

      {/* Tab 0: New Patient Process */}
      {active === 0 && (
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a4a] text-center mb-10 gold-underline">How It Works</h2>
            <div className="space-y-6 mt-10">
              {steps.map(({ number, title, desc }) => (
                <div key={title} className="relative flex gap-6 items-start bg-white border border-[#cce8ef] rounded-2xl p-6 overflow-hidden">
                  {/* Decorative large number */}
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-7xl font-black text-[#cce8ef] select-none pointer-events-none leading-none">
                    {number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-bold text-[#1e3a4a] mb-2">{title}</h3>
                    <p className="text-[#4a7a8a] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={openModal}
                className="bg-[#2fb8c6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2aa8b8] transition inline-flex items-center gap-2"
              >
                Request an Appointment <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Tab 1: What to Expect */}
      {active === 1 && (
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a4a] mb-6">What to Expect at the Evaluation</h2>
            <p className="text-[#4a7a8a] leading-relaxed mb-4">
              Your child&apos;s first visit is a formal evaluation designed to understand their current level of function and establish effective, measurable therapy goals. The evaluation typically takes between 30 minutes and one hour, depending on the discipline and your child&apos;s needs.
            </p>
            <p className="text-[#4a7a8a] leading-relaxed mb-4">
              The evaluation includes standardized testing, clinical observation, and a detailed parent interview. We want to hear from you — you know your child best, and your observations are a critical part of the assessment process.
            </p>
            <p className="text-[#4a7a8a] leading-relaxed mb-4">
              Parents are welcome to accompany their child during the evaluation, though many children actually perform better with their parent waiting nearby rather than in the room. Our therapists are experienced in making children feel comfortable and at ease from the very first visit.
            </p>
            <p className="text-[#4a7a8a] leading-relaxed mb-6">
              Following the evaluation, a written report will be prepared with your child&apos;s scores, clinical impressions, and recommended therapy goals. This report will be shared with you and, with your permission, your child&apos;s pediatrician or school team.
            </p>

            <div className="bg-[#eaf7f9] border border-[#cce8ef] rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-[#1e3a4a] mb-4">What the Evaluation Includes</h3>
              <ul className="space-y-2">
                {[
                  "Standardized, age-normed testing",
                  "Clinical observation of skills and behaviors",
                  "Detailed parent interview and history",
                  "Review of medical and developmental records",
                  "Written report with scores and recommendations",
                  "Individualized therapy goal development",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4a7a8a]">
                    <span className="text-[#e8b830] shrink-0 mt-0.5">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={openModal}
              className="bg-[#2fb8c6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2aa8b8] transition inline-flex items-center gap-2"
            >
              Schedule an Evaluation <ArrowRight size={18} />
            </button>
          </div>
        </section>
      )}

      {/* Tab 2: Scheduling & Hours */}
      {active === 2 && (
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a4a] mb-8">Scheduling & Hours</h2>

            {/* Hours */}
            <div className="bg-[#eaf7f9] border border-[#cce8ef] rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-[#1e3a4a] text-lg mb-4">Office Hours</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#4a7a8a]">
                <div className="flex justify-between border-b border-[#cce8ef] pb-2">
                  <span className="font-medium text-[#1e3a4a]">Monday – Friday</span>
                  <span>8:30 AM – 5:30 PM</span>
                </div>
              </div>
              <p className="text-xs text-[#4a7a8a] mt-3">
                * Hours may vary by location or therapist. Contact us to confirm availability.
              </p>
            </div>

            {/* Settings */}
            <h3 className="font-bold text-[#1e3a4a] text-lg mb-4">Available Therapy Settings</h3>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {settings.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-[#cce8ef] rounded-2xl p-5">
                  <Icon size={20} className="text-[#2fb8c6] mb-3" />
                  <h4 className="font-bold text-[#1e3a4a] mb-2">{title}</h4>
                  <p className="text-sm text-[#4a7a8a] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Locations */}
            <h3 className="font-bold text-[#1e3a4a] text-lg mb-4">Our Locations</h3>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <div className="bg-[#eaf7f9] border border-[#cce8ef] rounded-2xl p-5">
                <h4 className="font-bold text-[#1e3a4a] mb-2">Jacksonville Beach</h4>
                <p className="text-sm text-[#4a7a8a]">2730 Isabella Blvd, Suite 10<br />Jacksonville Beach, FL 32250</p>
                <a
                  href="https://maps.google.com/?q=2730+Isabella+Blvd+Suite+10+Jacksonville+Beach+FL+32250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-[#2fb8c6] font-semibold hover:underline"
                >
                  Get Directions <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-[#eaf7f9] border border-[#cce8ef] rounded-2xl p-5">
                <h4 className="font-bold text-[#1e3a4a] mb-2">Mandarin</h4>
                <p className="text-sm text-[#4a7a8a]">6100 Greenland Rd, Suite 901<br />Jacksonville, FL 32258</p>
                <a
                  href="https://maps.google.com/?q=6100+Greenland+Rd+Suite+901+Jacksonville+FL+32258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-[#2fb8c6] font-semibold hover:underline"
                >
                  Get Directions <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <button
              onClick={openModal}
              className="bg-[#2fb8c6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2aa8b8] transition inline-flex items-center gap-2"
            >
              Book an Appointment <ArrowRight size={18} />
            </button>
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
            "url": "https://coastaltherapy.net/getting-started",
            "description": "Learn how to get started with pediatric therapy at Coastal Pediatric Therapy Center. Simple process, insurance handled, Jacksonville Beach and Mandarin locations.",
            "telephone": "(904) 372-4070",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "17:30"
              }
            ]
          })
        }}
      />
    </>
  );
}
