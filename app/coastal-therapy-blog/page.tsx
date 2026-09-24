import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

export const metadata: Metadata = {
  title: 'Coastal Therapy Blog | Pediatric Therapy Tips & Resources',
  description: 'Tips, resources, and insights on pediatric speech, occupational, and physical therapy from the team at Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL.',
}

export const dynamic = 'force-dynamic'
export const revalidate = 60

const categoryColors: Record<string, string> = {
  'Speech Therapy': '#1e7faa',
  'Occupational Therapy': '#2a9d8f',
  'Physical Therapy': '#e76f51',
  'Community': '#6a4c93',
  'Family Stories': '#f4a261',
  'Parent Tips': '#457b9d',
}

async function getPosts() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data } = await supabase
    .from('coastal_blog_posts')
    .select('slug, title, category, feature_image, meta_description, published_at, hero_position')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  return data ?? []
}

export default async function BlogPage() {
  const posts = await getPosts()

  // Fallback if no posts in DB yet
  if (posts.length === 0) {
    return (
      <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '0.5rem' }}>Coastal Therapy Blog</h1>
            <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '540px', lineHeight: 1.65 }}>
              Tips, resources, and insights from our therapists in Jacksonville Beach and Mandarin, FL.
            </p>
          </div>
        </section>
        <section style={{ maxWidth: '960px', margin: '0 auto', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#6b7280' }}>No posts published yet. Check back soon!</p>
        </section>
      </div>
    )
  }

  const featured = posts[0]
  const rest = posts.slice(1)

  const formatDate = (d: string | null) => {
    if (!d) return ''
    return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '0.5rem' }}>Coastal Therapy Blog</h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '540px', lineHeight: 1.65 }}>
            Tips, resources, and insights from our therapists in Jacksonville Beach and Mandarin, FL.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>

        {/* Featured post */}
        <Link href={`/coastal-therapy-blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '280px' }}>
            <div style={{ position: 'relative', minHeight: '280px', backgroundColor: '#e8f4f8' }}>
              {featured.feature_image && (
                <Image
                  src={featured.feature_image}
                  alt={featured.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: featured.hero_position || 'center 20%' }}
                />
              )}
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {featured.category && (
                <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: categoryColors[featured.category] || '#1e7faa', marginBottom: '0.5rem', display: 'block' }}>
                  {featured.category}
                </span>
              )}
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e3a5f', lineHeight: 1.3, marginBottom: '0.75rem' }}>{featured.title}</h2>
              {featured.meta_description && (
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '1rem' }}>{featured.meta_description}</p>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{formatDate(featured.published_at)}</span>
                <span style={{ fontSize: '0.85rem', color: '#1e7faa', fontWeight: 700 }}>Read more &rsaquo;</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        {rest.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {rest.map(post => (
              <Link key={post.slug} href={`/coastal-therapy-blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', height: '200px', backgroundColor: '#e8f4f8' }}>
                    {post.feature_image && (
                      <Image
                        src={post.feature_image}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover', objectPosition: post.hero_position || 'center 20%' }}
                      />
                    )}
                    {post.category && (
                      <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', backgroundColor: categoryColors[post.category] || '#1e7faa', color: '#fff', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px' }}>
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e3a5f', lineHeight: 1.4, marginBottom: '0.6rem', flexGrow: 1 }}>{post.title}</h2>
                    {post.meta_description && (
                      <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.65, marginBottom: '1rem' }}>{post.meta_description}</p>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{formatDate(post.published_at)}</span>
                      <span style={{ fontSize: '0.8rem', color: '#1e7faa', fontWeight: 700 }}>Read &rsaquo;</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
