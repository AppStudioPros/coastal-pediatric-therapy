import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

export const dynamicParams = true
export const revalidate = 60

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = getSupabase()
  const { data: post } = await supabase
    .from('coastal_blog_posts')
    .select('title, meta_description, feature_image')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Coastal Pediatric Therapy Blog`,
    description: post.meta_description || undefined,
    openGraph: post.feature_image ? { images: [post.feature_image] } : undefined,
  }
}

export async function generateStaticParams() {
  const supabase = getSupabase()
  const { data } = await supabase
    .from('coastal_blog_posts')
    .select('slug')
    .eq('status', 'published')

  return (data ?? []).map(p => ({ slug: p.slug }))
}

const categoryColors: Record<string, string> = {
  'Speech Therapy': '#1e7faa',
  'Occupational Therapy': '#2a9d8f',
  'Physical Therapy': '#e76f51',
  'Community': '#6a4c93',
  'Family Stories': '#f4a261',
  'Parent Tips': '#457b9d',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const supabase = getSupabase()
  const { data: post } = await supabase
    .from('coastal_blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) notFound()

  const accentColor = categoryColors[post.category ?? ''] || '#1e7faa'

  const formatDate = (d: string | null) => {
    if (!d) return ''
    return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }
  const dateStr = formatDate(post.published_at || post.created_at)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || '',
    datePublished: post.published_at || post.created_at,
    image: post.feature_image ? post.feature_image : undefined,
    author: {
      '@type': 'Organization',
      name: 'Coastal Pediatric Therapy Center',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Coastal Pediatric Therapy Center',
      url: 'https://coastaltherapy.net',
    },
    mainEntityOfPage: `https://coastaltherapy.net/coastal-therapy-blog/${slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>

        {/* Featured image hero */}
        {post.feature_image && (
          <div style={{ position: 'relative', width: '100%', height: '380px', backgroundColor: '#e8f4f8' }}>
            <Image
              src={post.feature_image}
              alt={post.title}
              fill
              style={{ objectFit: 'cover', objectPosition: post.hero_position || 'center 20%' }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.5rem', maxWidth: '820px', margin: '0 auto' }}>
              {post.category && (
                <span style={{ display: 'inline-block', backgroundColor: accentColor, color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '4px', marginBottom: '0.6rem' }}>{post.category}</span>
              )}
              <h1 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.25, margin: 0 }}>{post.title}</h1>
            </div>
          </div>
        )}

        {/* No featured image header */}
        {!post.feature_image && (
          <section style={{ backgroundColor: accentColor, color: '#fff', padding: '3rem 1.5rem' }}>
            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.5rem' }}>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link> › <Link href="/coastal-therapy-blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Blog</Link>
              </p>
              <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.25 }}>{post.title}</h1>
            </div>
          </section>
        )}

        {/* Breadcrumb + meta */}
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/coastal-therapy-blog" style={{ color: '#1e7faa', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>← Blog</Link>
          <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>{dateStr}</span>
          {post.category && (
            <span style={{ backgroundColor: accentColor + '18', color: accentColor, fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{post.category}</span>
          )}
        </div>

        {/* Article content */}
        <article style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2rem 2.5rem' }}>

            {/* body_top — rendered as HTML from TipTap */}
            {post.body_top && (
              <div
                className="prose prose-lg max-w-none"
                style={{ color: '#374151', lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: post.body_top }}
              />
            )}

            {/* Mid image */}
            {post.mid_image && (
              <div style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden' }}>
                <img src={post.mid_image} alt="" style={{ width: '100%', objectFit: 'cover', maxHeight: '400px' }} />
              </div>
            )}

            {/* body_bottom */}
            {post.body_bottom && (
              <div
                className="prose prose-lg max-w-none"
                style={{ color: '#374151', lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: post.body_bottom }}
              />
            )}
          </div>
        </article>

        {/* CTA */}
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            {post.cta_text ? post.cta_text : 'Ready to get your child evaluated?'}
          </h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Serving Jacksonville Beach and Mandarin, FL since 1996.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={post.cta_url || '/new-patient-request-form'} style={{ padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>
              {post.cta_text || 'Request an Evaluation'}
            </Link>
            <a href="tel:9043724070" style={{ padding: '0.75rem 2rem', border: '2px solid #fff', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Call (904) 372-4070</a>
          </div>
        </section>
      </div>
    </>
  )
}
