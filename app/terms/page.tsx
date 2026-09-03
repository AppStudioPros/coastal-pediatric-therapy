import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Coastal Pediatric Therapy Center",
  description: "Terms of Service for the Coastal Pediatric Therapy Center website. Read our terms before using our site or submitting information online.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#f0f9fc] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText size={32} className="text-[#1a9cb5]" />
            <h1 className="text-4xl font-bold text-[#1a3a4a]">Terms of Service</h1>
          </div>
          <p className="text-[#4a6b7a] text-sm">Last Updated: September 2026</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10 text-[#4a6b7a] leading-relaxed">

            {/* Acceptance */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">Acceptance of Terms</h2>
              <p>
                By accessing or using the Coastal Pediatric Therapy Center website (coastaltherapy.net), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. These terms may be updated periodically; continued use of the site after changes constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* Website Use */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">Website Use — Not Medical Advice</h2>
              <p>
                The content on this website is provided for general informational purposes only. It is not intended to constitute medical advice, diagnosis, treatment recommendations, or a substitute for professional clinical evaluation by a licensed healthcare provider.
              </p>
              <p className="mt-3">
                Developmental milestone information, therapy descriptions, and resource guides on this site are general in nature and may not apply to your child&apos;s specific circumstances. Always consult your child&apos;s pediatrician or a licensed therapist for guidance specific to your child.
              </p>
            </div>

            {/* No Patient-Provider Relationship */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">No Patient-Provider Relationship</h2>
              <p>
                Use of this website, submission of an appointment request form, or any other interaction with this site does not create a patient-provider relationship between you and Coastal Pediatric Therapy Center. A patient-provider relationship is only established upon execution of a formal intake and consent process, completion of a clinical evaluation, and mutual agreement to proceed with treatment.
              </p>
            </div>

            {/* Appointment Policies */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">Appointment Policies</h2>
              <p>
                Appointment requests submitted through this website or our booking portal are subject to therapist availability and administrative review. Submitting a request does not guarantee an appointment. Our team will contact you to confirm scheduling and provide any additional intake requirements.
              </p>
              <p className="mt-3">
                Cancellation and rescheduling policies will be communicated at the time of scheduling and are contained in your patient intake materials. Late cancellations or no-shows may be subject to fees as outlined in your patient agreement.
              </p>
            </div>

            {/* Online Payment */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">Online Payment</h2>
              <p>
                If online payment options are made available through third-party platforms linked from this site (including our booking portal), those transactions are subject to the third party&apos;s terms and conditions. Coastal Pediatric Therapy Center is not responsible for payment processing errors, disputes, or security incidents arising from third-party payment platforms.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, images, and page designs — is the property of Coastal Pediatric Therapy Center or its content providers and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this site without express written permission.
              </p>
            </div>

            {/* Liability Limitation */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Coastal Pediatric Therapy Center, its owners, staff, and agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of — or inability to use — this website or its content. This includes, without limitation, damages for errors, omissions, interruptions, defects, delays, computer viruses, or your reliance on information presented on this site.
              </p>
              <p className="mt-3">
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for certain types of damages. In such jurisdictions, our liability is limited to the greatest extent permitted by applicable law.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any disputes arising under these terms shall be resolved in the state or federal courts located in Duval County, Florida, and you consent to personal jurisdiction in those courts.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3">Contact Us</h2>
              <p>
                For questions about these Terms of Service, please contact:
              </p>
              <div className="mt-3 bg-[#f0f9fc] rounded-xl p-4 text-sm">
                <p className="font-semibold text-[#1a3a4a]">Coastal Pediatric Therapy Center</p>
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
            "name": "Terms of Service",
            "url": "https://coastaltherapy.net/terms",
            "description": "Terms of Service for the Coastal Pediatric Therapy Center website.",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "Coastal Pediatric Therapy Center",
              "telephone": "(904) 372-4070"
            }
          })
        }}
      />
    </>
  );
}
