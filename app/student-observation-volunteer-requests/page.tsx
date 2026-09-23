import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Student Observation & Volunteer Requests | Coastal Pediatric Therapy Center',
  description: 'Gain hands-on experience in pediatric speech, occupational, and physical therapy at Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL. Learn about our student observation and volunteer program.',
}

const responsibilities = [
  'Help prepare and organize therapy materials and equipment',
  'Disinfect commonly touched surfaces, toys, and equipment',
  'Maintain a clean and organized therapy environment',
  'Respect client confidentiality and follow all privacy policies',
]

const qualifications = [
  'Strong interest in pediatrics, therapy, and/or related healthcare fields',
  'Excellent communication and interpersonal skills',
  'Ability to work effectively with individuals of diverse backgrounds and needs',
  'Reliability and punctuality',
  'Basic understanding of medical terminology is a plus, but not required',
  'Prior experience in a healthcare setting is beneficial but not mandatory',
]

const benefits = [
  'Observe and learn from licensed occupational therapists, speech therapists, and physical therapists',
  'Gain real-world experience applying therapeutic techniques',
  'Build connections with professionals in the field',
  'Strengthen your resume with relevant hands-on healthcare experience',
  'Opportunity to receive a letter of recommendation',
  'Contribute positively to the lives of children receiving therapy',
]

export default function StudentObservationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Student Observer / Volunteer',
    description: 'Gain hands-on experience in pediatric speech, occupational, and physical therapy at Coastal Pediatric Therapy Center.',
    hiringOrganization: {
      '@type': 'MedicalOrganization',
      name: 'Coastal Pediatric Therapy Center',
      url: 'https://coastaltherapy.net',
    },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'US',
    },
    employmentType: 'VOLUNTEER',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coastaltherapy.net' },
        { '@type': 'ListItem', position: 2, name: 'Student Observation & Volunteer', item: 'https://coastaltherapy.net/student-observation-volunteer-requests' },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>

        {/* Hero */}
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> › Student Observation & Volunteer
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
              Student Observation &amp; Volunteer Requests
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '640px', lineHeight: 1.65 }}>
              At Coastal Pediatric Therapy Center, we are passionate about helping children and committed to nurturing the next generation of healthcare professionals.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2rem 2.5rem', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
              Our clinic offers a unique opportunity for students and volunteers to gain hands-on experience in a dynamic and supportive environment. Whether you&apos;re pursuing a career in physical therapy, occupational therapy, speech-language pathology, or any related field, our clinic provides a comprehensive platform for learning and growth.
            </p>
            <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>
              Through our student observation and volunteer programs, you&apos;ll have the chance to work alongside experienced therapists, observe diverse therapeutic techniques, and engage with children and families with various needs.
            </p>
          </div>

          {/* Program Details */}
          <div style={{ backgroundColor: '#1e7faa', borderRadius: '12px', padding: '1.75rem 2rem', color: '#fff', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>Program Details</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem' }}>
              {[
                { label: 'Location', value: 'Jacksonville Beach & Mandarin' },
                { label: 'Position Type', value: 'Volunteer' },
                { label: 'Hours', value: 'Minimum 4 hrs/week for 4 weeks' },
                { label: 'Fields', value: 'OT, SLP, PT & related healthcare' },
              ].map(item => (
                <div key={item.label} style={{ backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.75, marginBottom: '0.25rem' }}>{item.label}</p>
                  <p style={{ fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Three columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {[
              { title: 'Key Responsibilities', items: responsibilities, color: '#1e7faa' },
              { title: 'Qualifications', items: qualifications, color: '#2a9d8f' },
              { title: 'What You Gain', items: benefits, color: '#457b9d' },
            ].map(section => (
              <div key={section.title} style={{ backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div style={{ backgroundColor: section.color, padding: '0.75rem 1.25rem' }}>
                  <h2 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, margin: 0 }}>{section.title}</h2>
                </div>
                <ul style={{ margin: 0, padding: '1.25rem', listStyle: 'none' }}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', padding: '0.35rem 0', fontSize: '0.88rem', color: '#374151', borderBottom: i < section.items.length - 1 ? '1px solid #f1f5f9' : 'none', lineHeight: 1.55 }}>
                      <span style={{ color: section.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '0.75rem' }}>Ready to apply?</h2>
            <p style={{ color: '#4b5563', marginBottom: '1.25rem', lineHeight: 1.65 }}>
              Reach out to our team to express your interest. We&apos;d love to have you join us in making a difference in children&apos;s lives.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:info@coastaltherapy.net" style={{ padding: '0.75rem 2rem', backgroundColor: '#1e7faa', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>
                Email Us
              </a>
              <a href="tel:9043724070" style={{ padding: '0.75rem 2rem', border: '2px solid #1e7faa', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>
                Call (904) 372-4070
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
