'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

interface Category {
  id: string
  name: string
  created_at: string
}

export default function CategoriesManager({ initialCategories }: { initialCategories: Category[] }) {
  const [categories, setCategories] = useState<Category[]>(initialCategories)
  const [newName, setNewName] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  function flash(type: 'success' | 'error', text: string) {
    setMsg({ type, text })
    setTimeout(() => setMsg(null), 4000)
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!newName.trim()) return
    setLoading(true)

    const res = await fetch('/api/admin/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName.trim() }),
    })
    const json = await res.json()
    setLoading(false)

    if (!res.ok) { flash('error', json.error || 'Failed to add category.'); return }
    setCategories(prev => [...prev, json].sort((a, b) => a.name.localeCompare(b.name)))
    setNewName('')
    flash('success', `"${json.name}" added.`)
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete category "${name}"?`)) return

    const res = await fetch(`/api/admin/categories?id=${id}`, { method: 'DELETE' })
    if (!res.ok) {
      const json = await res.json()
      flash('error', json.error || 'Failed to delete.')
      return
    }
    setCategories(prev => prev.filter(c => c.id !== id))
    flash('success', `"${name}" deleted.`)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-lg mb-1" style={{ color: '#1e3a5f' }}>Categories</h2>
      <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Manage blog post categories.</p>

      {msg && (
        <div
          className={`px-4 py-3 rounded-lg text-sm mb-4 ${
            msg.type === 'success'
              ? 'bg-green-50 border border-green-100 text-green-700'
              : 'bg-red-50 border border-red-100 text-red-700'
          }`}
        >
          {msg.text}
        </div>
      )}

      {/* Add form */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New category name"
          className="flex-1 border rounded-lg px-4 py-2 text-sm outline-none"
          style={{ borderColor: '#e2e8f0' }}
        />
        <button
          type="submit"
          disabled={loading || !newName.trim()}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold disabled:opacity-60"
          style={{ backgroundColor: '#1e7faa' }}
        >
          <Plus size={15} />
          Add
        </button>
      </form>

      {/* List */}
      <div className="divide-y divide-gray-50">
        {categories.length === 0 ? (
          <p className="text-sm py-4 text-center" style={{ color: '#9ca3af' }}>No categories yet.</p>
        ) : (
          categories.map(cat => (
            <div key={cat.id} className="py-3 flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: '#1e3a5f' }}>{cat.name}</span>
              <button
                onClick={() => handleDelete(cat.id, cat.name)}
                className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
              >
                <Trash2 size={14} style={{ color: '#ef4444' }} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
