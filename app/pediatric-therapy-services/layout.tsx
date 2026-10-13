import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pediatric Therapy Services | Speech, OT & PT | Coastal Pediatric Therapy Center',
  description: 'Speech therapy, occupational therapy, and physical therapy for children in Jacksonville Beach and Mandarin, FL. Play-based, individualized care since 1996. Ages 0–18.',
  openGraph: {
    title: 'Pediatric Therapy Services | Coastal Pediatric Therapy Center',
    description: 'Speech, OT, and PT for children in Jacksonville, FL. Play-based therapy from expert pediatric specialists.',
    url: 'https://coastaltherapy.net/pediatric-therapy-services',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
