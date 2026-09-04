"use client";
import { useState } from "react";
import { MessageCircle, Activity, Hand, Brain, GraduationCap, CheckCircle } from "lucide-react";

export const dynamic = "force-static";

const tabs = [
  { id: "speech", label: "Speech & Language Milestones", icon: MessageCircle },
  { id: "gross", label: "Gross Motor Milestones", icon: Activity },
  { id: "fine", label: "Fine Motor Milestones", icon: Hand },
  { id: "sensory", label: "Sensory Indicators", icon: Brain },
  { id: "volunteer", label: "Student & Volunteer Requests", icon: GraduationCap },
];

const speechMilestones = [
  {
    age: "0–6 Months",
    skills: [
      "Reacts to sounds and voices",
      "Coos and makes vowel sounds",
      "Smiles in response to faces",
      "Cries differently for different needs",
    ],
  },
  {
    age: "6–12 Months",
    skills: [
      "Babbles with consonant sounds (ba, da, ma)",
      "Responds to their name",
      "Waves bye-bye and plays pat-a-cake",
      "Says first word(s) around 12 months",
    ],
  },
  {
    age: "12–18 Months",
    skills: [
      "Uses 5–20 words consistently",
      "Points to request and show",
      "Follows simple one-step directions",
      "Imitates new words",
    ],
  },
  {
    age: "18–24 Months",
    skills: [
      "Has at least 50 words",
      "Begins combining 2 words (\"more juice\", \"go bye\")",
      "Asks simple questions (\"What's that?\")",
      "Strangers understand about 50% of speech",
    ],
  },
  {
    age: "2–3 Years",
    skills: [
      "Uses 3–4 word sentences",
      "Vocabulary of 200–1,000+ words",
      "Follows 2-step directions",
      "Strangers understand about 75% of speech",
    ],
  },
  {
    age: "3–4 Years",
    skills: [
      "Tells simple stories",
      "Most speech understood by strangers",
      "Uses past tense and plurals",
      "Asks \"why\", \"who\", and \"when\" questions",
    ],
  },
  {
    age: "4–5 Years",
    skills: [
      "Speaks in 5–6 word sentences",
      "Retells stories accurately",
      "Pronounces most sounds correctly",
      "Understands most of what is said to them",
    ],
  },
];

const grossMilestones = [
  {
    age: "0–6 Months",
    skills: [
      "Holds head steady when upright",
      "Pushes up on arms during tummy time",
      "Rolls from tummy to back",
      "Bears weight on legs when held standing",
    ],
  },
  {
    age: "6–12 Months",
    skills: [
      "Sits without support",
      "Gets to sitting position independently",
      "Pulls to stand",
      "Cruises along furniture",
    ],
  },
  {
    age: "12–18 Months",
    skills: [
      "Walks independently",
      "Squats to pick up objects",
      "Climbs onto low furniture",
      "Carries objects while walking",
    ],
  },
  {
    age: "18 Months–2 Years",
    skills: [
      "Runs, though may fall",
      "Kicks a ball",
      "Climbs stairs with support",
      "Jumps with both feet",
    ],
  },
  {
    age: "2–3 Years",
    skills: [
      "Climbs well",
      "Runs without falling",
      "Pedals a tricycle",
      "Goes up/down stairs alternating feet with support",
    ],
  },
  {
    age: "3–4 Years",
    skills: [
      "Hops on one foot",
      "Catches a large ball",
      "Pumps on a swing",
      "Navigates stairs without support",
    ],
  },
  {
    age: "4–5 Years",
    skills: [
      "Skips and gallops",
      "Balances on one foot for 5+ seconds",
      "Kicks with direction and force",
      "Throws overhand with accuracy",
    ],
  },
];

const fineMilestones = [
  {
    age: "0–6 Months",
    skills: [
      "Grasps objects placed in hand",
      "Holds rattle briefly",
      "Brings hands to midline",
      "Swipes at dangling objects",
    ],
  },
  {
    age: "6–12 Months",
    skills: [
      "Transfers objects between hands",
      "Picks up small objects with pincer grasp",
      "Bangs objects together",
      "Releases objects voluntarily",
    ],
  },
  {
    age: "12–18 Months",
    skills: [
      "Builds a 2-block tower",
      "Scribbles with crayon",
      "Points with index finger",
      "Turns pages of a board book",
    ],
  },
  {
    age: "18 Months–2 Years",
    skills: [
      "Builds 4+ block tower",
      "Uses a spoon with some spilling",
      "Turns door knobs",
      "Strings large beads",
    ],
  },
  {
    age: "2–3 Years",
    skills: [
      "Snips paper with scissors",
      "Draws horizontal and vertical lines",
      "Undresses independently",
      "Turns single pages of a book",
    ],
  },
  {
    age: "3–4 Years",
    skills: [
      "Copies a circle and cross",
      "Cuts straight lines with scissors",
      "Buttons and unbuttons large buttons",
      "Draws a recognizable person",
    ],
  },
  {
    age: "4–5 Years",
    skills: [
      "Copies letters and simple shapes",
      "Cuts out simple shapes",
      "Uses a fork and spoon well",
      "Ties shoelaces with assistance",
    ],
  },
];

const sensorySystems = [
  {
    name: "Tactile (Touch)",
    desc: "Processes information from skin receptors — texture, temperature, pressure, and pain. Children who are over-responsive may avoid certain textures in clothing or food; under-responsive children may seek intense tactile input.",
    signs: [
      "Dislikes being touched or groomed (haircuts, nail trimming)",
      "Avoids certain textures in food or clothing",
      "Seeks out rough, messy, or tactile play excessively",
      "Difficulty with fine motor tasks requiring touch feedback",
    ],
  },
  {
    name: "Vestibular (Balance & Movement)",
    desc: "Located in the inner ear, this system detects movement, gravity, and balance. It influences coordination, attention, and emotional regulation.",
    signs: [
      "Fear of swings, slides, or moving equipment",
      "Constantly seeking spinning, swinging, or jumping",
      "Car sickness or motion sensitivity",
      "Poor balance and coordination",
    ],
  },
  {
    name: "Proprioceptive (Body Awareness)",
    desc: "Senses information from muscles and joints about body position. Children who under-register proprioceptive input often seek heavy work and crash into things.",
    signs: [
      "Bumps into objects or people frequently",
      "Chews on clothing, pencils, or non-food items",
      "Seeks out bear hugs, tight spaces, or heavy lifting",
      "Uses too much or too little force with objects",
    ],
  },
  {
    name: "Visual (Sight)",
    desc: "Processes what the eyes see — not just acuity, but visual-spatial processing, tracking, and figure-ground discrimination. Visual processing issues can significantly impact reading and daily navigation.",
    signs: [
      "Difficulty tracking moving objects or reading lines of text",
      "Sensitive to bright lights or visual clutter",
      "Poor depth perception or spatial awareness",
      "Loses place when reading or copying from the board",
    ],
  },
  {
    name: "Auditory (Hearing)",
    desc: "Processes sound — volume, pitch, and the meaning of language. Auditory processing issues affect attention, communication, and learning in noisy environments.",
    signs: [
      "Covers ears at loud or unexpected sounds",
      "Difficulty following verbal instructions in noisy settings",
      "Appears not to hear when spoken to",
      "Hypersensitive to certain sounds (vacuum, hand dryer)",
    ],
  },
  {
    name: "Gustatory (Taste) & Olfactory (Smell)",
    desc: "These senses strongly influence feeding behavior. Children who are over-responsive to taste or smell may be extremely selective eaters; under-responsive children may chew or smell non-food items.",
    signs: [
      "Extremely picky eating based on smell or flavor",
      "Gags or vomits at certain foods",
      "Mouths or sniffs non-food objects frequently",
      "Difficulty tolerating food textures or smells at mealtime",
    ],
  },
  {
    name: "Interoception (Internal Body Signals)",
    desc: "The sense that tells us what's happening inside our bodies — hunger, thirst, temperature, heartbeat, and emotions. Difficulties here affect self-regulation and emotional awareness.",
    signs: [
      "Doesn't recognize hunger or thirst cues",
      "Has difficulty identifying their own emotional state",
      "Overreacts or underreacts to pain",
      "Difficulty calming down after emotional upset",
    ],
  },
];

export default function ResourcesPage() {
  const [active, setActive] = useState(0);

  const renderMilestones = (milestones: typeof speechMilestones) => (
    <div className="space-y-6">
      {milestones.map((group) => (
        <div key={group.age} className="bg-white border border-[#B8E4F0] rounded-xl p-5">
          <h3 className="font-bold text-[#24B5D0] text-sm uppercase tracking-wide mb-3">{group.age}</h3>
          <ul className="space-y-2">
            {group.skills.map((skill) => (
              <li key={skill} className="flex items-start gap-3 text-sm text-[#4a7a8a]">
                <CheckCircle size={15} className="text-[#24B5D0] mt-0.5 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-xs text-gray-400 mt-4">
        * Milestones are general guidelines. Development varies across children. If you have concerns about your child&apos;s development, contact our team for a screening.
      </p>
    </div>
  );

  return (
    <>
      <section className="bg-[#EAF6FB] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1e3a4a] mb-4">Resources for Families</h1>
          <p className="text-lg text-[#4a7a8a]">
            Developmental milestones, sensory guides, and information for students and volunteers.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-[#B8E4F0] sticky top-[64px] z-40">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2 min-w-max">
            {tabs.map((t, i) => {
              const TabIcon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
                    active === i ? "bg-[#24B5D0] text-white" : "text-[#4a7a8a] hover:bg-[#EAF6FB]"
                  }`}
                >
                  <TabIcon size={15} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {active === 0 && (
            <>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-2">Speech & Language Milestones</h2>
              <p className="text-[#4a7a8a] mb-8">A guide to typical communication development from birth through age 5.</p>
              {renderMilestones(speechMilestones)}
            </>
          )}
          {active === 1 && (
            <>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-2">Gross Motor Milestones</h2>
              <p className="text-[#4a7a8a] mb-8">Typical physical development milestones from birth through age 5.</p>
              {renderMilestones(grossMilestones)}
            </>
          )}
          {active === 2 && (
            <>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-2">Fine Motor Milestones</h2>
              <p className="text-[#4a7a8a] mb-8">Hand and finger skill development from birth through age 5.</p>
              {renderMilestones(fineMilestones)}
            </>
          )}
          {active === 3 && (
            <>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-2">Sensory Processing Indicators</h2>
              <p className="text-[#4a7a8a] mb-8">
                The 7 sensory systems and signs that may indicate a child could benefit from sensory integration therapy.
              </p>
              <div className="space-y-6">
                {sensorySystems.map((sys) => (
                  <div key={sys.name} className="bg-white border border-[#B8E4F0] rounded-xl p-6">
                    <h3 className="font-bold text-[#1e3a4a] text-lg mb-2">{sys.name}</h3>
                    <p className="text-[#4a7a8a] text-sm leading-relaxed mb-4">{sys.desc}</p>
                    <h4 className="font-semibold text-[#4a7a8a] text-sm mb-2">Signs to watch for:</h4>
                    <ul className="space-y-2">
                      {sys.signs.map((sign) => (
                        <li key={sign} className="flex items-start gap-3 text-sm text-[#4a7a8a]">
                          <CheckCircle size={15} className="text-[#FAFCAA] mt-0.5 shrink-0" />
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
          {active === 4 && (
            <>
              <h2 className="text-2xl font-bold text-[#1e3a4a] mb-2">Student & Volunteer Requests</h2>
              <p className="text-[#4a7a8a] mb-8">
                Interested in observing, volunteering, or completing a clinical placement at Coastal Pediatric Therapy Center?
              </p>
              <div className="bg-[#EAF6FB] rounded-2xl p-8 max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <GraduationCap size={20} className="text-[#24B5D0]" />
                  </div>
                  <h3 className="font-bold text-[#1e3a4a]">Contact Our Clinic</h3>
                </div>
                <p className="text-[#4a7a8a] text-sm leading-relaxed mb-3">
                  We accept observation requests and student placement inquiries on a case-by-case basis. Please email us with your program, degree level, preferred discipline (Speech, OT, or PT), and desired dates.
                </p>
                <p className="text-[#4a7a8a] text-sm leading-relaxed mb-5">
                  All student observers and volunteers are required to complete a background check and agree to our HIPAA and confidentiality policies before beginning any observation or clinical hours.
                </p>
                <a
                  href="mailto:info@coastaltherapy.net?subject=Student%20Observation%20Request"
                  className="inline-flex items-center gap-2 bg-[#24B5D0] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1A9EC0] transition"
                >
                  Email Us Your Request
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Pediatric Development Resources",
            "url": "https://coastaltherapy.net/resources",
            "description": "Speech, motor, and sensory development milestones and resources for families from Coastal Pediatric Therapy Center in Jacksonville, FL.",
            "provider": {
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
