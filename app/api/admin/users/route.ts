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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coastaltherapy.net'

  // Step 1: Generate invite link (creates user + token, does NOT send email)
  const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
    type: 'invite',
    email,
    options: {
      data: { display_name, role },
      redirectTo: `${siteUrl}/admin/auth/callback?next=/admin/set-password`,
    },
  })

  if (linkError) {
    return NextResponse.json({ error: linkError.message }, { status: 500 })
  }

  const userId = linkData.user.id
  const inviteUrl = linkData.properties.action_link

  // Step 2: Create the profile row
  const { error: profileError } = await supabase
    .from('coastal_user_profiles')
    .insert({
      id: userId,
      email,
      display_name: display_name || null,
      role,
    })

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 })
  }

  // Step 3: Send the invite email ourselves via Resend (mail.coastaltherapy.net)
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 580px; margin: 0 auto; color: #1e3a5f;">
      <div style="background: #1e7faa; padding: 28px 32px; border-radius: 8px 8px 0 0; text-align: center;">
        <p style="color: #fff; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 8px;">Coastal Pediatric Therapy Center</p>
        <h1 style="color: #fff; font-size: 22px; font-weight: 800; margin: 0;">You've been invited</h1>
      </div>
      <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="font-size: 15px; color: #374151; line-height: 1.7; margin-bottom: 24px;">
          Hi${display_name ? ` ${display_name}` : ''},<br><br>
          You've been invited to the <strong>Coastal Pediatric Therapy Center</strong> blog admin as a <strong>${role}</strong>. Click the button below to set your password and get started.
        </p>
        <div style="text-align: center; margin: 28px 0;">
          <a href="${inviteUrl}" style="display: inline-block; background: #1e7faa; color: #fff; font-weight: 700; font-size: 15px; padding: 14px 36px; border-radius: 6px; text-decoration: none;">
            Accept Invite
          </a>
        </div>
        <p style="font-size: 12px; color: #9ca3af; text-align: center; margin-top: 24px;">
          This link expires in 24 hours. If you didn't expect this invite, you can safely ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="font-size: 12px; color: #9ca3af; text-align: center; margin: 0;">
          Coastal Pediatric Therapy Center &bull; Jacksonville Beach &amp; Mandarin, FL &bull; coastaltherapy.net
        </p>
      </div>
    </div>
  `

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Coastal Pediatric Therapy Center <noreply@mail.coastaltherapy.net>',
      to: email,
      subject: "You've been invited to Coastal Pediatric Therapy Center",
      html,
    }),
  })

  if (!resendRes.ok) {
    const err = await resendRes.text()
    console.error('Resend invite error:', err)
    // Don't fail — user was created, just log the email issue
  }

  return NextResponse.json({ success: true, userId })
}
