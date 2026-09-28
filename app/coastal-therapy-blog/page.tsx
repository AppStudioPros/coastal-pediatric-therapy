import type { Metadata } from 'next'
import { createClient } from '@supabase/supabase-js'
import CoastalBlogFilter from '@/components/CoastalBlogFilter'

export const metadata: Metadata = {
  title: 'Coastal Therapy Blog | Pediatric Therapy Tips & Resources',
  description: 'Tips, resources, and insights on pediatric speech, occupational, and physical therapy from the team at Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL.',
}

export const dynamic = 'force-dynamic'
export const revalidate = 60

async function getData() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const [{ data: posts }, { data: cats }] = await Promise.all([
    supabase
      .from('coastal_blog_posts')
      .select('slug, title, category, feature_image, meta_description, published_at, hero_position')
      .eq('status', 'published')
      .order('published_at', { ascending: false }),
    supabase
      .from('coastal_blog_categories')
      .select('name')
      .order('name'),
  ])

  return {
    posts: posts ?? [],
    categories: (cats ?? []).map(c => c.name) as string[],
  }
}

export default async function BlogPage() {
  const { posts, categories } = await getData()

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
        {posts.length === 0 ? (
          <p style={{ color: '#6b7280', textAlign: 'center' }}>No posts published yet. Check back soon!</p>
        ) : (
          <CoastalBlogFilter posts={posts} categories={categories} />
        )}
      </section>
    </div>
  )
}
