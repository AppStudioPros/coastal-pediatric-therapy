'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { PenLine, Users, Tag, LogOut, Waves } from 'lucide-react'
import type { CoastalUserProfile } from '@/lib/auth'

export default function DashboardHeader({ profile }: { profile: CoastalUserProfile }) {
  const router = useRouter()
  const supabase = createClient()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2 mr-4">
          <Waves size={20} style={{ color: '#1e7faa' }} />
          <span className="font-bold text-sm" style={{ color: '#1e3a5f' }}>Coastal Admin</span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-1 flex-1">
          <Link
            href="/admin/dashboard"
            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-blue-50"
            style={{ color: '#1e7faa' }}
          >
            Posts
          </Link>
          <Link
            href="/admin/dashboard/categories"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-blue-50"
            style={{ color: '#6b7280' }}
          >
            <Tag size={13} />
            Categories
          </Link>
          {profile.role === 'admin' && (
            <Link
              href="/admin/dashboard/users"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-blue-50"
              style={{ color: '#6b7280' }}
            >
              <Users size={13} />
              Users
            </Link>
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/dashboard/new"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#1e7faa' }}
          >
            <PenLine size={14} />
            New Post
          </Link>

          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white uppercase"
              style={{ backgroundColor: '#1e3a5f' }}
            >
              {(profile.display_name || profile.email)[0]}
            </div>
            <span className="text-xs hidden sm:block" style={{ color: '#6b7280' }}>
              {profile.display_name || profile.email}
            </span>
          </div>

          <button
            onClick={handleSignOut}
            className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
            title="Sign out"
          >
            <LogOut size={15} style={{ color: '#9ca3af' }} />
          </button>
        </div>
      </div>
    </header>
  )
}
