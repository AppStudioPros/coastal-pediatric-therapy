import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import InsurancePlans from "@/components/InsurancePlans";

export const metadata: Metadata = {
  title: "Accepted Insurance Plans | Coastal Pediatric Therapy Center Jacksonville FL",
  description: "Coastal Pediatric Therapy Center accepts BCBS, Medicaid, Tricare, United, and more. We verify your insurance benefits before your first visit.",
};

export default function InsurancePage() {
  return (
    <>
      <section className="bg-[#EAF6FB] py-14 px-4 text-center">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-[#1e3a4a] mb-4">Insurance & Coverage</h1>
            <p className="text-lg text-[#4a7a8a]">We work with most major insurance plans and verify your benefits before your child&apos;s first visit — no surprises.</p>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <AnimatedSection direction="left">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-6">Accepted Insurance Plans</h2>
              <InsurancePlans />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-6">
              <div className="card-hover bg-[#EAF6FB] rounded-xl p-6">
                <h3 className="font-bold text-[#1e3a4a] mb-3">How We Handle Insurance</h3>
                <p className="text-[#4a7a8a] text-sm leading-relaxed">Every insurance policy is different. Before your child&apos;s first visit, our team verifies your benefits and explains your plan&apos;s coverage and any potential out-of-pocket costs — so you can make informed decisions without stress.</p>
              </div>
              <div className="card-hover bg-white border border-[#B8E4F0] rounded-xl p-6">
                <h3 className="font-bold text-[#1e3a4a] mb-3">Don&apos;t See Your Plan?</h3>
                <p className="text-[#4a7a8a] text-sm leading-relaxed mb-4">We regularly update our accepted plans. Contact us directly and we&apos;ll let you know if we can work with your insurance or help you understand your options.</p>
                <a href="tel:9043724070" className="cta-blue-2 bg-[#24B5D0] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1A9EC0] transition text-sm inline-block">
                  Call (904) 372-4070
                </a>
              </div>
              <div className="card-hover bg-white border border-[#B8E4F0] rounded-xl p-6">
                <h3 className="font-bold text-[#1e3a4a] mb-3">Private Pay</h3>
                <p className="text-[#4a7a8a] text-sm leading-relaxed">We also accept private pay for families who prefer to pay out of pocket. Contact us for current session rates.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
}
