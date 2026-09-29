'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function InsurancePlans({ limit }: { limit?: number }) {
  const [plans, setPlans] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    const url = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/coastal_insurance`)
    url.searchParams.set('select', 'id,name')
    url.searchParams.set('active', 'eq.true')
    url.searchParams.set('order', 'display_order.asc')
    if (limit) url.searchParams.set('limit', String(limit))

    fetch(url.toString(), {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
      },
    })
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setPlans(data) })
      .catch(() => {})
  }, [limit])

  return (
    <motion.ul
      className="space-y-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
    >
      {plans.map((plan, pi) => (
        <motion.li
          key={plan.id}
          variants={{
            hidden: { opacity: 0, scale: 0.7 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="flex items-center gap-3 bg-[#EAF6FB] border border-[#B8E4F0] rounded-lg px-4 py-3 text-[#4a7a8a]"
        >
          <ShieldCheck size={18} className={`shrink-0 ${pi % 2 === 1 ? 'text-[#AF29BE]' : 'text-[#24B5D0]'}`} />
          {plan.name}
        </motion.li>
      ))}
    </motion.ul>
  )
}
