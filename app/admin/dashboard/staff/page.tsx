import { requireAdmin } from '@/lib/auth'
import { createAdminClient } from '@/lib/supabase/server'
import DashboardHeader from '../DashboardHeader'
import CoastalStaffClient from '@/components/CoastalStaffClient'

export const dynamic = 'force-dynamic'

export default async function StaffPage() {
  const profile = await requireAdmin()
  const supabase = createAdminClient()

  const { data: staff, error } = await supabase
    .from('coastal_staff')
    .select('id, name, role, bio, photo_url, photo_focal_x, photo_focal_y, display_order, active, created_at')
    .order('display_order', { ascending: true })

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <DashboardHeader profile={profile} />
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1e7faa', marginBottom: '0.25rem' }}>
            Coastal Pediatric Therapy
          </p>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1e3a5f', marginBottom: '0.25rem' }}>Staff</h1>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            {staff?.length ?? 0} staff member{(staff?.length ?? 0) === 1 ? '' : 's'}
            {error && <span style={{ color: '#e53e3e', marginLeft: '0.5rem' }}>— could not load staff</span>}
          </p>
        </div>
        <CoastalStaffClient initialStaff={staff ?? []} />
      </main>
    </div>
  )
}
