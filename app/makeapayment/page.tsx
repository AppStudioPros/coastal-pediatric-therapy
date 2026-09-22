"use client";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredGrid from "@/components/StaggeredGrid";
import { CreditCard, Phone, Mail as MailIcon } from "lucide-react";

export const dynamic = "force-static";

const otherOptions = [
  {
    icon: Phone,
    title: "Pay by Phone",
    desc: "Call our office at (904) 372-4070 during business hours (Mon–Fri 8:30am–5:30pm) to pay by credit or debit card.",
  },
  {
    icon: MailIcon,
    title: "Pay by Mail",
    desc: 'Mail a check payable to "Coastal Pediatric Therapy Center" to: 2730 Isabella Blvd, Suite 10, Jacksonville Beach, FL 32250.',
  },
];

export default function MakeAPaymentPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center text-white"
        style={{ backgroundColor: "#1e3a4a" }}
      >
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Payment</h1>
            <p className="text-white/80 text-lg">
              Securely pay your balance online through our patient payment portal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portal Card */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <AnimatedSection>
            <div className="bg-white border border-[#B8E4F0] rounded-2xl p-10 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <CreditCard size={40} className="text-[#24B5D0]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Online Payment Portal</h2>
              <p className="text-[#4a7a8a] mb-8">
                Click below to access our secure patient payment portal. You will need your account number from your statement.
              </p>
              <button
                disabled
                className="cta-pulse-y1 bg-[#FFD940] text-[#1e3a4a] font-bold px-10 py-4 rounded-xl text-lg cursor-not-allowed opacity-75 w-full"
              >
                Go to Payment Portal
              </button>
              <p className="text-xs text-[#4a7a8a] mt-4">
                Payment portal link coming soon. For billing questions, call (904) 372-4070.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other Options */}
      <section className="py-16 px-4 bg-[#EAF6FB]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-[#1e3a4a] mb-8 text-center">Other Payment Options</h3>
          </AnimatedSection>
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.title}
                  className="card-hover bg-white border border-[#B8E4F0] rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6FB] flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#24B5D0]" />
                  </div>
                  <h4 className="font-bold text-[#1e3a4a] text-lg mb-2">{opt.title}</h4>
                  <p className="text-sm text-[#4a7a8a] leading-relaxed">{opt.desc}</p>
                </div>
              );
            })}
          </StaggeredGrid>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Coastal Pediatric Therapy Center",
            "url": "https://coastaltherapy.net/make-a-payment",
            "telephone": "(904) 372-4070",
            "description":
              "Pay your balance at Coastal Pediatric Therapy Center online, by phone, or by mail.",
          }),
        }}
      />

      <CTASection />
    </>
  );
}
