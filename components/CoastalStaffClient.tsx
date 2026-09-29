'use client'

import { useState } from 'react'
import { GripVertical, Pencil, Trash2, Plus, X, Check, Eye, EyeOff } from 'lucide-react'

interface StaffMember {
  id: string
  name: string
  role: string
  bio?: string | null
  photo_url?: string | null
  photo_focal_x?: number | null
  photo_focal_y?: number | null
  display_order: number
  active: boolean
  created_at?: string
}

type ModalMode = 'add' | 'edit' | null

const EMPTY: Omit<StaffMember, 'id' | 'created_at'> = {
  name: '', role: '', bio: '', photo_url: '',
  photo_focal_x: 50, photo_focal_y: 50,
  display_order: 0, active: true,
}

const BLUE = '#1e7faa'
const NAVY = '#1e3a5f'

export default function CoastalStaffClient({ initialStaff }: { initialStaff: StaffMember[] }) {
  const [staff, setStaff] = useState<StaffMember[]>(initialStaff)
  const [modal, setModal] = useState<ModalMode>(null)
  const [editTarget, setEditTarget] = useState<StaffMember | null>(null)
  const [form, setForm] = useState<typeof EMPTY>(EMPTY)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [dragId, setDragId] = useState<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [flash, setFlash] = useState<string | null>(null)

  function showFlash(msg: string) {
    setFlash(msg)
    setTimeout(() => setFlash(null), 3500)
  }

  function openAdd() {
    setForm({ ...EMPTY, display_order: staff.length })
    setEditTarget(null)
    setModal('add')
    setError(null)
  }

  function openEdit(member: StaffMember) {
    setForm({
      name: member.name, role: member.role,
      bio: member.bio ?? '', photo_url: member.photo_url ?? '',
      photo_focal_x: member.photo_focal_x ?? 50,
      photo_focal_y: member.photo_focal_y ?? 50,
      display_order: member.display_order, active: member.active,
    })
    setEditTarget(member)
    setModal('edit')
    setError(null)
  }

  function closeModal() { setModal(null); setEditTarget(null); setError(null) }

  async function handlePhotoUpload(file: File) {
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const json = await res.json()
      if (json.url) setForm(f => ({ ...f, photo_url: json.url }))
      else setError(json.error || 'Upload failed')
    } catch {
      setError('Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  async function handleSave() {
    if (!form.name.trim() || !form.role.trim()) { setError('Name and Role are required.'); return }
    setSaving(true); setError(null)
    try {
      const payload = {
        name: form.name.trim(), role: form.role.trim(),
        bio: form.bio?.trim() || null,
        photo_url: form.photo_url?.trim() || null,
        photo_focal_x: form.photo_url ? (form.photo_focal_x ?? 50) : null,
        photo_focal_y: form.photo_url ? (form.photo_focal_y ?? 50) : null,
        display_order: form.display_order, active: form.active,
      }
      if (modal === 'add') {
        const res = await fetch('/api/admin/staff', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        const json = await res.json()
        if (!res.ok) throw new Error(json.error)
        setStaff(prev => [...prev, json.staff])
        showFlash('Staff member added.')
      } else if (modal === 'edit' && editTarget) {
        const res = await fetch(`/api/admin/staff/${editTarget.id}`, {
          method: 'PATCH', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        const json = await res.json()
        if (!res.ok) throw new Error(json.error)
        setStaff(prev => prev.map(m => m.id === editTarget.id ? json.staff : m))
        showFlash('Staff member updated.')
      }
      closeModal()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSaving(false)
    }
  }

  async function handleToggleActive(member: StaffMember) {
    const newActive = !member.active
    setStaff(prev => prev.map(m => m.id === member.id ? { ...m, active: newActive } : m))
    await fetch(`/api/admin/staff/${member.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: newActive }),
    })
  }

  async function handleDelete(id: string) {
    setStaff(prev => prev.filter(m => m.id !== id))
    setDeleteConfirm(null)
    await fetch(`/api/admin/staff/${id}`, { method: 'DELETE' })
    showFlash('Staff member removed.')
  }

  // Drag-to-reorder
  function handleDragStart(id: string) { setDragId(id) }
  function handleDragOver(e: React.DragEvent, id: string) { e.preventDefault(); if (id !== dragId) setDragOverId(id) }

  async function handleDrop(targetId: string) {
    if (!dragId || dragId === targetId) { setDragId(null); setDragOverId(null); return }
    const oldIndex = staff.findIndex(m => m.id === dragId)
    const newIndex = staff.findIndex(m => m.id === targetId)
    const reordered = [...staff]
    const [moved] = reordered.splice(oldIndex, 1)
    reordered.splice(newIndex, 0, moved)
    const updated = reordered.map((m, i) => ({ ...m, display_order: i }))
    setStaff(updated)
    setDragId(null); setDragOverId(null)
    await fetch('/api/admin/staff/reorder', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order: updated.map(m => ({ id: m.id, display_order: m.display_order })) }),
    })
  }

  return (
    <>
      {flash && (
        <div style={{ background: '#edf7ee', border: '1px solid #c3e6cb', color: '#2e7d32', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.875rem' }}>
          {flash}
        </div>
      )}

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Drag cards to reorder. Toggle active/hidden inline.</p>
        <button onClick={openAdd} style={{ backgroundColor: BLUE, color: '#fff', border: 'none', borderRadius: '999px', padding: '0.6rem 1.25rem', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Plus size={15} /> Add Staff Member
        </button>
      </div>

      {/* Grid */}
      {staff.length === 0 ? (
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>No staff members yet.</p>
          <button onClick={openAdd} style={{ backgroundColor: BLUE, color: '#fff', border: 'none', borderRadius: '999px', padding: '0.6rem 1.25rem', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer' }}>
            Add first staff member
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {staff.map(member => (
            <div
              key={member.id}
              draggable
              onDragStart={() => handleDragStart(member.id)}
              onDragOver={e => handleDragOver(e, member.id)}
              onDrop={() => handleDrop(member.id)}
              onDragEnd={() => { setDragId(null); setDragOverId(null) }}
              style={{
                background: '#fff', borderRadius: '12px', overflow: 'hidden',
                border: dragOverId === member.id ? `2px solid ${BLUE}` : '1px solid #e2e8f0',
                opacity: member.active ? 1 : 0.6,
                transition: 'all 0.15s',
              }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', height: '180px', background: '#e8f4f8' }}>
                {member.photo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.photo_url} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${member.photo_focal_x ?? 50}% ${member.photo_focal_y ?? 50}%` }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '2.5rem' }}>👤</div>
                )}
                <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', padding: '4px', cursor: 'grab', color: '#fff' }}>
                  <GripVertical size={14} />
                </div>
                <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: member.active ? 'rgba(46,125,50,0.9)' : 'rgba(100,100,100,0.8)', color: '#fff', borderRadius: '999px', padding: '2px 8px', fontSize: '0.7rem', fontWeight: 700 }}>
                  {member.active ? 'Active' : 'Hidden'}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontWeight: 700, color: NAVY, marginBottom: '0.15rem', fontSize: '1rem' }}>{member.name}</h3>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: BLUE, marginBottom: '0.5rem' }}>{member.role}</p>
                {member.bio && <p style={{ fontSize: '0.8rem', color: '#4b5563', lineHeight: 1.5, marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{member.bio}</p>}

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #f0f0f0' }}>
                  <button onClick={() => openEdit(member)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', padding: '0.4rem', fontSize: '0.8rem', color: '#4b5563', background: 'none', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                    <Pencil size={13} /> Edit
                  </button>
                  <button onClick={() => handleToggleActive(member)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', padding: '0.4rem', fontSize: '0.8rem', color: '#4b5563', background: 'none', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                    {member.active ? <EyeOff size={13} /> : <Eye size={13} />}
                    {member.active ? 'Hide' : 'Show'}
                  </button>
                  {deleteConfirm === member.id ? (
                    <>
                      <button onClick={() => handleDelete(member.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', padding: '0.4rem 0.5rem', fontSize: '0.8rem', color: '#e53e3e', background: '#fff5f5', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700 }}>
                        <Check size={13} /> Yes
                      </button>
                      <button onClick={() => setDeleteConfirm(null)} style={{ padding: '0.4rem', color: '#9ca3af', background: 'none', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                        <X size={13} />
                      </button>
                    </>
                  ) : (
                    <button onClick={() => setDeleteConfirm(member.id)} style={{ padding: '0.4rem 0.5rem', color: '#f87171', background: 'none', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modal && (
        <div onClick={closeModal} style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', width: '100%', maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid #f0f0f0' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: NAVY }}>{modal === 'add' ? 'Add Staff Member' : 'Edit Staff Member'}</h2>
              <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: '4px' }}><X size={18} /></button>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {error && <div style={{ background: '#fff5f5', border: '1px solid #fed7d7', color: '#e53e3e', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.875rem' }}>{error}</div>}

              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name *</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. Sarah M." style={{ width: '100%', border: '1.5px solid #d1e5ef', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              {/* Role */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role / Title *</label>
                <input value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))} placeholder="e.g. Speech-Language Pathologist" style={{ width: '100%', border: '1.5px solid #d1e5ef', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              {/* Bio */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bio</label>
                <textarea value={form.bio ?? ''} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} rows={4} placeholder="Short bio..." style={{ width: '100%', border: '1.5px solid #d1e5ef', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }} />
              </div>

              {/* Photo */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Photo</label>
                {form.photo_url ? (
                  <div>
                    {/* Focal point picker */}
                    <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '160px', cursor: 'crosshair', border: '1.5px solid #d1e5ef', marginBottom: '0.5rem' }}
                      onClick={e => {
                        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
                        const x = Math.round(((e.clientX - rect.left) / rect.width) * 100)
                        const y = Math.round(((e.clientY - rect.top) / rect.height) * 100)
                        setForm(f => ({ ...f, photo_focal_x: x, photo_focal_y: y }))
                      }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={form.photo_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${form.photo_focal_x}% ${form.photo_focal_y}%` }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '33.33% 33.33%' }} />
                      <div style={{ position: 'absolute', left: `${form.photo_focal_x}%`, top: `${form.photo_focal_y}%`, transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: BLUE, border: '2px solid #fff', boxShadow: '0 2px 6px rgba(0,0,0,0.4)' }} />
                      </div>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Click to set focal point — {form.photo_focal_x}% {form.photo_focal_y}%</p>
                    <button onClick={() => setForm(f => ({ ...f, photo_url: '', photo_focal_x: 50, photo_focal_y: 50 }))} style={{ fontSize: '0.8rem', color: '#e53e3e', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                      Remove photo
                    </button>
                  </div>
                ) : (
                  <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '120px', border: `2px dashed ${uploading ? BLUE : '#d1e5ef'}`, borderRadius: '8px', cursor: 'pointer', background: uploading ? '#f0f9ff' : '#fff', transition: 'all 0.15s' }}>
                    {uploading ? (
                      <p style={{ fontSize: '0.875rem', color: BLUE, fontWeight: 600 }}>Uploading...</p>
                    ) : (
                      <>
                        <p style={{ fontSize: '0.875rem', color: NAVY, fontWeight: 600, marginBottom: '0.25rem' }}>Click to upload</p>
                        <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>JPG, PNG, WebP</p>
                      </>
                    )}
                    <input type="file" accept="image/*" style={{ display: 'none' }} disabled={uploading}
                      onChange={e => { const f = e.target.files?.[0]; if (f) handlePhotoUpload(f) }} />
                  </label>
                )}
              </div>

              {/* Active toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div onClick={() => setForm(f => ({ ...f, active: !f.active }))} style={{ width: '44px', height: '24px', borderRadius: '999px', background: form.active ? BLUE : '#d1d5db', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <div style={{ position: 'absolute', top: '2px', left: form.active ? '22px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                </div>
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>Active (visible on public site)</span>
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', gap: '0.75rem', padding: '1.25rem 1.5rem', borderTop: '1px solid #f0f0f0' }}>
              <button onClick={closeModal} style={{ flex: 1, padding: '0.65rem', borderRadius: '999px', border: '1.5px solid #d1e5ef', background: '#fff', fontSize: '0.875rem', fontWeight: 600, color: '#4b5563', cursor: 'pointer' }}>Cancel</button>
              <button onClick={handleSave} disabled={saving} style={{ flex: 1, padding: '0.65rem', borderRadius: '999px', border: 'none', background: BLUE, fontSize: '0.875rem', fontWeight: 700, color: '#fff', cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.6 : 1 }}>
                {saving ? 'Saving...' : modal === 'add' ? 'Add Staff Member' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
