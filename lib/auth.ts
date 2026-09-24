import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export type UserRole = 'admin' | 'editor'

export interface CoastalUserProfile {
  id: string
  email: string
  display_name: string | null
  role: UserRole
  created_at: string
}

/** Get the current user's Coastal profile. Returns null if not found. */
export async function getCurrentProfile(): Promise<CoastalUserProfile | null> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('coastal_user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return data ?? null
}

/** Require an authenticated session. Redirects to /admin/login if not authed. */
export async function requireAuth(): Promise<CoastalUserProfile> {
  const profile = await getCurrentProfile()
  if (!profile) redirect('/admin/login')
  return profile
}

/** Require admin role. Redirects to /admin/dashboard if not admin. */
export async function requireAdmin(): Promise<CoastalUserProfile> {
  const profile = await requireAuth()
  if (profile.role !== 'admin') redirect('/admin/dashboard')
  return profile
}
