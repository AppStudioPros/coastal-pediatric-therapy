import { getCurrentProfile } from '@/lib/auth'
import { createAdminClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// PATCH /api/admin/users/[id] — update role + display_name (admin only)
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const profile = await getCurrentProfile()
  if (!profile || profile.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const { role, display_name } = await req.json()

  const supabase = createAdminClient()
  const { error } = await supabase
    .from('coastal_user_profiles')
    .update({ role, display_name })
    .eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}

// POST /api/admin/users/[id] — actions: resend_invite | reset_password (admin only)
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const profile = await getCurrentProfile()
  if (!profile || profile.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const { action, email } = await req.json()
  const supabase = createAdminClient()

  if (action === 'resend_invite') {
    // Re-invite — generates a fresh invite link
    const { error } = await supabase.auth.admin.inviteUserByEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coastaltherapy.net'}/admin/auth/callback?next=/admin/set-password`,
    })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true })
  }

  if (action === 'reset_password') {
    // Send password reset email via Resend (not Supabase default)
    try {
      const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
        type: 'recovery',
        email,
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coastaltherapy.net'}/admin/set-password`,
        },
      })
      if (linkError) return NextResponse.json({ error: linkError.message }, { status: 500 })

      const resetUrl = linkData?.properties?.action_link

      // Send via Resend
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Coastal Therapy Admin <noreply@mail.coastaltherapy.net>',
          to: [email],
          subject: 'Reset your Coastal Therapy Admin password',
          html: `
            <p>Hi there,</p>
            <p>Someone (likely an admin) requested a password reset for your Coastal Pediatric Therapy admin account.</p>
            <p><a href="${resetUrl}" style="background:#1e7faa;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;font-weight:bold;">Reset Password</a></p>
            <p style="color:#999;font-size:12px;">If you didn't request this, you can ignore this email.</p>
            <p style="color:#999;font-size:12px;">Coastal Pediatric Therapy Center · Jacksonville Beach &amp; Mandarin, FL</p>
          `,
        }),
      })

      if (!resendRes.ok) {
        const resendErr = await resendRes.json()
        return NextResponse.json({ error: resendErr.message || 'Email failed to send.' }, { status: 500 })
      }

      return NextResponse.json({ success: true })
    } catch (err) {
      return NextResponse.json({ error: 'Failed to send reset email.' }, { status: 500 })
    }
  }

  return NextResponse.json({ error: 'Unknown action.' }, { status: 400 })
}

// DELETE /api/admin/users/[id] — remove user entirely (admin only)
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const profile = await getCurrentProfile()
  if (!profile || profile.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params

  if (id === profile.id) {
    return NextResponse.json({ error: "You can't remove yourself." }, { status: 400 })
  }

  const supabase = createAdminClient()
  const { error } = await supabase.auth.admin.deleteUser(id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
