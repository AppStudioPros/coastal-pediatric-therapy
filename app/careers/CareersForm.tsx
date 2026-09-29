'use client'

import { useState, useRef } from 'react'
import { Upload, X, CheckCircle } from 'lucide-react'

const BLUE = '#1e7faa'
const NAVY = '#1e3a5f'

const inputClass = `w-full border rounded-lg px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1e7faa]`
const inputStyle = { borderColor: '#d1e5ef', color: NAVY }

export default function CareersForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    position: '', licenseNum: '', experience: '', heardFrom: '', coverLetter: '',
  })
  const [resume, setResume] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  function set(field: string, val: string) { setForm(f => ({ ...f, [field]: val })) }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.position || !form.experience) {
      setError('Please fill in all required fields.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      if (resume) fd.append('resume', resume)

      const res = await fetch('/api/careers', { method: 'POST', body: fd })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Submission failed')
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={52} className="mx-auto mb-4" style={{ color: BLUE }} />
        <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Application Received!</h3>
        <p className="text-sm" style={{ color: '#4b5563' }}>
          Thank you for your interest in joining Coastal Pediatric Therapy Center.
          Our hiring team will review your application and be in touch if there is a match.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">{error}</div>}

      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>First Name *</label>
          <input className={inputClass} style={inputStyle} value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Sarah" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>Last Name *</label>
          <input className={inputClass} style={inputStyle} value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Mitchell" />
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>Email *</label>
          <input type="email" className={inputClass} style={inputStyle} value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@email.com" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>Phone *</label>
          <input type="tel" className={inputClass} style={inputStyle} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="(904) 000-0000" />
        </div>
      </div>

      {/* Position */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>Position Applying For *</label>
        <select className={inputClass} style={{ ...inputStyle, backgroundColor: '#fff' }} value={form.position} onChange={e => set('position', e.target.value)}>
          <option value="">Select a position</option>
          <option>Speech-Language Pathologist (SLP)</option>
          <option>Occupational Therapist (OT)</option>
          <option>Physical Therapist (PT)</option>
          <option>Speech-Language Pathology Assistant (SLP-A)</option>
          <option>Certified Occupational Therapy Assistant (COTA)</option>
          <option>Physical Therapy Assistant (PTA)</option>
          <option>Patient Services Coordinator</option>
          <option>Student Volunteer / Clinical Placement</option>
          <option>Other</option>
        </select>
      </div>

      {/* License + Experience */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>
            License / Certification # <span className="font-normal normal-case text-gray-400">(if applicable)</span>
          </label>
          <input className={inputClass} style={inputStyle} value={form.licenseNum} onChange={e => set('licenseNum', e.target.value)} placeholder="FL-12345" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>Years of Experience *</label>
          <select className={inputClass} style={{ ...inputStyle, backgroundColor: '#fff' }} value={form.experience} onChange={e => set('experience', e.target.value)}>
            <option value="">Select</option>
            <option>Student / New Graduate</option>
            <option>Less than 1 year</option>
            <option>1-2 years</option>
            <option>3-5 years</option>
            <option>6-10 years</option>
            <option>10+ years</option>
          </select>
        </div>
      </div>

      {/* Resume upload */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>Resume</label>
        {resume ? (
          <div className="flex items-center gap-3 border rounded-lg px-4 py-3" style={{ borderColor: BLUE, backgroundColor: '#f0f9ff' }}>
            <span className="text-sm flex-1" style={{ color: NAVY }}>{resume.name}</span>
            <button type="button" onClick={() => { setResume(null); if (fileRef.current) fileRef.current.value = '' }} style={{ color: '#e53e3e', background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}>
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center h-24 border-2 border-dashed rounded-lg cursor-pointer transition-colors hover:bg-blue-50/30" style={{ borderColor: '#d1e5ef' }}>
            <Upload size={18} style={{ color: BLUE, marginBottom: '4px' }} />
            <span className="text-sm" style={{ color: NAVY }}>Upload resume (PDF, Word, or DOCX)</span>
            <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) setResume(f) }} />
          </label>
        )}
      </div>

      {/* Cover letter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>Cover Letter / Additional Info</label>
        <textarea className={inputClass} style={inputStyle} rows={5} value={form.coverLetter} onChange={e => set('coverLetter', e.target.value)} placeholder="Tell us a little about yourself, your background, and why you are interested in joining our team..." />
      </div>

      {/* How did you hear */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: NAVY }}>How Did You Hear About Us?</label>
        <select className={inputClass} style={{ ...inputStyle, backgroundColor: '#fff' }} value={form.heardFrom} onChange={e => set('heardFrom', e.target.value)}>
          <option value="">Select</option>
          <option>Indeed</option>
          <option>LinkedIn</option>
          <option>Google</option>
          <option>Referred by a colleague</option>
          <option>Referred by a current employee</option>
          <option>University / Clinical Program</option>
          <option>Social Media</option>
          <option>Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-lg font-bold text-white transition-opacity"
        style={{ backgroundColor: BLUE, opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
      >
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>

      <p className="text-xs text-center" style={{ color: '#9ca3af' }}>
        Applications go directly to our hiring team at apply@coastaltherapy.net
      </p>
    </form>
  )
}
