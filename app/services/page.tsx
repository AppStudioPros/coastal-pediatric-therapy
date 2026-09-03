"use client";
import { useState } from "react";
import { MessageCircle, Hand, Activity, Brain, Utensils, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

export const dynamic = "force-static";

const tabs = [
  {
    id: "speech",
    label: "Speech & Language",
    icon: MessageCircle,
    title: "Speech & Language Therapy",
    paragraphs: [
      "Our speech-language pathologists work with children who have challenges with articulation, language development, fluency, voice, and social communication. Every child deserves to be heard — and our team is dedicated to helping each one find their voice through individualized, play-based treatment.",
      "Whether your child has been diagnosed with a speech delay, apraxia of speech, stuttering, or autism spectrum disorder, our SLPs develop a customized plan tailored to your child's unique strengths and goals. We collaborate closely with families, teachers, and pediatricians throughout the process.",
      "From first words to complex conversational skills, our therapists use evidence-based strategies to build communication confidence in a warm, encouraging environment. We serve children from infancy through school age across our Jacksonville Beach and Mandarin locations.",
    ],
    conditions: [
      "Articulation and Phonology Disorders",
      "Expressive and Receptive Language Delays",
      "Fluency and Stuttering",
      "Apraxia of Speech (CAS)",
      "Voice Disorders",
      "Social Communication / Pragmatic Language",
      "Augmentative and Alternative Communication (AAC)",
      "Autism Spectrum Disorder (ASD)",
      "Hearing-Related Communication Challenges",
    ],
  },
  {
    id: "ot",
    label: "Occupational Therapy",
    icon: Hand,
    title: "Occupational Therapy",
    paragraphs: [
      "Our occupational therapists help children develop the skills they need to participate fully in school, home, and play. We specialize in sensory processing, fine motor development, self-care, handwriting, and emotional regulation — building the foundational skills children need to thrive in everyday life.",
      "OT at Coastal Pediatric Therapy Center is hands-on, motivating, and tailored to each child's sensory and developmental profile. Our therapists use a combination of structured activities and child-led play to make therapy engaging and effective.",
      "We work closely with parents to provide home strategies and carry-over activities so progress continues beyond the clinic. School-based consultations and telehealth options are also available.",
    ],
    conditions: [
      "Sensory Processing Disorder (SPD)",
      "Fine Motor Skill Delays",
      "Handwriting Difficulties (Dysgraphia)",
      "Visual Motor Integration Challenges",
      "Feeding Therapy",
      "Emotional Regulation and Self-Regulation",
      "Activities of Daily Living (ADL) / Self-Care",
      "School Readiness and Academic Support",
      "ADHD and Executive Function",
    ],
  },
  {
    id: "pt",
    label: "Physical Therapy",
    icon: Activity,
    title: "Physical Therapy",
    paragraphs: [
      "Our physical therapists focus on gross motor development, strength, balance, and coordination. We help children with conditions ranging from developmental delays and hypotonia to orthopedic injuries and neurological conditions — getting them moving, playing, and building confidence.",
      "Every child's physical therapy plan is individualized and goal-driven, designed to improve mobility, strength, and independence in a safe and supportive environment. Our PTs use functional activities and age-appropriate play to motivate children throughout their treatment.",
      "We work alongside families, schools, and other healthcare providers to ensure a comprehensive approach. Progress is tracked regularly and goals are adjusted to meet each child's evolving needs.",
    ],
    conditions: [
      "Gross Motor Developmental Delays",
      "Low Muscle Tone (Hypotonia)",
      "Balance and Coordination Disorders",
      "Gait and Mobility Challenges",
      "Torticollis and Plagiocephaly",
      "Orthopedic Injuries and Post-Surgical Rehab",
      "Neurological Conditions (Cerebral Palsy, Spina Bifida)",
      "Strength and Endurance Deficits",
      "Sports and Activity-Related Injuries",
    ],
  },
  {
    id: "sensory",
    label: "Sensory Integration",
    icon: Brain,
    title: "Sensory Integration Therapy",
    paragraphs: [
      "Sensory Integration Therapy helps children who are over- or under-responsive to sensory information from their environment. Many children struggle with sounds, textures, movement, or touch in ways that interfere with learning, behavior, and daily activities — our therapists specialize in addressing these challenges at the root.",
      "Using structured sensory experiences and specialized equipment in our sensory-rich gym environments, our occupational therapists guide children through activities that gradually improve how their nervous systems process and respond to sensory input. The goal is a more regulated, adaptable child who can engage confidently with the world around them.",
      "Sensory integration therapy is integrated into our OT sessions and can benefit children across a wide range of diagnoses. Parents receive coaching on sensory strategies to use at home, school, and in the community.",
    ],
    conditions: [
      "Sensory Processing Disorder (SPD)",
      "Sensory Seeking or Avoiding Behaviors",
      "Tactile Defensiveness",
      "Auditory Hypersensitivity",
      "Proprioceptive and Vestibular Processing Challenges",
      "Autism Spectrum Disorder (ASD)",
      "ADHD with Sensory Components",
      "Anxiety and Emotional Dysregulation",
      "Difficulties with Transitions or Changes in Routine",
    ],
  },
  {
    id: "feeding",
    label: "Feeding Therapy",
    icon: Utensils,
    title: "Feeding Therapy",
    paragraphs: [
      "Feeding difficulties in children can cause significant stress for the whole family. Our feeding therapists — both speech-language pathologists and occupational therapists — work together to address the sensory, motor, and behavioral components of eating, helping children expand their diet and develop positive relationships with food.",
      "We use evidence-based approaches including SOS (Sequential Oral Sensory) Feeding Therapy to gradually introduce new foods, textures, and flavors in a low-pressure, playful environment. Treatment is individualized based on your child's specific feeding profile and challenges.",
      "Collaboration with families is central to our approach. We provide parent coaching, mealtime strategies, and carry-over activities to support progress at home. We also coordinate with dietitians and other medical professionals as needed.",
    ],
    conditions: [
      "Food Refusal and Extreme Picky Eating",
      "Texture and Sensory-Based Food Aversions",
      "Oral Motor Difficulties",
      "Difficulty Transitioning from Bottle to Cup or Solids",
      "Gagging, Choking, or Vomiting During Meals",
      "Swallowing Difficulties (Dysphagia)",
      "ARFID (Avoidant/Restrictive Food Intake Disorder)",
      "Feeding Challenges Related to Medical Conditions",
      "Mealtime Behavioral Challenges",
    ],
  },
  {
    id: "reading",
    label: "Reading Intervention",
    icon: BookOpen,
    title: "Reading Intervention",
    paragraphs: [
      "Reading is foundational to academic success, and many children with language or learning challenges need targeted support to develop strong literacy skills. Our reading intervention services are delivered by speech-language pathologists who specialize in the language underpinnings of reading and spelling.",
      "We use structured literacy approaches grounded in the science of reading — including phonological awareness training, phonics instruction, and comprehension strategies — to help children decode, fluency read, and understand what they read. Intervention is tailored to each child's specific literacy profile.",
      "Reading intervention at Coastal Pediatric Therapy Center is often provided alongside speech-language therapy, creating a seamless, integrated approach to building communication and literacy skills together.",
    ],
    conditions: [
      "Dyslexia and Reading Disabilities",
      "Phonological Awareness Deficits",
      "Phonics and Decoding Difficulties",
      "Reading Fluency Challenges",
      "Reading Comprehension Weaknesses",
      "Spelling Difficulties",
      "Language-Based Learning Disabilities",
      "Children with History of Speech-Language Delays",
      "School-Age Children Struggling Academically",
    ],
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(0);
  const { openModal } = useBooking();
  const tab = tabs[active];
  const Icon = tab.icon;

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#e8f4f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pediatric Therapy Services</h1>
          <p className="text-lg text-gray-600">
            Comprehensive, play-based therapy for children — delivered one-on-one at our Jacksonville Beach and Mandarin locations.
          </p>
        </div>
      </section>

      {/* Tab nav */}
      <section className="bg-white border-b border-gray-200 sticky top-[64px] z-40">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2 min-w-max">
            {tabs.map((t, i) => {
              const TabIcon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
                    active === i
                      ? "bg-[#1e7faa] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <TabIcon size={16} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: content */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#e8f4f9] flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-[#1e7faa]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{tab.title}</h2>
              </div>
              {tab.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
              ))}
              <button
                onClick={openModal}
                className="mt-4 bg-[#e8734a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d4623b] transition inline-flex items-center gap-2"
              >
                Book an Appointment <ArrowRight size={18} />
              </button>
            </div>

            {/* Right: conditions list */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Conditions We Treat</h3>
              <ul className="space-y-3">
                {tab.conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-[#1e7faa] mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-[#1e7faa] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Child Started?</h2>
          <p className="text-white/90 mb-8">
            Our team handles insurance verification, prescription requests, and scheduling — all you need to do is reach out.
          </p>
          <button
            onClick={openModal}
            className="bg-[#e8734a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d4623b] transition inline-flex items-center gap-2"
          >
            Book an Appointment <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Coastal Pediatric Therapy Center",
            "url": "https://coastaltherapy.net/services",
            "medicalSpecialty": [
              "Speech-Language Pathology",
              "Occupational Therapy",
              "Physical Therapy",
              "Sensory Integration",
              "Feeding Therapy"
            ],
            "description": "Pediatric therapy services including Speech & Language, Occupational Therapy, Physical Therapy, Sensory Integration, Feeding Therapy, and Reading Intervention in Jacksonville, FL."
          })
        }}
      />
    </>
  );
}
