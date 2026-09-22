import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fine Motor Milestones | Child Development Guide | Coastal Pediatric Therapy',
  description: 'Review age-appropriate fine motor milestones from 0–6 years. Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL offers occupational therapy for children with fine motor delays.',
}

const milestones = [
  {
    age: '0–5 Months',
    items: [
      'Grasps rattle; holds rattle for 30 seconds',
      'Lying on back, reaches for toy',
      'Follows object with eyes',
      'Holds hands together; puts hands in mouth',
      'Places both hands on bottle',
    ],
  },
  {
    age: '6–8 Months',
    items: [
      'Transfers toy from one hand to the other',
      'Uses raking grasp to move objects',
      'Takes objects to mouth',
      'Bangs cup on table; lifts cup by handle',
      'Holds own bottle; begins to hold spoon',
      'Reaches & grasps objects with extended elbow',
      'Crawls; pulls up; removes sock',
    ],
  },
  {
    age: '9–11 Months',
    items: [
      'Drinks from cup with assistance',
      'Grabs a crayon with a fisted grasp',
      'Holds, bites, and chews cracker or cookies',
      'Bangs 2 cubes held in hand at midline',
      'Pokes with index finger; uncovers toy seen hidden',
      'Finger feeds self; holds spoon',
      'Cooperates with dressing by extending arm/leg',
      'Stacks 1 block; removes both socks',
    ],
  },
  {
    age: '12–14 Months',
    items: [
      'Scribbles; waves goodbye',
      'Takes off shoes; drinks from cup',
      'Picks up 2 small cubes with one hand',
      'Brings spoon to mouth; opens book',
      'Walks independently',
    ],
  },
  {
    age: '15–18 Months',
    items: [
      'Throws objects',
      'Indicates discomfort over soiled pants',
      'Removes hat; unzips zipper; removes both socks',
      'Drinks from cup with some spilling; sucks a straw',
    ],
  },
  {
    age: '19–24 Months',
    items: [
      'Builds 4–6 cube tower',
      'Feeds self with spoon',
      'Zips/unzips large zipper; turns door knob',
      'Imitates vertical & horizontal lines',
      'Gives up bottle; helps with simple household tasks',
      'Tries to play catch; undresses completely',
      'Drinks from cup independently',
    ],
  },
  {
    age: '2–3 Years',
    items: [
      'Stacks 8–10 blocks; strings 2–4 beads',
      'Removes most clothes',
      'Imitates vertical, horizontal, circular strokes',
      'Manipulates play dough; matches a square, circle, triangle',
      'Snips with scissors; knows main body parts',
      'Helps put things away; unbuttons large buttons',
      'May reject many foods; dresses with supervision; uses fork',
    ],
  },
  {
    age: '3–4 Years',
    items: [
      'Builds 10-block tower',
      'Draws a person with 2–4 parts',
      'Helps with bathing; cuts paper into 2 pieces',
      'Unbuttons 3 buttons; dresses without supervision',
    ],
  },
  {
    age: '4–5 Years',
    items: [
      'Manipulates fasteners; connects dots',
      'Draws a square',
      'Touches each finger to thumb',
      'Grasps marker between thumb & pad of index finger',
      'Distinguishes front/back of clothing',
    ],
  },
  {
    age: '5–6 Years',
    items: [
      'Copies triangle, diamond',
      'Draws a person with at least 7 parts',
      'Prints letters; spreads with knife',
      'No toiletry accidents; brushes teeth independently',
      'Ties shoes; catches a tennis ball; cuts with knife',
    ],
  },
]

const faqs = [
  {
    q: 'What are fine motor skills in children?',
    a: 'Fine motor skills involve the small muscles of the hands and fingers used for tasks like grasping, writing, buttoning, and using utensils. They are essential for school readiness and daily living.',
  },
  {
    q: 'What causes fine motor delays?',
    a: 'Fine motor delays can be caused by developmental conditions, muscle weakness, sensory processing differences, or neurological factors. An occupational therapist can identify the root cause and create a targeted treatment plan.',
  },
  {
    q: 'Does Coastal Pediatric Therapy Center offer occupational therapy?',
    a: 'Yes. Our licensed occupational therapists evaluate and treat fine motor delays at our Jacksonville Beach and Mandarin locations. Call (904) 372-4070 to request an evaluation.',
  },
]

export default function FineMotorMilestonesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        name: 'Fine Motor Milestones for Children',
        description: 'Age-appropriate fine motor development milestones from birth through age 6, from Coastal Pediatric Therapy Center.',
        url: 'https://coastaltherapy.net/fine-motor-milestones',
        publisher: {
          '@type': 'MedicalOrganization',
          name: 'Coastal Pediatric Therapy Center',
          telephone: '(904) 372-4070',
          url: 'https://coastaltherapy.net',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coastaltherapy.net' },
          { '@type': 'ListItem', position: 2, name: 'Parent Resources', item: 'https://coastaltherapy.net/parent-resources' },
          { '@type': 'ListItem', position: 3, name: 'Fine Motor Milestones', item: 'https://coastaltherapy.net/fine-motor-milestones' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> › <Link href="/parent-resources" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Parent Resources</Link> › Fine Motor Milestones
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
              Fine Motor Milestones
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', lineHeight: 1.6 }}>
              Review your child&apos;s fine motor development from birth through age 6. Our occupational therapists can help children who are falling behind.
            </p>
            <Link href="/new-patient-request-form" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>
              Request an Evaluation
            </Link>
          </div>
        </section>

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {milestones.map((group) => (
              <div key={group.age} style={{ backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#1e7faa', padding: '0.75rem 1.5rem' }}>
                  <h2 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{group.age}</h2>
                </div>
                <ul style={{ margin: 0, padding: '1.25rem 1.5rem', listStyle: 'none' }}>
                  {group.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.35rem 0', fontSize: '0.95rem', color: '#374151', borderBottom: i < group.items.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                      <span style={{ color: '#1e7faa', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '0.5rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Concerned about your child&apos;s fine motor skills?</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Our occupational therapists serve families in Jacksonville Beach and Mandarin, FL.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/new-patient-request-form" style={{ padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Get Started</Link>
            <a href="tel:9043724070" style={{ padding: '0.75rem 2rem', border: '2px solid #fff', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Call (904) 372-4070</a>
          </div>
        </section>
      </div>
    </>
  )
}
