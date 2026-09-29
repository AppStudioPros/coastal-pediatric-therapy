'use client'

import { useEffect, useState } from 'react'

export default function InsuranceChips() {
  const [plans, setPlans] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    const url = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/coastal_insurance`)
    url.searchParams.set('select', 'id,name')
    url.searchParams.set('active', 'eq.true')
    url.searchParams.set('order', 'display_order.asc')
    url.searchParams.set('limit', '10')

    fetch(url.toString(), {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
      },
    })
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setPlans(data) })
      .catch(() => {})
  }, [])

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {plans.map(plan => (
        <span key={plan.id} className="bg-white border border-[#B8E4F0] rounded-full px-4 py-1.5 text-sm text-[#1e3a4a]">
          {plan.name}
        </span>
      ))}
    </div>
  )
}
