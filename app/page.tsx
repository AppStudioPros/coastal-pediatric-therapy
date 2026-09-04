"use client";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle, Hand, Activity, ArrowRight, Star, Phone,
  Brain, Utensils, BookOpen
} from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

const services = [
  { icon: MessageCircle, title: "Speech & Language Therapy", desc: "Helping children develop communication skills, articulation, fluency, and language comprehension through engaging, play-based techniques." },
  { icon: Hand, title: "Occupational Therapy", desc: "Building fine motor skills, sensory processing, self-care, and school readiness so children can thrive in everyday life." },
  { icon: Activity, title: "Physical Therapy", desc: "Improving strength, balance, coordination, and gross motor development to help children move and play with confidence." },
  { icon: Brain, title: "Sensory Integration", desc: "Helping children who are over- or under-responsive to sensory information engage more comfortably with their environment." },
  { icon: Utensils, title: "Feeding Therapy", desc: "Addressing sensory, motor, and behavioral components of eating to help children expand their diet and enjoy mealtimes." },
  { icon: BookOpen, title: "Reading Intervention", desc: "Structured literacy support for children with dyslexia, language-based learning disabilities, or reading challenges." },
];

const testimonials = [
  {
    quote: "We have been coming to Coastal Pediatric Therapy Center for almost three years and have seen so much growth and improvement in our son's speech. Our SLP makes speech fun and engaging, so it's always an enjoyable experience to be there. The whole staff is warm, professional, and truly invested in our child's progress.",
    name: "Cheryl",
  },
  {
    quote: "Coastal Therapy is a wonderful, positive, learning experience for the entire family! I have been impressed with the whole staff from the moment I made the first call. They were patient, thorough, and made us feel completely at ease. We couldn't be happier with the care our child receives here.",
    name: "Karin",
  },
  {
    quote: "We have seen a huge improvement in our child's speech since starting at Coastal Therapy. People are able to understand him so much more now! The therapists are kind, encouraging, and so creative in how they approach each session. We are so grateful for this team.",
    name: "Elizabeth",
  },
];

const insurance = ["BCBS", "Medica (MMSI)", "CMS Medicaid", "Tricare Select", "Tricare Prime", "UMR", "United", "Step Up For Students", "DSAJ Scholarships", "SIS VPK Funding"];

const trustBar = [
  "Licensed & Certified Therapists",
  "Play-Based Approach",
  "HIPAA Compliant Practice",
  "Individualized Treatment Plans",
];

const trustChips = ["2 Locations", "Since 1996", "Most Insurance Accepted", "Telehealth Available"];

export default function Home() {
  const { openModal } = useBooking();

  return (
    <>
      {/* Hero — split layout */}
      <section className="bg-white py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="max-w-lg">
            <p className="text-[#53A0DA] font-semibold text-sm uppercase tracking-widest mb-4">
              Serving Northeast Florida Since 1996
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a4a] leading-tight mb-5">
              Helping Children Reach Their Full Potential
            </h1>
            <p className="text-lg text-[#4a7a8a] leading-relaxed mb-8">
              Coastal Pediatric Therapy Center provides quality play-based Speech, Occupational, and Physical Therapy in Jacksonville Beach and Mandarin. One-on-one care, tailored to your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={openModal}
                className="bg-[#24B5D0] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1A9EC0] transition flex items-center gap-2 justify-center"
              >
                Book an Appointment <ArrowRight size={18} />
              </button>
              <a
                href="tel:9043724070"
                className="border border-[#B8E4F0] text-[#1e3a4a] px-8 py-3 rounded-lg font-semibold hover:bg-[#EAF6FB] transition flex items-center gap-2 justify-center"
              >
                <Phone size={18} /> (904) 372-4070
              </a>
            </div>
            {/* Trust chips */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustChips.map((chip) => (
                <span key={chip} className="flex items-center gap-2 text-sm text-[#4a7a8a]">
                  <span className="text-[#53A0DA] text-xs">⬤</span>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
              alt="Child receiving pediatric therapy at Coastal Pediatric Therapy Center"
              width={600}
              height={500}
              className="rounded-2xl object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#EAF6FB] py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBar.map((label) => (
            <div key={label} className="text-center">
              <p className="font-bold text-sm text-[#1e3a4a] gold-underline">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a4a] mb-3 gold-underline">Our Therapy Services</h2>
            <p className="text-[#4a7a8a] mt-4 max-w-xl mx-auto">One-on-one, play-based therapy tailored to each child&apos;s unique needs and goals.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <Link key={title} href="/services" className="bg-white border border-[#B8E4F0] rounded-2xl p-6 hover:shadow-md transition block">
                <Icon size={28} className="text-[#24B5D0] mb-3" />
                <h3 className="font-bold text-[#1e3a4a] mb-2">{title}</h3>
                <p className="text-[#4a7a8a] text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-[#24B5D0] font-semibold hover:underline flex items-center gap-1 justify-center">
              Learn more about our services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-20 px-4 bg-[#EAF6FB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a4a] mb-3 gold-underline">
            Jacksonville&apos;s Trusted Pediatric Therapy Experts
          </h2>
          <p className="text-[#4a7a8a] text-lg leading-relaxed mt-4 mb-4">
            Our compassionate, highly skilled therapists work with each child one-on-one to develop a customized treatment plan designed to build confidence, improve developmental skills, and exceed therapeutic goals.
          </p>
          <p className="text-[#4a7a8a] mb-8">
            We work closely with families, teachers, and pediatricians to ensure progress extends far beyond the therapy room. Two convenient locations in <strong className="text-[#1e3a4a]">Jacksonville Beach</strong> and <strong className="text-[#1e3a4a]">Mandarin</strong>. Clinic, telehealth, and private school settings available.
          </p>
          <Link href="/about" className="bg-[#24B5D0] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1A9EC0] transition inline-flex items-center gap-2">
            Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a4a] gold-underline">What Families Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name }) => (
              <div key={name} className="bg-[#EAF6FB] rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#FFEB70] text-[#FFEB70]" />)}
                </div>
                <p className="text-[#4a7a8a] text-sm leading-relaxed mb-5">&ldquo;{quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#1e3a4a] text-sm">{name}</p>
                  <p className="text-[#4a7a8a] text-xs">— Parent</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance strip */}
      <section className="py-16 px-4 bg-[#EAF6FB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a4a] mb-3 gold-underline">Accepted Insurance Plans</h2>
          <p className="text-[#4a7a8a] mt-4 mb-8">We work with most major insurance providers. Contact us to verify your coverage.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {insurance.map((plan) => (
              <span key={plan} className="bg-white border border-[#B8E4F0] rounded-full px-4 py-1.5 text-sm text-[#1e3a4a]">
                {plan}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/insurance" className="text-[#24B5D0] font-semibold hover:underline">
              Learn about insurance coverage
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[#1e3a4a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gold-underline">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 text-lg mt-4">
            Fill out a new patient request and our friendly staff will take care of the rest — from insurance verification to scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openModal}
              className="bg-[#FFEB70] text-[#1e3a4a] font-bold px-8 py-3 rounded-lg hover:bg-[#FFD940] transition"
            >
              Book an Appointment
            </button>
            <a href="tel:9043724070" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
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
            "faxNumber": "(904) 372-4075",
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
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "17:30"
              }
            ],
            "areaServed": "Northeast Florida"
          })
        }}
      />
    </>
  );
}
