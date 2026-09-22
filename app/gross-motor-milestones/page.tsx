import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gross Motor Milestones | Child Development Guide | Coastal Pediatric Therapy',
  description: 'Review age-appropriate gross motor milestones from 0–5 years. If your child is missing milestones, Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL can help.',
}

const milestones = [
  {
    age: '0–6 Months',
    items: [
      'When positioned on belly, raises head and shoulders',
      'Rolls from front to back',
      'Reaches for object with one hand',
      'Visually tracks people and objects',
      'Props on forearms (6 months)',
    ],
  },
  {
    age: '7–12 Months',
    items: [
      'Rolls from back to belly (6–7 months)',
      'Crawls on stomach; sits independently',
      'Transitions from belly to sitting',
      'Crawls up stairs on belly',
      'Pulls to stand using furniture; stands at supported surface',
      'Cruises on furniture',
      'Walking/ambulation starts to emerge',
    ],
  },
  {
    age: '13–18 Months',
    items: [
      'Independent with ambulation',
      'Pushes to stand by going through 4 point',
      'Stoops and recovers; walks backward and sideways',
      'Starts running but may fall frequently',
      'Ascends stairs using step-to pattern with railing',
      'Throwing a small ball overhead; kicking ball forward',
      'Seats self in a small chair; climbs into an adult chair',
      'Walks up/down stairs holding on to a railing, 2 feet per step (18 mos)',
    ],
  },
  {
    age: '19–24 Months',
    items: [
      'Running becomes more controlled',
      'Stands on one foot briefly',
      'Walks on a line/balance beam with 1 foot on the line',
      'Lowers to pick up objects from the floor without falling',
      'Jumping up with both feet; jumping down from objects',
      'Walks upstairs, both feet per step without rail',
      'Walking backwards emerges',
    ],
  },
  {
    age: '2–3 Years',
    items: [
      'Ascends/descends stairs independently using a step-to pattern',
      'Walking on a line/balance beam with improved balance',
      'Walking on tiptoes; jumping forward',
      'Rides a tricycle',
      'Catches large ball, securing ball by bending arms toward chest',
      'Throws a ball overhand 3–7 feet',
      'Kicks ball forward 3–6 feet using opposing arm/leg movements',
    ],
  },
  {
    age: '3–4 Years',
    items: [
      'Can sustain single leg stance for 5 seconds',
      'Can sustain static tiptoes for 3 seconds',
      'Kicks balls forward with control',
      'Catches a ball with hands, without pulling it to chest',
      'Throws a ball at a target',
      'Hopping on one foot',
      'Galloping and skipping start to emerge',
      'Jumps over objects; jumping jacks start to emerge',
      'Bounce and catch a ball',
    ],
  },
  {
    age: '4–5 Years',
    items: [
      'Skips smoothly; hops on one foot 5+ times',
      'Catches a small ball with hands only',
      'Dribbles a ball several times in a row',
      'Walks heel-to-toe on a line',
      'Pumps legs on a swing',
      'Rides a bike with training wheels',
    ],
  },
]

const faqs = [
  {
    q: 'What is a gross motor delay in children?',
    a: 'A gross motor delay occurs when a child does not reach expected physical milestones — such as sitting, crawling, walking, or running — within the typical age range. Physical therapy can identify and address these delays early.',
  },
  {
    q: 'When should I seek physical therapy for my child?',
    a: 'If your child is consistently missing milestones for their age, seems uncoordinated, has difficulty with balance, or shows asymmetry in movement, a physical therapy evaluation is recommended.',
  },
  {
    q: 'Does Coastal Pediatric Therapy Center offer physical therapy?',
    a: 'Yes. Our licensed physical therapists evaluate and treat children with gross motor delays at our Jacksonville Beach and Mandarin locations. Call (904) 372-4070 to schedule.',
  },
]

export default function GrossMotorMilestonesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        name: 'Gross Motor Milestones for Children',
        description: 'Age-appropriate gross motor development milestones from birth through age 5, from Coastal Pediatric Therapy Center.',
        url: 'https://coastaltherapy.net/gross-motor-milestones',
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
          { '@type': 'ListItem', position: 3, name: 'Gross Motor Milestones', item: 'https://coastaltherapy.net/gross-motor-milestones' },
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
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> › <Link href="/parent-resources" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Parent Resources</Link> › Gross Motor Milestones
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
              Gross Motor Milestones
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', lineHeight: 1.6 }}>
              Review your child&apos;s physical development milestones from birth through age 5. Physical therapy can help children who are falling behind.
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Is your child missing motor milestones?</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Our physical therapists serve families in Jacksonville Beach and Mandarin, FL.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/new-patient-request-form" style={{ padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Get Started</Link>
            <a href="tel:9043724070" style={{ padding: '0.75rem 2rem', border: '2px solid #fff', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Call (904) 372-4070</a>
          </div>
        </section>
      </div>
    </>
  )
}
