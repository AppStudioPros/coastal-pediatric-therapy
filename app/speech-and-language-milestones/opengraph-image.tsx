import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Speech and Language Milestones | Coastal Pediatric Therapy Center'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', backgroundColor: '#1e7faa', position: 'relative' }}>
        {/* Left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 8, backgroundColor: '#ffffff', display: 'flex' }} />

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ width: 40, height: 3, backgroundColor: '#fff', borderRadius: 2, display: 'flex' }} />
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Coastal Pediatric Therapy Center</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 24 }}>
            <span style={{ fontSize: 56, fontWeight: 800, color: '#ffffff', lineHeight: 1.15 }}>Speech & Language</span>
            <span style={{ fontSize: 56, fontWeight: 800, color: '#ffffff', lineHeight: 1.15 }}>Milestones</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 40 }}>
            <span style={{ fontSize: 22, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>Age-by-age communication milestones from birth through age 7.</span>
            <span style={{ fontSize: 22, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>Jacksonville Beach & Mandarin, FL · (904) 372-4070</span>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['0–6 Mo', '1–2 Yrs', '2–3 Yrs', '3–4 Yrs', '5–6 Yrs'].map(age => (
              <div key={age} style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 6, padding: '8px 16px' }}>
                <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>{age}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
