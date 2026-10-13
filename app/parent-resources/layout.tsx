import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parent Resources | Pediatric Therapy Tips & Guides | Coastal Pediatric Therapy',
  description: 'Resources for parents of children in therapy. Home exercise tips, milestone guides, and support materials from the team at Coastal Pediatric Therapy Center in Jacksonville, FL.',
  openGraph: {
    title: 'Parent Resources | Coastal Pediatric Therapy Center',
    description: 'Helpful guides, home exercise tips, and milestone resources for families.',
    url: 'https://coastaltherapy.net/parent-resources',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
