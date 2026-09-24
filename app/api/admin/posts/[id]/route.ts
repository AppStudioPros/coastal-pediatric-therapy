import { getCurrentProfile } from '@/lib/auth'
import { createAdminClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// PUT /api/admin/posts/[id] — update a post
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const profile = await getCurrentProfile()
  if (!profile) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await req.json()
  const {
    title, slug, status, meta_description,
    feature_image, hero_position, mid_image,
    body_top, body_bottom, cta_text, cta_url,
    category, keywords,
  } = body

  const supabase = createAdminClient()

  // Get existing post to check if status is changing
  const { data: existing } = await supabase
    .from('coastal_blog_posts')
    .select('status, published_at')
    .eq('id', id)
    .single()

  const isPublishing = status === 'published' && existing?.status !== 'published'

  const { data, error } = await supabase
    .from('coastal_blog_posts')
    .update({
      title,
      slug,
      status,
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
      published_at: isPublishing ? new Date().toISOString() : (existing?.published_at ?? null),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

// DELETE /api/admin/posts/[id] — delete a post
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const profile = await getCurrentProfile()
  if (!profile) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const supabase = createAdminClient()

  const { error } = await supabase
    .from('coastal_blog_posts')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
