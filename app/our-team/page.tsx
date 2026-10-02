import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Meet Our Team | Coastal Pediatric Therapy Center',
  description: 'Meet the compassionate, highly skilled therapists at Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL. Speech, Occupational, and Physical Therapists dedicated to helping children thrive.',
}

export default async function OurTeamPage() {
  const supabase = createAdminClient()
  const { data: team } = await supabase
    .from('coastal_staff')
    .select('id, name, role, photo_url, photo_focal_x, photo_focal_y, display_order')
    .eq('active', true)
    .order('display_order', { ascending: true })

  const hasStaff = team && team.length > 0

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Coastal Pediatric Therapy Center',
    url: 'https://coastaltherapy.net',
    employee: hasStaff ? team.map((m: { name: string; role: string }) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
      worksFor: { '@type': 'MedicalOrganization', name: 'Coastal Pediatric Therapy Center' },
    })) : [],
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
          {hasStaff ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '1.5rem' }}>
              {team.map((member: { id: string; name: string; role: string; photo_url: string | null; photo_focal_x?: number | null; photo_focal_y?: number | null }) => (
                <div key={member.id} style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', textAlign: 'center' }}>
                  <div style={{ position: 'relative', height: '220px', backgroundColor: '#e8f4f8' }}>
                    {member.photo_url ? (
                      <Image
                        src={member.photo_url}
                        alt={`${member.name} — ${member.role} at Coastal Pediatric Therapy Center`}
                        fill
                        style={{ objectFit: 'cover', objectPosition: `${member.photo_focal_x ?? 50}% ${member.photo_focal_y ?? 20}%` }}
                      />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '2rem', fontWeight: 800, color: '#1e7faa' }}>
                        {member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1rem 0.75rem' }}>
                    <h2 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '0.25rem' }}>{member.name}</h2>
                    <p style={{ fontSize: '0.8rem', color: '#1e7faa', fontWeight: 600, margin: 0 }}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌊</div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1e3a5f', marginBottom: '0.5rem' }}>Team Profiles Coming Soon</h2>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto', lineHeight: 1.7 }}>
                We are updating our team page. In the meantime, feel free to reach out and we will be happy to answer any questions about our therapists and staff.
              </p>
              <a href="tel:9043724070" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.7rem 1.75rem', backgroundColor: '#1e7faa', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>
                Call (904) 372-4070
              </a>
            </div>
          )}
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
