'use client'

import { useState } from 'react'
import { GripVertical, Pencil, Trash2, Plus, X, Check, Eye, EyeOff } from 'lucide-react'

interface Plan {
  id: string
  name: string
  display_order: number
  active: boolean
}

const BLUE = '#1e7faa'
const NAVY = '#1e3a5f'

export default function CoastalInsuranceClient({ initialPlans }: { initialPlans: Plan[] }) {
  const [plans, setPlans] = useState<Plan[]>(initialPlans)
  const [editId, setEditId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [adding, setAdding] = useState(false)
  const [newName, setNewName] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [dragId, setDragId] = useState<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)
  const [flash, setFlash] = useState<string | null>(null)

  function showFlash(msg: string) { setFlash(msg); setTimeout(() => setFlash(null), 3000) }

  async function handleAdd() {
    if (!newName.trim()) return
    const res = await fetch('/api/admin/insurance', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName.trim(), display_order: plans.length }),
    })
    const json = await res.json()
    if (res.ok) { setPlans(p => [...p, json.plan]); setNewName(''); setAdding(false); showFlash('Plan added.') }
  }

  async function handleEdit(id: string) {
    if (!editName.trim()) return
    const res = await fetch(`/api/admin/insurance/${id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editName.trim() }),
    })
    const json = await res.json()
    if (res.ok) { setPlans(p => p.map(pl => pl.id === id ? json.plan : pl)); setEditId(null); showFlash('Updated.') }
  }

  async function handleToggle(plan: Plan) {
    const newActive = !plan.active
    setPlans(p => p.map(pl => pl.id === plan.id ? { ...pl, active: newActive } : pl))
    await fetch(`/api/admin/insurance/${plan.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: newActive }),
    })
  }

  async function handleDelete(id: string) {
    setPlans(p => p.filter(pl => pl.id !== id))
    setDeleteConfirm(null)
    await fetch(`/api/admin/insurance/${id}`, { method: 'DELETE' })
    showFlash('Plan removed.')
  }

  function handleDragStart(id: string) { setDragId(id) }
  function handleDragOver(e: React.DragEvent, id: string) { e.preventDefault(); if (id !== dragId) setDragOverId(id) }

  async function handleDrop(targetId: string) {
    if (!dragId || dragId === targetId) { setDragId(null); setDragOverId(null); return }
    const oi = plans.findIndex(p => p.id === dragId)
    const ni = plans.findIndex(p => p.id === targetId)
    const reordered = [...plans]
    const [moved] = reordered.splice(oi, 1)
    reordered.splice(ni, 0, moved)
    const updated = reordered.map((p, i) => ({ ...p, display_order: i }))
    setPlans(updated)
    setDragId(null); setDragOverId(null)
    await fetch('/api/admin/insurance/reorder', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order: updated.map(p => ({ id: p.id, display_order: p.display_order })) }),
    })
  }

  const active = plans.filter(p => p.active)
  const homePreview = active.slice(0, 10)

  return (
    <div>
      {flash && <div style={{ background: '#edf7ee', border: '1px solid #c3e6cb', color: '#2e7d32', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.875rem' }}>{flash}</div>}

      {/* Info banner */}
      <div style={{ background: '#f0f9ff', border: '1px solid #b8e4f0', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: NAVY }}>
        <strong>Home page</strong> shows the first 10 active plans &mdash; <strong>Insurance page</strong> shows all active plans.
        Drag rows to reorder. Toggle to show/hide a plan without deleting it.
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button onClick={() => { setAdding(true); setNewName('') }} style={{ backgroundColor: BLUE, color: '#fff', border: 'none', borderRadius: '999px', padding: '0.6rem 1.25rem', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Plus size={15} /> Add Plan
        </button>
      </div>

      {/* Add row */}
      {adding && (
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center', background: '#f0f9ff', border: `1.5px solid ${BLUE}`, borderRadius: '8px', padding: '0.6rem 0.75rem' }}>
          <input autoFocus value={newName} onChange={e => setNewName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleAdd(); if (e.key === 'Escape') setAdding(false) }}
            placeholder="Insurance plan name" style={{ flex: 1, border: 'none', background: 'transparent', fontSize: '0.9rem', outline: 'none', color: NAVY }} />
          <button onClick={handleAdd} style={{ background: BLUE, color: '#fff', border: 'none', borderRadius: '6px', padding: '0.35rem 0.75rem', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>Add</button>
          <button onClick={() => setAdding(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '0.2rem' }}><X size={16} /></button>
        </div>
      )}

      {/* Plans list */}
      <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        {plans.length === 0 ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: '2rem' }}>No plans yet.</p>
        ) : (
          plans.map((plan, i) => (
            <div key={plan.id}
              draggable
              onDragStart={() => handleDragStart(plan.id)}
              onDragOver={e => handleDragOver(e, plan.id)}
              onDrop={() => handleDrop(plan.id)}
              onDragEnd={() => { setDragId(null); setDragOverId(null) }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderTop: i > 0 ? '1px solid #f0f0f0' : 'none',
                background: dragOverId === plan.id ? '#f0f9ff' : (i < 10 && plan.active ? '#fff' : '#fafafa'),
                opacity: plan.active ? 1 : 0.55,
                cursor: 'default',
                transition: 'background 0.1s',
              }}>
              {/* Drag */}
              <div style={{ color: '#d1d5db', cursor: 'grab', flexShrink: 0 }}><GripVertical size={16} /></div>

              {/* Position badge */}
              <div style={{ width: '24px', fontSize: '0.7rem', fontWeight: 700, color: i < 10 && plan.active ? BLUE : '#9ca3af', textAlign: 'center', flexShrink: 0 }}>
                {i + 1}
              </div>

              {/* Name */}
              {editId === plan.id ? (
                <input autoFocus value={editName} onChange={e => setEditName(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') handleEdit(plan.id); if (e.key === 'Escape') setEditId(null) }}
                  style={{ flex: 1, border: `1.5px solid ${BLUE}`, borderRadius: '6px', padding: '0.3rem 0.6rem', fontSize: '0.9rem', outline: 'none' }} />
              ) : (
                <span style={{ flex: 1, fontSize: '0.9rem', color: plan.active ? NAVY : '#9ca3af' }}>{plan.name}</span>
              )}

              {/* Home badge */}
              {i < 10 && plan.active && (
                <span style={{ fontSize: '0.65rem', fontWeight: 700, background: '#e0f2fe', color: BLUE, borderRadius: '999px', padding: '2px 7px', flexShrink: 0 }}>HOME</span>
              )}

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.25rem', flexShrink: 0 }}>
                {editId === plan.id ? (
                  <>
                    <button onClick={() => handleEdit(plan.id)} style={{ padding: '4px', color: '#2e7d32', background: '#edf7ee', border: 'none', borderRadius: '5px', cursor: 'pointer' }}><Check size={14} /></button>
                    <button onClick={() => setEditId(null)} style={{ padding: '4px', color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer' }}><X size={14} /></button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { setEditId(plan.id); setEditName(plan.name) }} style={{ padding: '4px', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}><Pencil size={14} /></button>
                    <button onClick={() => handleToggle(plan)} style={{ padding: '4px', color: plan.active ? '#6b7280' : '#1e7faa', background: 'none', border: 'none', cursor: 'pointer' }}>
                      {plan.active ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                    {deleteConfirm === plan.id ? (
                      <>
                        <button onClick={() => handleDelete(plan.id)} style={{ padding: '4px 6px', color: '#e53e3e', background: '#fff5f5', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700 }}>Delete</button>
                        <button onClick={() => setDeleteConfirm(null)} style={{ padding: '4px', color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer' }}><X size={14} /></button>
                      </>
                    ) : (
                      <button onClick={() => setDeleteConfirm(plan.id)} style={{ padding: '4px', color: '#f87171', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={14} /></button>
                    )}
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
