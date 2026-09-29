import type { Metadata } from 'next'
import CareersForm from './CareersForm'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Careers | Coastal Pediatric Therapy Center Jacksonville FL',
  description: 'Join the team at Coastal Pediatric Therapy Center. We are looking for passionate speech-language pathologists, occupational therapists, physical therapists, and support staff in Jacksonville Beach and Mandarin, FL.',
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EAF6FB] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1e3a4a] mb-4">Join Our Team</h1>
          <p className="text-lg text-[#4a7a8a] leading-relaxed">
            At Coastal Pediatric Therapy Center, we believe every child deserves the best possible care.
            If you are passionate about pediatric therapy and want to work somewhere that genuinely invests in its clinicians, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a4a] mb-8 text-center">Why Coastal Pediatric?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Collaborative Team', body: 'Our SLPs, OTs, and PTs work side by side. Cross-discipline collaboration is part of how we do things here, not an afterthought.' },
              { title: 'Whole-Child Focus', body: 'We treat the child, not just the diagnosis. You will have time to build real relationships and see real progress.' },
              { title: 'Two Locations', body: 'Jacksonville Beach and Mandarin. Both fully equipped, both surrounded by a team that actually supports each other.' },
            ].map(c => (
              <div key={c.title} className="bg-[#EAF6FB] rounded-xl p-6 border border-[#B8E4F0]">
                <h3 className="font-bold text-[#1e3a4a] mb-2">{c.title}</h3>
                <p className="text-sm text-[#4a7a8a] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-14 px-4 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a4a] mb-2 text-center">Open Positions</h2>
          <p className="text-center text-[#4a7a8a] mb-10 text-sm">We accept applications for all clinical and administrative roles on an ongoing basis.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { role: 'Speech-Language Pathologist (SLP)', type: 'Clinical' },
              { role: 'Occupational Therapist (OT)', type: 'Clinical' },
              { role: 'Physical Therapist (PT)', type: 'Clinical' },
              { role: 'SLP-A / COTA / PTA', type: 'Clinical Assistant' },
              { role: 'Patient Services Coordinator', type: 'Administrative' },
              { role: 'Student Volunteer / Clinical Placement', type: 'Volunteer' },
            ].map(p => (
              <div key={p.role} className="bg-white border border-[#B8E4F0] rounded-xl px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1e3a4a] text-sm">{p.role}</p>
                  <p className="text-xs text-[#4a7a8a] mt-0.5">{p.type}</p>
                </div>
                <a href="#apply" className="text-xs font-bold text-[#24B5D0] hover:underline shrink-0 ml-4">Apply &rsaquo;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a4a] mb-2">Submit Your Application</h2>
          <p className="text-[#4a7a8a] text-sm mb-8">Fill out the form below and our team will be in touch. Applications go directly to our hiring manager.</p>
          <CareersForm />
        </div>
      </section>

      <CTASection />
    </>
  )
}
