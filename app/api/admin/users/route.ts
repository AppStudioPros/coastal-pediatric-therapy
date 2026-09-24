import { getCurrentProfile } from '@/lib/auth'
import { createAdminClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// GET /api/admin/users — list all users (admin only)
export async function GET() {
  const profile = await getCurrentProfile()
  if (!profile || profile.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const supabase = createAdminClient()

  const { data: profiles, error } = await supabase
    .from('coastal_user_profiles')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const { data: authData } = await supabase.auth.admin.listUsers({ perPage: 200 })
  const authUsers = authData?.users ?? []
  const authMap = new Map(
    authUsers.map((u) => [u.id, u.email_confirmed_at ?? u.confirmed_at ?? null])
  )

  const enriched = (profiles ?? []).map((p) => ({
    ...p,
    confirmed_at: authMap.get(p.id) ?? null,
  }))

  return NextResponse.json(enriched)
}

// POST /api/admin/users — invite a new user (admin only)
export async function POST(req: Request) {
  const profile = await getCurrentProfile()
  if (!profile || profile.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { email, display_name, role } = await req.json()

  if (!email || !role) {
    return NextResponse.json({ error: 'Email and role are required.' }, { status: 400 })
  }

  if (!['admin', 'editor'].includes(role)) {
    return NextResponse.json({ error: 'Role must be admin or editor.' }, { status: 400 })
  }

  const supabase = createAdminClient()

  // Invite user via Supabase (sends magic link email via Supabase SMTP)
  const { data: inviteData, error: inviteError } = await supabase.auth.admin.inviteUserByEmail(
    email,
    {
      data: { display_name, role },
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coastaltherapy.net'}/admin/auth/callback?next=/admin/set-password`,
    }
  )

  if (inviteError) {
    return NextResponse.json({ error: inviteError.message }, { status: 500 })
  }

  // Create the profile row
  const { error: profileError } = await supabase
    .from('coastal_user_profiles')
    .insert({
      id: inviteData.user.id,
      email,
      display_name: display_name || null,
      role,
    })

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, userId: inviteData.user.id })
}
