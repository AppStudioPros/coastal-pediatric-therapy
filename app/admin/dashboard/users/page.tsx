import { requireAdmin } from '@/lib/auth'
import { createAdminClient } from '@/lib/supabase/server'
import DashboardHeader from '../DashboardHeader'
import CoastalUsersManager from '@/components/CoastalUsersManager'

export const dynamic = 'force-dynamic'

export default async function UsersPage() {
  const profile = await requireAdmin()
  const supabase = createAdminClient()

  // Get all user profiles
  const { data: profiles } = await supabase
    .from('coastal_user_profiles')
    .select('*')
    .order('created_at', { ascending: true })

  // Get auth users to check confirmed status
  const { data: authData } = await supabase.auth.admin.listUsers({ perPage: 200 })
  const authUsers = authData?.users ?? []
  const authMap = new Map(
    authUsers.map((u) => [u.id, u.email_confirmed_at ?? u.confirmed_at ?? null])
  )

  const enriched = (profiles ?? []).map((p) => ({
    ...p,
    confirmed_at: authMap.get(p.id) ?? null,
  }))

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f7fb' }}>
      <DashboardHeader profile={profile} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <CoastalUsersManager initialUsers={enriched} currentUserId={profile.id} />
      </div>
    </div>
  )
}
