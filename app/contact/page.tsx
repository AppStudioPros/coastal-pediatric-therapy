import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Coastal Pediatric Therapy Center",
  description: "Contact Coastal Pediatric Therapy Center in Jacksonville FL. Call (904) 372-4070, email info@coastaltherapy.net, or visit our Jacksonville Beach or Mandarin locations.",
};

const locations = [
  {
    name: "Jacksonville Beach",
    address: "2730 Isabella Blvd, Suite 10",
    city: "Jacksonville Beach, FL 32250",
    phone: "(904) 372-4070",
    fax: "(904) 372-4075",
    email: "info@coastaltherapy.net",
    hours: "Mon–Fri: 8:30 AM – 5:30 PM",
  },
  {
    name: "Mandarin",
    address: "6100 Greenland Rd, Suite 901",
    city: "Jacksonville, FL 32258",
    phone: "(904) 372-4070",
    fax: "(904) 372-4075",
    email: "info@coastaltherapy.net",
    hours: "Mon–Fri: 8:30 AM – 5:30 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a4a] py-16 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg">
            We would love to hear from you. Reach out by phone, email, or use the form below and we will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Main content: form left, info right */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Contact Form */}
          <ContactForm />

          {/* Right: Contact info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1e3a4a]">Our Locations</h2>
            {locations.map((loc) => (
              <div key={loc.name} className="bg-[#EAF6FB] border border-[#B8E4F0] rounded-2xl p-6">
                <h3 className="font-bold text-[#1e3a4a] text-lg mb-3">{loc.name}</h3>
                <div className="space-y-1.5 text-sm text-[#4a7a8a]">
                  <p>{loc.address}</p>
                  <p>{loc.city}</p>
                  <p className="mt-2">
                    <span className="font-medium text-[#1e3a4a]">Phone: </span>
                    <a href="tel:9043724070" className="text-[#24B5D0] hover:underline">{loc.phone}</a>
                  </p>
                  <p>
                    <span className="font-medium text-[#1e3a4a]">Fax: </span>{loc.fax}
                  </p>
                  <p>
                    <span className="font-medium text-[#1e3a4a]">Email: </span>
                    <a href="mailto:info@coastaltherapy.net" className="text-[#24B5D0] hover:underline">{loc.email}</a>
                  </p>
                  <p className="mt-2">
                    <span className="font-medium text-[#1e3a4a]">Hours: </span>{loc.hours}
                  </p>
                </div>
              </div>
            ))}
            <div className="bg-[#EAF6FB] border border-[#B8E4F0] rounded-2xl p-6">
              <h3 className="font-bold text-[#1e3a4a] mb-2">Prefer to call?</h3>
              <p className="text-[#4a7a8a] text-sm mb-3">Our friendly staff is available Monday through Friday during office hours.</p>
              <a
                href="tel:9043724070"
                className="inline-flex items-center gap-2 bg-[#24B5D0] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1A9EC0] transition"
              >
                (904) 372-4070
              </a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Coastal Pediatric Therapy Center",
            "url": "https://coastaltherapy.net/contact",
            "telephone": "(904) 372-4070",
            "faxNumber": "(904) 372-4075",
            "email": "info@coastaltherapy.net",
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
