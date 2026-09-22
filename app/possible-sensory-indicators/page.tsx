import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Possible Indicators of Sensory Processing Differences | Coastal Pediatric Therapy',
  description: 'Learn the signs of sensory processing differences in children across auditory, visual, tactile, vestibular, and proprioceptive systems. Coastal Pediatric Therapy Center serves Jacksonville Beach and Mandarin, FL.',
}

const categories = [
  {
    title: 'Auditory',
    items: [
      'Bothered by ordinary household sounds (vacuum cleaner, toilet flushing)',
      'Responds negatively to loud noises (crying, holding hands over ears)',
      'Easily distracted by background noises',
      'Does not appear to hear what you are saying or respond to name',
      'Likes certain sounds repeatedly',
    ],
  },
  {
    title: 'Visual',
    items: [
      'Bothered by bright lights (sun) or fluorescent lights',
      'Difficulty finding objects in competing backgrounds',
      'Demonstrates poor eye contact',
      'Difficulty catching a ball and copying words from the board',
      'Enjoys watching objects move and spin',
    ],
  },
  {
    title: 'Tactile',
    items: [
      'Avoids messy play',
      'Dislikes standing in line next to others',
      'Prefers to touch instead of being touched',
      'Dislikes teeth brushing, nail clipping, hair brushing',
      'Picky eating (textures)',
      'High tolerance for pain',
    ],
  },
  {
    title: 'Vestibular',
    items: [
      'Wiggles around during seated activities',
      'Craves spinning, swinging, and rocking',
      'Likes being upside down',
      'Is afraid of movement; avoids playground equipment',
      'Fears having head tilted backward',
      'Is afraid to sit on a toilet',
      'Experiences car sickness',
      'Demonstrates poor balance',
    ],
  },
  {
    title: 'Proprioceptive',
    items: [
      'Seeks activities such as pushing, pulling, dragging, lifting, and jumping',
      'Difficulty grading force exerted (holding pencil too tightly or loosely, slamming doors)',
      'Bumps or pushes other children',
      'Seems unsure of how far to raise or lower body during movement activities',
      'Appears to have decreased coordination',
    ],
  },
  {
    title: 'Arousal & Attention',
    items: [
      'Hyperactive and difficult to calm',
      'Difficulty modulating emotional response',
      'Startles easily',
      'Difficult to arouse and does not react to loud sounds, bright lights, etc.',
      'Difficulty completing tasks',
      'Difficulty transitioning from one task to another',
    ],
  },
  {
    title: 'Olfactory',
    items: [
      'Complains of things "smelling bad"',
      'Notices how people smell',
      'Reacts violently to smells',
      'Smells objects constantly',
      'Prefers highly spiced or totally bland foods',
      'Chooses a very limited repertoire of foods (e.g., prefers smooth vs. textured)',
    ],
  },
]

const faqs = [
  {
    q: 'What is sensory processing disorder (SPD)?',
    a: 'Sensory Processing Disorder occurs when the brain has difficulty receiving and responding to sensory information. Children may be over- or under-sensitive to touch, sound, movement, or other sensory input, affecting daily functioning.',
  },
  {
    q: 'Can occupational therapy help with sensory processing differences?',
    a: 'Yes. Occupational therapists trained in sensory integration use play-based activities to help children process sensory information more effectively, improving their ability to participate in daily activities and school.',
  },
  {
    q: 'Does Coastal Pediatric Therapy Center treat sensory processing differences?',
    a: 'Yes. Our occupational therapists evaluate and treat sensory processing differences at our Jacksonville Beach and Mandarin, FL locations. Call (904) 372-4070 to schedule an evaluation.',
  },
]

export default function SensoryIndicatorsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        name: 'Possible Indicators of Sensory Processing Differences in Children',
        description: 'Signs of sensory processing differences across auditory, visual, tactile, vestibular, proprioceptive, arousal, and olfactory systems.',
        url: 'https://coastaltherapy.net/possible-sensory-indicators',
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
          { '@type': 'ListItem', position: 3, name: 'Possible Sensory Indicators', item: 'https://coastaltherapy.net/possible-sensory-indicators' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> › <Link href="/parent-resources" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Parent Resources</Link> › Possible Sensory Indicators
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
              Possible Indicators of Sensory Processing Differences
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '680px', lineHeight: 1.6 }}>
              Every child processes sensory information differently. The indicators below may suggest a sensory processing difference that could benefit from occupational therapy evaluation.
            </p>
            <Link href="/new-patient-request-form" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>
              Request an Evaluation
            </Link>
          </div>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.5rem' }}>
            {categories.map((cat) => (
              <div key={cat.title} style={{ backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#1e7faa', padding: '0.75rem 1.5rem' }}>
                  <h2 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>{cat.title}</h2>
                </div>
                <ul style={{ margin: 0, padding: '1.25rem 1.5rem', listStyle: 'none' }}>
                  {cat.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.35rem 0', fontSize: '0.9rem', color: '#374151', borderBottom: i < cat.items.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                      <span style={{ color: '#1e7faa', fontWeight: 700, flexShrink: 0 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#856404' }}>
              <strong>Note:</strong> The presence of any of these indicators alone does not necessarily mean your child has a sensory processing disorder. A formal evaluation by a licensed occupational therapist is needed for proper assessment.
            </p>
          </div>
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Seeing signs of sensory differences?</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Our occupational therapists provide comprehensive sensory evaluations in Jacksonville Beach and Mandarin, FL.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/new-patient-request-form" style={{ padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Get Started</Link>
            <a href="tel:9043724070" style={{ padding: '0.75rem 2rem', border: '2px solid #fff', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Call (904) 372-4070</a>
          </div>
        </section>
      </div>
    </>
  )
}
