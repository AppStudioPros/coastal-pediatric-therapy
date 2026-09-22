import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coastal Therapy Blog | Pediatric Therapy Tips & Resources',
  description: 'Tips, resources, and insights on pediatric speech, occupational, and physical therapy from the team at Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL.',
}

const posts = [
  { slug: 'speech-therapy-introducing-the-g-sound', title: 'Speech Therapy: Introducing the G Sound', date: 'May 24, 2023', category: 'Speech Therapy', excerpt: 'Replacing /d/ for /g/ is called phonological "fronting." Learn how our SLPs help children produce back sounds correctly.' },
  { slug: '5-easy-ways-to-incorporate-sensory-play', title: '5 Easy Ways to Incorporate Sensory Play', date: 'April 25, 2023', category: 'Occupational Therapy', excerpt: 'Sensory play builds nerve connections in the brain. Here are 5 easy, affordable ways to incorporate it at home.' },
  { slug: 'physical-therapy-for-torticollis', title: 'Physical Therapy for Torticollis', date: 'March 28, 2023', category: 'Physical Therapy', excerpt: 'Congenital Muscular Torticollis affects around 3% of babies. Learn how early physical therapy can correct it completely.' },
  { slug: 'world-down-syndrome-day', title: 'World Down Syndrome Day!', date: 'March 21, 2023', category: 'Community', excerpt: 'Every year on March 21st we celebrate World Down Syndrome Day to recognize the abilities of people with Down Syndrome.' },
  { slug: 'sisters-4-sight-my-familys-journey-through-gene-replacement-therapy', title: "Sisters 4 Sight: My Family's Journey Through Gene Replacement Therapy", date: 'September 11, 2020', category: 'Family Stories', excerpt: "One family's journey through rare vision conditions — and why early intervention makes all the difference." },
  { slug: 'how-to-reduce-back-to-school-anxiety', title: 'How to Reduce Back-to-School Anxiety', date: 'September 11, 2020', category: 'Parent Tips', excerpt: 'Practical tips to help your child transition smoothly into the new school year and manage back-to-school anxiety.' },
  { slug: 'common-myths-and-misconceptions-about-aac', title: 'Common Myths and Misconceptions About AAC', date: 'September 11, 2020', category: 'Speech Therapy', excerpt: 'AAC does not hinder speech — it helps. Busting the most common myths about Augmentative and Alternative Communication.' },
  { slug: 'phonological-disorders-tan-we-do-play-a-dame', title: 'Phonological Disorders: "Tan we do play a dame?"', date: 'September 11, 2020', category: 'Speech Therapy', excerpt: 'Learn about phonological patterns like fronting, stopping, and final consonant deletion — and how speech therapy helps.' },
  { slug: 'is-it-ok-if-my-baby-always-holds-their-head-tilted-to-the-same-side', title: 'Is It Ok if My Baby Always Holds Their Head Tilted to the Same Side?', date: 'September 11, 2020', category: 'Physical Therapy', excerpt: 'Always looking one direction could be Torticollis. Learn the signs and how early physical therapy can help.' },
]

const categoryColors: Record<string, string> = {
  'Speech Therapy': '#1e7faa',
  'Occupational Therapy': '#2a9d8f',
  'Physical Therapy': '#e76f51',
  'Community': '#6a4c93',
  'Family Stories': '#f4a261',
  'Parent Tips': '#457b9d',
}

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Coastal Therapy Blog</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '560px', lineHeight: 1.6 }}>
            Tips, resources, and insights from our therapists in Jacksonville Beach and Mandarin, FL.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.5rem' }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/coastal-therapy-blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden', height: '100%', transition: 'box-shadow 0.2s' }}>
                <div style={{ height: '4px', backgroundColor: categoryColors[post.category] || '#1e7faa' }} />
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: categoryColors[post.category] || '#1e7faa' }}>
                    {post.category}
                  </span>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e3a5f', margin: '0.5rem 0 0.75rem', lineHeight: 1.4 }}>{post.title}</h2>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.65, marginBottom: '1rem' }}>{post.excerpt}</p>
                  <p style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
