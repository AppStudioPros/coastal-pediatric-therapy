import { createClient } from '@/lib/supabase/server'
import { requireAuth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import DashboardHeader from './DashboardHeader'
import DashboardActions from './DashboardActions'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const profile = await requireAuth()
  if (!profile) redirect('/admin/login')

  const supabase = await createClient()
  const { data: posts } = await supabase
    .from('coastal_blog_posts')
    .select('id, title, slug, status, category, published_at, created_at')
    .order('created_at', { ascending: false })

  const allPosts = posts ?? []
  const published = allPosts.filter(p => p.status === 'published').length
  const drafts = allPosts.filter(p => p.status === 'draft').length

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f7fb' }}>
      <DashboardHeader profile={profile} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Posts', value: allPosts.length, color: '#1e7faa' },
            { label: 'Published', value: published, color: '#059669' },
            { label: 'Drafts', value: drafts, color: '#d97706' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-5 text-center border border-white">
              <p className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-sm mt-1" style={{ color: '#6b7280' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Posts table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#6b7280' }}>
              All Posts
            </h2>
            <span className="text-xs" style={{ color: '#9ca3af' }}>{allPosts.length} total</span>
          </div>

          {allPosts.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-sm" style={{ color: '#9ca3af' }}>No posts yet. Create your first post!</p>
              <Link
                href="/admin/dashboard/new"
                className="inline-block mt-4 px-5 py-2 rounded-lg text-white text-sm font-semibold"
                style={{ backgroundColor: '#1e7faa' }}
              >
                New Post
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {allPosts.map((post) => (
                <div key={post.id} className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate" style={{ color: '#1e3a5f' }}>
                      {post.title}
                    </p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-xs" style={{ color: '#9ca3af' }}>/coastal-therapy-blog/{post.slug}</span>
                      {post.category && (
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#e8f4f8', color: '#1e7faa' }}>
                          {post.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: post.status === 'published' ? '#dcfce7' : '#fef9c3',
                        color: post.status === 'published' ? '#166534' : '#713f12',
                      }}
                    >
                      {post.status}
                    </span>
                    <span className="text-xs" style={{ color: '#9ca3af' }}>
                      {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <DashboardActions postId={post.id} slug={post.slug} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
