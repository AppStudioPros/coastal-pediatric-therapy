import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Coastal Pediatric Therapy Center | Jacksonville FL',
  description: 'Meet the team at Coastal Pediatric Therapy Center. Serving Jacksonville Beach and Mandarin families since 1996 with expert speech, occupational, and physical therapy for children.',
  openGraph: {
    title: 'About Coastal Pediatric Therapy Center',
    description: 'Serving Jacksonville Beach and Mandarin families since 1996 with expert pediatric therapy.',
    url: 'https://coastaltherapy.net/about',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
