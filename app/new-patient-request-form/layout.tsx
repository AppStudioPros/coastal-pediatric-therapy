import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Patient Request | Coastal Pediatric Therapy Center | Jacksonville FL',
  description: 'Request a new patient appointment at Coastal Pediatric Therapy Center. We see children for speech, occupational, and physical therapy in Jacksonville Beach and Mandarin, FL.',
  openGraph: {
    title: 'New Patient Request | Coastal Pediatric Therapy Center',
    description: 'Start your child\'s therapy journey. Request an appointment at our Jacksonville Beach or Mandarin locations.',
    url: 'https://coastaltherapy.net/new-patient-request-form',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
