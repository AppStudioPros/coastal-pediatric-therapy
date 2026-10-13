import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Physician Resources | Refer a Patient | Coastal Pediatric Therapy Center',
  description: 'Referring physician resources from Coastal Pediatric Therapy Center. Referral forms, insurance accepted, and therapy program overview. Serving Jacksonville Beach and Mandarin, FL.',
  openGraph: {
    title: 'Physician Resources | Coastal Pediatric Therapy Center',
    description: 'Referral information and resources for physicians. Speech, OT, and PT for pediatric patients in Jacksonville, FL.',
    url: 'https://coastaltherapy.net/physician-resources',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
