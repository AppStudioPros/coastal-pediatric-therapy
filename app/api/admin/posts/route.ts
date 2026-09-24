import { getCurrentProfile } from '@/lib/auth'
import { createAdminClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// POST /api/admin/posts — create a new post
export async function POST(req: Request) {
  const profile = await getCurrentProfile()
  if (!profile) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const {
    title, slug, status, meta_description,
    feature_image, hero_position, mid_image,
    body_top, body_bottom, cta_text, cta_url,
    category, keywords,
  } = body

  if (!title || !slug) {
    return NextResponse.json({ error: 'Title and slug are required.' }, { status: 400 })
  }

  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from('coastal_blog_posts')
    .insert({
      title,
      slug,
      status: status || 'draft',
      meta_description: meta_description || null,
      feature_image: feature_image || null,
      hero_position: hero_position || '50% 20%',
      mid_image: mid_image || null,
      body_top: body_top || null,
      body_bottom: body_bottom || null,
      cta_text: cta_text || null,
      cta_url: cta_url || null,
      category: category || null,
      keywords: keywords || null,
      published_at: status === 'published' ? new Date().toISOString() : null,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
