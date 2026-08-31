import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Hand, Activity, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Therapy Services | Coastal Pediatric Therapy Center Jacksonville FL",
  description: "Speech & Language, Occupational, and Physical Therapy for children in Jacksonville FL. Play-based, one-on-one therapy tailored to each child.",
};

const services = [
  {
    icon: MessageCircle,
    title: "Speech & Language Therapy",
    desc: "Our speech-language pathologists work with children who have challenges with articulation, language development, fluency, voice, and social communication. Whether your child has been diagnosed with a speech delay, apraxia, stuttering, or autism spectrum disorder, our team develops a customized plan to help them find their voice.",
    areas: ["Articulation and Phonology", "Expressive and Receptive Language", "Fluency and Stuttering", "Voice Disorders", "Social Communication", "Augmentative and Alternative Communication (AAC)", "Feeding and Swallowing"],
  },
  {
    icon: Hand,
    title: "Occupational Therapy",
    desc: "Our occupational therapists help children develop the skills they need to participate fully in school, home, and play. We specialize in sensory processing, fine motor development, self-care, handwriting, and emotional regulation — building the foundation children need to thrive.",
    areas: ["Sensory Processing Disorder", "Fine Motor Skills and Handwriting", "Self-Care and Daily Living Skills", "Visual Motor Integration", "Feeding Therapy", "Emotional Regulation", "School Readiness"],
  },
  {
    icon: Activity,
    title: "Physical Therapy",
    desc: "Our physical therapists focus on gross motor development, strength, balance, and coordination. We help children with conditions ranging from developmental delays and hypotonia to orthopedic injuries and neurological conditions — getting them moving, playing, and building confidence.",
    areas: ["Gross Motor Development", "Balance and Coordination", "Strength and Endurance", "Gait and Mobility", "Neurological Conditions", "Orthopedic Conditions", "Torticollis and Plagiocephaly"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#e8f4f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Therapy Services</h1>
          <p className="text-lg text-gray-600">Play-based, one-on-one therapy tailored to each child — at our Jacksonville Beach and Mandarin locations.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-14">
          {services.map(({ icon: Icon, title, desc, areas }) => (
            <div key={title} className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8f4f9] flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-[#1e7faa]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Areas We Treat</h3>
                <ul className="space-y-2">
                  {areas.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[#1e7faa] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e7faa] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Child Started?</h2>
          <p className="text-white/90 mb-8">Our team handles the insurance verification, prescription request, and scheduling — all you need to do is fill out the new patient form.</p>
          <Link href="/getting-started" className="bg-white text-[#1e7faa] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">
            Request an Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
