import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coastal Therapy Admin',
  description: 'Blog admin panel — Coastal Pediatric Therapy Center',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#f0f7fb', minHeight: '100vh' }}>
      {children}
    </div>
  )
}
