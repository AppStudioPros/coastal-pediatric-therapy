import { requireAdmin } from '@/lib/auth'
import { createAdminClient } from '@/lib/supabase/server'
import DashboardHeader from '../DashboardHeader'
import CoastalInsuranceClient from '@/components/CoastalInsuranceClient'

export const dynamic = 'force-dynamic'

export default async function InsurancePage() {
  const profile = await requireAdmin()
  const supabase = createAdminClient()

  const { data: plans } = await supabase
    .from('coastal_insurance')
    .select('id, name, display_order, active')
    .order('display_order', { ascending: true })

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <DashboardHeader profile={profile} />
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1e7faa', marginBottom: '0.25rem' }}>
            Coastal Pediatric Therapy
          </p>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1e3a5f', marginBottom: '0.25rem' }}>Insurance Plans</h1>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            {plans?.length ?? 0} plan{(plans?.length ?? 0) === 1 ? '' : 's'} &mdash; first 10 show on the home page, all active plans show on the Insurance page
          </p>
        </div>
        <CoastalInsuranceClient initialPlans={plans ?? []} />
      </main>
    </div>
  )
}
