"use client";
import Link from "next/link";
import {
  MessageCircle, Hand, Activity, ArrowRight, Star, Phone,
  Brain, Utensils, BookOpen, Shield, Award, Users
} from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

const services = [
  { icon: MessageCircle, title: "Speech & Language Therapy", href: "/services", desc: "Helping children develop communication skills, articulation, fluency, and language comprehension through engaging, play-based techniques." },
  { icon: Hand, title: "Occupational Therapy", href: "/services", desc: "Building fine motor skills, sensory processing, self-care, and school readiness so children can thrive in everyday life." },
  { icon: Activity, title: "Physical Therapy", href: "/services", desc: "Improving strength, balance, coordination, and gross motor development to help children move and play with confidence." },
  { icon: Brain, title: "Sensory Integration", href: "/services", desc: "Helping children who are over- or under-responsive to sensory information engage more comfortably with their environment." },
  { icon: Utensils, title: "Feeding Therapy", href: "/services", desc: "Addressing sensory, motor, and behavioral components of eating to help children expand their diet and enjoy mealtimes." },
  { icon: BookOpen, title: "Reading Intervention", href: "/services", desc: "Structured literacy support for children with dyslexia, language-based learning disabilities, or reading challenges." },
];

const testimonials = [
  { quote: "We have been coming to Coastal Pediatric Therapy Center for almost three years and have seen so much growth and improvement in our son's speech. Our SLP makes speech fun, so it's enjoyable to be there.", name: "Cheryl" },
  { quote: "Coastal Therapy is a wonderful, positive, learning experience for the entire family! I have been impressed with the whole staff from the moment I made the first call.", name: "Karin" },
  { quote: "We have seen a huge improvement in our child's speech since starting at Coastal Therapy. People are able to understand him so much more now!", name: "Elizabeth" },
];

const insurance = ["BCBS", "Medica (MMSI)", "CMS Medicaid", "Tricare Select", "Tricare Prime", "UMR", "United", "Step Up For Students", "DSAJ Scholarships", "SIS VPK Funding"];

const trustItems = [
  { icon: Award, label: "Serving Families Since 1996" },
  { icon: Users, label: "Multidisciplinary Team" },
  { icon: Shield, label: "HIPAA Compliant Practice" },
  { icon: Star, label: "Play-Based Approach" },
];

export default function Home() {
  const { openModal } = useBooking();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#e8f4f9] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#1e7faa] font-semibold uppercase tracking-widest text-sm mb-3">Northeast Florida&apos;s Trusted Pediatric Therapy Center</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Helping Children Reach Their Full Potential
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Coastal Pediatric Therapy Center provides quality play-based Speech, Occupational, and Physical Therapy in Jacksonville Beach and Mandarin since 1996.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openModal}
              className="bg-[#e8734a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d4623b] transition flex items-center gap-2 justify-center"
            >
              Book an Appointment <ArrowRight size={18} />
            </button>
            <a href="tel:9043724070" className="border border-[#1e7faa] text-[#1e7faa] px-8 py-3 rounded-lg font-semibold hover:bg-[#e8f4f9] transition flex items-center gap-2 justify-center">
              <Phone size={18} /> (904) 372-4070
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-gray-200 py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 justify-center">
              <div className="w-9 h-9 rounded-full bg-[#e8f4f9] flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#1e7faa]" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Our Therapy Services</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">One-on-one, play-based therapy tailored to each child&apos;s unique needs and goals.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link key={title} href={href} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition block">
                <div className="w-12 h-12 rounded-full bg-[#e8f4f9] flex items-center justify-center mb-4">
                  <Icon size={24} className="text-[#1e7faa]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-[#1e7faa] font-semibold hover:underline flex items-center gap-1 justify-center">
              Learn more about our services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Jacksonville&apos;s Pediatric Therapy Experts Since 1996</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our compassionate, highly skilled therapists work with each child one-on-one to develop a customized treatment plan designed to build confidence, improve developmental skills, and exceed therapeutic goals. We work closely with families, teachers, and pediatricians to help every child succeed.
          </p>
          <p className="text-gray-600 mb-6">Two convenient locations in <strong>Jacksonville Beach</strong> and <strong>Mandarin</strong>. Clinic, telehealth, and private school settings available.</p>
          <Link href="/about" className="bg-[#1e7faa] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#155f82] transition inline-flex items-center gap-2">
            Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">What Families Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name }) => (
              <div key={name} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
                <p className="font-semibold text-gray-900 text-sm">— {name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="text-[#1e7faa] font-semibold hover:underline flex items-center gap-1 justify-center">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 px-4 bg-[#e8f4f9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Accepted Insurance Plans</h2>
          <p className="text-gray-500 mb-8">We work with most major insurance providers. Contact us to verify your coverage.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {insurance.map((plan) => (
              <span key={plan} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">{plan}</span>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/insurance" className="text-[#1e7faa] font-semibold hover:underline">Learn about insurance coverage</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1e7faa] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 text-lg">Fill out a new patient request and our friendly staff will take care of the rest — from insurance verification to scheduling.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openModal}
              className="bg-[#e8734a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d4623b] transition"
            >
              Book an Appointment
            </button>
            <a href="tel:9043724070" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#155f82] transition">
              Call (904) 372-4070
            </a>
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
            "telephone": "(904) 372-4070",
            "email": "info@coastaltherapy.net",
            "url": "https://coastaltherapy.net",
            "foundingDate": "1996",
            "sameAs": ["https://www.instagram.com/coastalpediatrictherapy/"],
            "medicalSpecialty": [
              "Speech-Language Pathology",
              "Occupational Therapy",
              "Physical Therapy"
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
                  "addressCountry": "US"
                }
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
                  "addressCountry": "US"
                }
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:00",
                "closes": "17:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "areaServed": "Northeast Florida"
          })
        }}
      />
    </>
  );
}
