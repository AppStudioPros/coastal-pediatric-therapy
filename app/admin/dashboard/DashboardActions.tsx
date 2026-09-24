'use client'

import { useRouter } from 'next/navigation'
import { Pencil, Trash2 } from 'lucide-react'

export default function DashboardActions({ postId, slug }: { postId: string; slug: string }) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm(`Delete this post? This cannot be undone.`)) return

    const res = await fetch(`/api/admin/posts/${postId}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      const data = await res.json()
      alert(data.error || 'Failed to delete post.')
    }
  }

  return (
    <div className="flex items-center gap-1">
      <a
        href={`/admin/dashboard/${postId}`}
        className="p-1.5 rounded-lg transition-colors hover:bg-blue-50"
        title="Edit post"
      >
        <Pencil size={14} style={{ color: '#1e7faa' }} />
      </a>
      <button
        onClick={handleDelete}
        className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
        title="Delete post"
      >
        <Trash2 size={14} style={{ color: '#ef4444' }} />
      </button>
    </div>
  )
}
