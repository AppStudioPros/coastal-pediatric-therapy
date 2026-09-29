import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createAdminClient } from '@/lib/supabase/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const firstName  = formData.get('firstName') as string
    const lastName   = formData.get('lastName') as string
    const email      = formData.get('email') as string
    const phone      = formData.get('phone') as string
    const position   = formData.get('position') as string
    const hasLicense = formData.get('hasLicense') as string
    const resumeFile = formData.get('resume') as File | null

    let resumeUrl = ''
    if (resumeFile && resumeFile.size > 0) {
      const ext = resumeFile.name.split('.').pop()?.toLowerCase() || 'pdf'
      const filename = `resumes/${Date.now()}-${firstName?.toLowerCase()}-${lastName?.toLowerCase()}.${ext}`
      const bytes = await resumeFile.arrayBuffer()
      const supabase = createAdminClient()
      const { error } = await supabase.storage
        .from('coastal-blog-images')
        .upload(filename, Buffer.from(bytes), { contentType: resumeFile.type, upsert: false })
      if (!error) {
        resumeUrl = `https://dmdkwhdvgizoignoqpxb.supabase.co/storage/v1/object/public/coastal-blog-images/${filename}`
      }
    }

    const html = `
      <h2 style="color:#1e3a5f;margin-bottom:16px;">New Job Application — Coastal Pediatric Therapy Center</h2>
      <table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;width:200px;">Name</td><td style="padding:8px 12px;">${firstName} ${lastName}</td></tr>
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Phone</td><td style="padding:8px 12px;">${phone}</td></tr>
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Position</td><td style="padding:8px 12px;">${position}</td></tr>
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Valid License</td><td style="padding:8px 12px;">${hasLicense}</td></tr>
        ${resumeUrl ? `<tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Resume</td><td style="padding:8px 12px;"><a href="${resumeUrl}" style="color:#1e7faa;font-weight:bold;">Download Resume</a></td></tr>` : '<tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Resume</td><td style="padding:8px 12px;color:#9ca3af;">Not uploaded</td></tr>'}
      </table>
      <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;"/>
      <p style="font-size:12px;color:#9ca3af;">Submitted via coastaltherapy.net/careers</p>
    `

    await resend.emails.send({
      from: 'Coastal Therapy Careers <noreply@mail.coastaltherapy.net>',
      to: 'apply@coastaltherapy.net',
      replyTo: email,
      subject: `New Application: ${position} — ${firstName} ${lastName}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
