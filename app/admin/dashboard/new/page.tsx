import { requireAuth } from '@/lib/auth'
import DashboardHeader from '../DashboardHeader'
import CoastalPostForm from '@/components/CoastalPostForm'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default async function NewPostPage() {
  const profile = await requireAuth()

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
          <span className="text-sm font-medium" style={{ color: '#1e3a5f' }}>New Post</span>
        </div>
        <CoastalPostForm />
      </div>
    </div>
  )
}
