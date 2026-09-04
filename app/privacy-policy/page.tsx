"use client";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & HIPAA Notice | Coastal Pediatric Therapy Center",
  description: "Privacy Policy and HIPAA Notice for Coastal Pediatric Therapy Center. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#EAF6FB] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield size={32} className="text-[#24B5D0]" />
            <h1 className="text-4xl font-bold text-[#1e3a4a]">Privacy Policy</h1>
          </div>
          <p className="text-[#4a7a8a] text-sm">Last Updated: September 2026</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray max-w-none">
          <div className="space-y-10 text-[#4a7a8a] leading-relaxed">

            {/* Intro */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Introduction</h2>
              <p>
                Coastal Pediatric Therapy Center (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of the families and individuals who use our website and services. This Privacy Policy explains how we collect, use, disclose, and protect information you provide when visiting coastaltherapy.net or contacting us through our online appointment request forms.
              </p>
              <p className="mt-3">
                By using this website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our website or submit information through our online forms.
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Information We Collect</h2>
              <p>We collect information you voluntarily provide, including:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>First name and contact information (phone number, email address)</li>
                <li>Preferred appointment times submitted through our booking forms</li>
                <li>Messages submitted through our contact form</li>
                <li>Any information you include in email correspondence with our office</li>
              </ul>
              <p className="mt-3">
                We also collect non-personally identifiable information automatically, including browser type, device type, IP address, referring URLs, and pages visited — standard data collected by most websites for analytics and security purposes.
              </p>
            </div>

            {/* HIPAA Notice */}
            <div id="hipaa">
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">HIPAA Notice of Privacy Practices</h2>
              <p>
                Coastal Pediatric Therapy Center is a HIPAA-covered entity. We are required by law to maintain the privacy of protected health information (PHI) and to provide you with notice of our legal duties and privacy practices with respect to your PHI.
              </p>
              <p className="mt-3">
                <strong>Information submitted through this website does not constitute PHI</strong> unless it is exchanged in the context of an established patient relationship. Our online appointment request forms are designed to collect only general scheduling information (first name, phone number, preferred time), not clinical or medical information.
              </p>
              <p className="mt-3">
                If you are a patient or parent/guardian of a patient, your PHI is governed by our HIPAA Notice of Privacy Practices provided at your first visit and available at our clinic offices. PHI is used only for treatment, payment, and healthcare operations as permitted by law.
              </p>
              <p className="mt-3">
                We do not sell, rent, or trade your PHI. We may disclose PHI to other healthcare providers involved in your child&apos;s care, to your insurance company for billing purposes, or as required by law.
              </p>
            </div>

            {/* COPPA */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Children&apos;s Privacy (COPPA)</h2>
              <p>
                Our website is directed at adults — specifically parents, guardians, and caregivers of children seeking therapy services. We do not knowingly collect personal information directly from children under the age of 13. All information submitted through our forms is presumed to be provided by a parent or legal guardian.
              </p>
              <p className="mt-3">
                If you believe a child has submitted personal information through this website without parental consent, please contact us immediately at info@coastaltherapy.net and we will promptly remove it.
              </p>
            </div>

            {/* Data Use */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">How We Use Your Information</h2>
              <p>We use information collected through this website to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to appointment requests and contact form submissions</li>
                <li>Schedule and coordinate new patient appointments</li>
                <li>Communicate with you about your inquiry or appointment</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
              <p className="mt-3">
                We do not use your information for unsolicited marketing, and we do not sell your information to third parties.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Third-Party Services</h2>
              <p>
                Our online booking portal is powered by <strong>OceanFriends</strong> (oceanfriends.ai). When you click through to schedule an appointment, you will be redirected to OceanFriends&apos; platform, which is subject to their own privacy policy. We encourage you to review their privacy practices.
              </p>
              <p className="mt-3">
                Our website may use analytics tools (such as Google Analytics) to understand how visitors interact with our site. These tools may use cookies to collect standard internet log information. This data is aggregated and anonymized.
              </p>
              <p className="mt-3">
                We use <strong>Resend</strong> to process email notifications submitted through our appointment request forms. Information submitted is transmitted securely and used solely for internal communication purposes.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Cookies</h2>
              <p>
                Our website may use cookies — small text files stored on your device — to improve your browsing experience, remember preferences, and collect analytics data. You can control cookie settings through your browser preferences. Note that disabling cookies may affect the functionality of some features on our site.
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Request access to personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of any non-essential communications</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at info@coastaltherapy.net or (904) 372-4070.
              </p>
            </div>

            {/* FL Telehealth */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Florida Telehealth Disclosure</h2>
              <p>
                Coastal Pediatric Therapy Center provides telehealth services in compliance with Florida Statute §456.47. Telehealth services are delivered through HIPAA-compliant platforms. Patients have the right to receive the same standard of care via telehealth as they would in person. Telehealth is not appropriate for all conditions or all patients, and therapists retain clinical discretion regarding appropriate service delivery methods.
              </p>
            </div>

            {/* Good Faith Estimate */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Good Faith Estimate (No Surprises Act)</h2>
              <p>
                Under the No Surprises Act (effective January 1, 2022), you have the right to receive a Good Faith Estimate explaining how much your medical and mental health care will cost. Under the law, healthcare providers need to give patients who don&apos;t have insurance — or who are not using insurance — an estimate of the expected charges for medical services, including psychotherapy services.
              </p>
              <p className="mt-3">
                You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. For questions or to request a Good Faith Estimate, contact us at info@coastaltherapy.net or (904) 372-4070.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-3">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests related to this Privacy Policy or our HIPAA practices, please contact us:
              </p>
              <div className="mt-3 bg-[#EAF6FB] rounded-xl p-4 text-sm">
                <p className="font-semibold text-[#1e3a4a]">Coastal Pediatric Therapy Center</p>
                <p>2730 Isabella Blvd, Suite 10, Jacksonville Beach, FL 32250</p>
                <p>Phone: (904) 372-4070</p>
                <p>Email: info@coastaltherapy.net</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy & HIPAA Notice",
            "url": "https://coastaltherapy.net/privacy-policy",
            "description": "Privacy Policy and HIPAA Notice for Coastal Pediatric Therapy Center in Jacksonville, FL.",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "Coastal Pediatric Therapy Center",
              "telephone": "(904) 372-4070"
            }
          })
        }}
      />
      <CTASection />
    </>
  );
}
