'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

interface Plan { id: string; name: string }

export default function InsurancePlans({ plans }: { plans: Plan[] }) {
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
