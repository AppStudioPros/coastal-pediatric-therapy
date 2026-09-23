import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet Our Team | Coastal Pediatric Therapy Center',
  description: 'Meet the compassionate, highly skilled therapists at Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL. Speech, Occupational, and Physical Therapists dedicated to helping children thrive.',
}

const team = [
  { name: 'Tayler Spang', role: 'Pediatric Physical Therapist', photo: '/images/team/tayler.jpg', initials: 'TS' },
  { name: 'Emily Peoples', role: 'Pediatric Occupational Therapist', photo: '/images/team/emily.jpg', initials: 'EP' },
  { name: 'Danielle Tenny', role: 'Occupational Therapist', photo: '/images/team/danielle.jpg', initials: 'DT' },
  { name: 'Mary Kate', role: 'Occupational Therapist', photo: '/images/team/mary-kate.jpg', initials: 'MK' },
  { name: 'Elizabeth', role: 'Pediatric Physical Therapist', photo: '/images/team/elizabeth.jpg', initials: 'E' },
  { name: 'Janine King', role: 'Pediatric Occupational Therapist', photo: '/images/team/janine.jpg', initials: 'JK' },
  { name: 'Kaylee Janusko', role: 'Pediatric Physical Therapist', photo: '/images/team/kaylee.jpg', initials: 'KJ' },
  { name: 'Rebecca Kinnaird', role: 'Patient Services Coordinator', photo: '/images/team/rebecca.jpg', initials: 'RK' },
]

export default function OurTeamPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Coastal Pediatric Therapy Center',
    url: 'https://coastaltherapy.net',
    employee: team.map(m => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
      worksFor: { '@type': 'MedicalOrganization', name: 'Coastal Pediatric Therapy Center' },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>

        {/* Hero */}
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> › Our Team
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
              Meet Our Team
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', lineHeight: 1.65 }}>
              Our compassionate, highly skilled therapists work one-on-one with each child to build confidence, improve developmental skills, and exceed therapeutic goals.
            </p>
          </div>
        </section>

        {/* Team header photo */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem 0' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <Image
              src="/images/team/team-header.jpg"
              alt="Coastal Pediatric Therapy Center team"
              width={860}
              height={280}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </section>

        {/* Team grid */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '1.5rem' }}>
            {team.map((member) => (
              <div key={member.name} style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ position: 'relative', height: '220px', backgroundColor: '#e8f4f8' }}>
                  <Image
                    src={member.photo}
                    alt={`${member.name} — ${member.role} at Coastal Pediatric Therapy Center`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
                <div style={{ padding: '1rem 0.75rem' }}>
                  <h2 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '0.25rem' }}>{member.name}</h2>
                  <p style={{ fontSize: '0.8rem', color: '#1e7faa', fontWeight: 600, margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission blurb */}
        <section style={{ backgroundColor: '#fff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '3rem 1.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e3a5f', marginBottom: '1rem' }}>Built on Collaboration &amp; Compassion</h2>
            <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: 1.8, marginBottom: '1rem' }}>
              We are a multidisciplinary team of speech-language pathologists, occupational therapists, and physical therapists who collaborate to provide whole-child care. Rather than treating symptoms in isolation, we look at each child as a whole person and work together to develop coordinated treatment plans.
            </p>
            <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: 1.8, margin: 0 }}>
              In practice since 1996, serving Jacksonville Beach and Mandarin, FL.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Ready to meet us in person?</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Request a new patient evaluation and let us build a therapy plan for your child.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/new-patient-request-form" style={{ padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Request an Evaluation</Link>
            <a href="tel:9043724070" style={{ padding: '0.75rem 2rem', border: '2px solid #fff', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Call (904) 372-4070</a>
          </div>
        </section>
      </div>
    </>
  )
}
