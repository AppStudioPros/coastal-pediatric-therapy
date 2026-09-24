'use client'

import { useState } from 'react'
import { Trash2, UserPlus, Pencil, X, Check, MailCheck, KeyRound } from 'lucide-react'

export type UserRole = 'admin' | 'editor'

export interface UserProfile {
  id: string
  email: string
  display_name: string | null
  role: UserRole
  created_at: string
  confirmed_at: string | null
}

const ROLE_COLORS: Record<UserRole, string> = {
  admin: 'bg-blue-100 text-blue-800',
  editor: 'bg-gray-100 text-gray-700',
}

export default function CoastalUsersManager({
  initialUsers,
  currentUserId,
}: {
  initialUsers: UserProfile[]
  currentUserId: string
}) {
  const [users, setUsers] = useState<UserProfile[]>(initialUsers)
  const [showInvite, setShowInvite] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  function flash(type: 'success' | 'error', text: string) {
    setMsg({ type, text })
    setTimeout(() => setMsg(null), 4000)
  }

  async function handleResendInvite(id: string, email: string) {
    const res = await fetch(`/api/admin/users/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'resend_invite', email }),
    })
    const json = await res.json()
    if (!res.ok) { flash('error', json.error); return }
    flash('success', `Invite resent to ${email}.`)
  }

  async function handleResetPassword(id: string, email: string) {
    if (!confirm(`Send a password reset email to ${email}?`)) return
    const res = await fetch(`/api/admin/users/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'reset_password', email }),
    })
    const json = await res.json()
    if (!res.ok) { flash('error', json.error); return }
    flash('success', `Password reset email sent to ${email}.`)
  }

  async function handleDelete(id: string, email: string) {
    if (!confirm(`Remove ${email}? This will revoke their access immediately.`)) return
    const res = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
    const json = await res.json()
    if (!res.ok) { flash('error', json.error); return }
    setUsers((u) => u.filter((p) => p.id !== id))
    flash('success', `${email} removed.`)
  }

  async function handleUpdate(id: string, patch: Partial<UserProfile>) {
    const res = await fetch(`/api/admin/users/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    })
    const json = await res.json()
    if (!res.ok) { flash('error', json.error); return }
    setUsers((u) => u.map((p) => (p.id === id ? { ...p, ...patch } : p)))
    setEditingId(null)
    flash('success', 'User updated.')
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold mb-1" style={{ color: '#1e3a5f' }}>Users</h2>
          <p className="text-sm" style={{ color: '#6b7280' }}>
            Manage who can log in and what they can access.
          </p>
        </div>
        <button
          onClick={() => setShowInvite(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold whitespace-nowrap"
          style={{ backgroundColor: '#1e7faa' }}
        >
          <UserPlus size={15} />
          Invite user
        </button>
      </div>

      {/* Flash message */}
      {msg && (
        <div className={`px-4 py-3 rounded-lg text-sm ${
          msg.type === 'success'
            ? 'bg-green-50 border border-green-100 text-green-700'
            : 'bg-red-50 border border-red-100 text-red-700'
        }`}>
          {msg.text}
        </div>
      )}

      {/* User list */}
      <div className="divide-y divide-gray-100">
        {users.map((u) =>
          editingId === u.id ? (
            <EditRow key={u.id} user={u} onSave={(patch) => handleUpdate(u.id, patch)} onCancel={() => setEditingId(null)} />
          ) : (
            <UserRow
              key={u.id}
              user={u}
              isSelf={u.id === currentUserId}
              onEdit={() => setEditingId(u.id)}
              onDelete={() => handleDelete(u.id, u.email)}
              onResendInvite={() => handleResendInvite(u.id, u.email)}
              onResetPassword={() => handleResetPassword(u.id, u.email)}
            />
          )
        )}
        {users.length === 0 && (
          <p className="py-6 text-sm text-center" style={{ color: '#9ca3af' }}>No users yet.</p>
        )}
      </div>

      {/* Invite modal */}
      {showInvite && (
        <InviteModal
          onClose={() => setShowInvite(false)}
          onInvited={(newUser) => {
            setUsers((u) => [...u, newUser])
            setShowInvite(false)
            flash('success', `Invite sent to ${newUser.email}!`)
          }}
          onError={(e) => flash('error', e)}
        />
      )}
    </div>
  )
}

function UserRow({
  user, isSelf, onEdit, onDelete, onResendInvite, onResetPassword,
}: {
  user: UserProfile; isSelf: boolean; onEdit: () => void; onDelete: () => void
  onResendInvite: () => void; onResetPassword: () => void
}) {
  return (
    <div className="py-4">
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0 uppercase" style={{ backgroundColor: '#1e3a5f' }}>
          {(user.display_name || user.email)[0]}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              title={user.confirmed_at ? 'Active' : 'Pending invite'}
              className={`w-2 h-2 rounded-full flex-shrink-0 ${user.confirmed_at ? 'bg-green-400' : 'bg-yellow-400'}`}
            />
            <p className="text-sm font-semibold truncate" style={{ color: '#1e3a5f' }}>
              {user.display_name || user.email}
              {isSelf && <span className="ml-2 text-xs" style={{ color: '#9ca3af' }}>(you)</span>}
            </p>
          </div>
          {user.display_name && (
            <p className="text-xs truncate ml-4" style={{ color: '#9ca3af' }}>{user.email}</p>
          )}
          {!user.confirmed_at && (
            <p className="text-xs ml-4 mt-0.5" style={{ color: '#d97706' }}>Invite pending</p>
          )}
        </div>

        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ROLE_COLORS[user.role]}`}>
          {user.role}
        </span>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button onClick={onEdit} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="Edit"><Pencil size={14} /></button>
          {!isSelf && (
            <button onClick={onDelete} className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Remove"><Trash2 size={14} /></button>
          )}
        </div>
      </div>

      {!isSelf && (
        <div className="flex gap-2 mt-2 pl-[52px]">
          {!user.confirmed_at && (
            <button onClick={onResendInvite} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <MailCheck size={11} /> Resend invite
            </button>
          )}
          {user.confirmed_at && (
            <button onClick={onResetPassword} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <KeyRound size={11} /> Reset password
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function EditRow({ user, onSave, onCancel }: { user: UserProfile; onSave: (patch: Partial<UserProfile>) => void; onCancel: () => void }) {
  const [role, setRole] = useState<UserRole>(user.role)
  const [displayName, setDisplayName] = useState(user.display_name || '')

  return (
    <div className="py-4 space-y-3">
      <p className="text-sm font-semibold" style={{ color: '#1e3a5f' }}>{user.email}</p>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>Display name</label>
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="e.g. Jane" className="w-full sm:w-64 border rounded-lg px-3 py-2 text-sm outline-none" style={{ borderColor: '#d1e5ef' }} />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#6b7280' }}>Role</label>
        <div className="flex gap-2">
          {(['admin', 'editor'] as UserRole[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                role === r ? 'text-white border-transparent' : 'border-gray-200 text-gray-600 hover:border-gray-400'
              }`}
              style={role === r ? { backgroundColor: '#1e7faa' } : {}}
            >
              {r}
            </button>
          ))}
        </div>
        <p className="text-xs mt-1.5" style={{ color: '#9ca3af' }}>
          {role === 'admin' ? 'Full access including Users management.' : 'Posts and Categories only.'}
        </p>
      </div>

      <div className="flex gap-2 pt-1">
        <button onClick={() => onSave({ role, display_name: displayName || null })} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: '#1e7faa' }}>
          <Check size={14} /> Save
        </button>
        <button onClick={onCancel} className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
          <X size={14} /> Cancel
        </button>
      </div>
    </div>
  )
}

function InviteModal({ onClose, onInvited, onError }: { onClose: () => void; onInvited: (user: UserProfile) => void; onError: (e: string) => void }) {
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [role, setRole] = useState<UserRole>('editor')
  const [loading, setLoading] = useState(false)

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/admin/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, display_name: displayName || null, role }),
    })
    const json = await res.json()
    setLoading(false)

    if (!res.ok) {
      onError(json.error || 'Failed to invite user.')
      onClose()
      return
    }

    onInvited({
      id: json.userId || crypto.randomUUID(),
      email,
      display_name: displayName || null,
      role,
      created_at: new Date().toISOString(),
      confirmed_at: null,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <form onSubmit={handleInvite} className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8 space-y-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold" style={{ color: '#1e3a5f' }}>Invite user</h3>
            <p className="text-sm mt-0.5" style={{ color: '#6b7280' }}>They&apos;ll get a magic link to set their password.</p>
          </div>
          <button type="button" onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"><X size={16} /></button>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#374151' }}>Email *</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="user@example.com" className="w-full border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: '#d1e5ef' }} />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#374151' }}>Display name</label>
          <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="e.g. Jane (optional)" className="w-full border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: '#d1e5ef' }} />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#374151' }}>Role</label>
          <div className="flex gap-2">
            {(['admin', 'editor'] as UserRole[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                  role === r ? 'text-white border-transparent' : 'border-gray-200 text-gray-600 hover:border-gray-400'
                }`}
                style={role === r ? { backgroundColor: '#1e7faa' } : {}}
              >
                {r}
              </button>
            ))}
          </div>
          <p className="text-xs mt-1.5" style={{ color: '#9ca3af' }}>
            {role === 'admin' ? 'Full access including Users management.' : 'Posts and Categories only.'}
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 rounded-lg text-white text-sm font-semibold disabled:opacity-60"
          style={{ backgroundColor: '#1e7faa' }}
        >
          {loading ? 'Sending invite…' : 'Send invite'}
        </button>
      </form>
    </div>
  )
}
