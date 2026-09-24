import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import DashboardHeader from '../DashboardHeader'
import CoastalPostForm from '@/components/CoastalPostForm'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

type Props = { params: Promise<{ id: string }> }

export default async function EditPostPage({ params }: Props) {
  const profile = await requireAuth()
  const { id } = await params

  const supabase = await createClient()
  const { data: post } = await supabase
    .from('coastal_blog_posts')
    .select('*')
    .eq('id', id)
    .single()

  if (!post) notFound()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f7fb' }}>
      <DashboardHeader profile={profile} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: '#1e7faa' }}
          >
            <ChevronLeft size={16} />
            All Posts
          </Link>
          <span style={{ color: '#9ca3af' }}>/</span>
          <span className="text-sm font-medium truncate" style={{ color: '#1e3a5f' }}>{post.title}</span>
        </div>
        <CoastalPostForm initialData={post} isEdit />
      </div>
    </div>
  )
}
