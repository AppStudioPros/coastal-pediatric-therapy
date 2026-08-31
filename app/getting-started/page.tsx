import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, CheckCircle, Phone, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Getting Started | Coastal Pediatric Therapy Center Jacksonville FL",
  description: "Starting therapy at Coastal Pediatric Therapy Center is simple. Fill out a new patient form and we handle the rest — insurance verification, prescription requests, and scheduling.",
};

const steps = [
  { icon: ClipboardList, title: "Submit a New Patient Request", desc: "Fill out our new patient request form below. Once received, our friendly staff will email you a new patient packet." },
  { icon: CheckCircle, title: "Complete the Patient Packet", desc: "The packet is user-friendly and can be completed electronically through our secure, HIPAA-compliant patient portal — at your convenience, from home." },
  { icon: Phone, title: "We Handle the Rest", desc: "Our team contacts your child's pediatrician for a prescription and verifies your insurance benefits — before your first visit. We explain your coverage clearly so there are no surprises." },
  { icon: Calendar, title: "Schedule Your First Visit", desc: "A therapy coordinator reaches out with available appointment times. We offer morning through evening slots, Monday through Friday, 8:00 AM to 6:30 PM." },
];

export default function GettingStartedPage() {
  return (
    <>
      <section className="bg-[#e8f4f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
          <p className="text-lg text-gray-600">Starting therapy is easier than you think. We take care of the details so you can focus on your child.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#1e7faa] text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} className="text-[#1e7faa]" />
                    <h3 className="font-bold text-gray-900">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect at the First Visit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Your child&apos;s first visit includes a formal evaluation to determine their current needs and develop an effective treatment plan with appropriate goals. The evaluation takes 30 minutes to an hour and includes standardized testing and a parent interview.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Parents are welcome to accompany their child during the evaluation — though many children actually test better on their own. The evaluation report, including goals and recommendations, will be shared with you and your child&apos;s pediatrician.</p>
          <h3 className="font-bold text-gray-900 mt-6 mb-2">Available Settings</h3>
          <ul className="space-y-2 mb-8">
            {["Clinic (Jacksonville Beach & Mandarin)", "Telehealth", "Private Schools"].map((s) => (
              <li key={s} className="flex items-center gap-2 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-[#1e7faa] shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <div className="bg-[#e8f4f9] rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-900 mb-3">Ready to request an appointment?</h3>
            <p className="text-gray-600 text-sm mb-4">Call us or email us directly and we will walk you through the process.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:9043724070" className="bg-[#1e7faa] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#155f82] transition">
                Call (904) 372-4070
              </a>
              <a href="mailto:info@coastaltherapy.net" className="border border-[#1e7faa] text-[#1e7faa] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8f4f9] transition">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
