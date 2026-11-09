import { randomUUID } from 'node:crypto'
import { NextResponse, type NextRequest } from 'next/server'
import { getResumeType, validateResume } from '@/app/career/resume'
import { createAdminClient } from '@/lib/supabase/server'

function getText(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function POST(req: NextRequest) {
  const formData = await req.formData().catch(() => null)
  if (!formData) {
    return NextResponse.json({ error: 'Invalid application form.' }, { status: 400 })
  }

  const firstName = getText(formData, 'firstName')
  const lastName = getText(formData, 'lastName')
  const email = getText(formData, 'email')
  const phone = getText(formData, 'phone')
  const position = getText(formData, 'position')
  const hasLicense = getText(formData, 'hasLicense')
  if (!firstName || !lastName || !email || !phone || !position || !hasLicense) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  const resume = formData.get('resume')
  if (typeof resume === 'string') {
    return NextResponse.json({ error: 'Please select a r�sum� file.' }, { status: 400 })
  }

  if (resume) {
    const error = validateResume(resume)
    if (error) return NextResponse.json({ error }, { status: 400 })
  }

  try {
    let resumeUrl = ''
    let attachment: { filename: string; content: string } | undefined
    if (resume) {
      const { extension, contentType } = getResumeType(resume.name)
      const bytes = Buffer.from(await resume.arrayBuffer())
      const storage = createAdminClient().storage.from('coastal-blog-images')
      const { data, error } = await storage.upload(`resumes/${randomUUID()}.${extension}`, bytes, {
        contentType,
        upsert: false,
      })
      if (error) {
        console.error('Careers r�sum� upload failed')
        return NextResponse.json({ error: 'Could not upload your r�sum�. Please try again.' }, { status: 500 })
      }

      resumeUrl = storage.getPublicUrl(data.path, { download: true }).data.publicUrl
      attachment = { filename: resume.name, content: bytes.toString('base64') }
    }

    const html = `
      <h2 style="color:#1e3a5f;margin-bottom:16px;">New Job Application - Coastal Pediatric Therapy Center</h2>
      <table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;width:200px;">Name</td><td style="padding:8px 12px;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Email</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(encodeURIComponent(email).replace('%40', '@'))}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Phone</td><td style="padding:8px 12px;">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Position</td><td style="padding:8px 12px;">${escapeHtml(position)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Valid License</td><td style="padding:8px 12px;">${escapeHtml(hasLicense)}</td></tr>
        ${resumeUrl
          ? `<tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Resume</td><td style="padding:8px 12px;"><a href="${escapeHtml(resumeUrl)}" style="color:#1e7faa;font-weight:bold;">Download Resume</a> (also attached)</td></tr>`
          : '<tr><td style="padding:8px 12px;background:#f0f9ff;font-weight:bold;">Resume</td><td style="padding:8px 12px;color:#9ca3af;">Not uploaded</td></tr>'}
      </table>
      <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;"/>
      <p style="font-size:12px;color:#9ca3af;">Submitted via coastaltherapy.net/careers</p>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Coastal Therapy Careers <noreply@mail.coastaltherapy.net>',
        to: 'apply@coastaltherapy.net',
        reply_to: email,
        subject: `New Application: ${position} - ${firstName} ${lastName}`,
        html,
        attachments: attachment ? [attachment] : undefined,
      }),
    })

    if (!response.ok) {
      console.error('Careers application email failed', response.status)
      return NextResponse.json({ error: 'Could not submit your application. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    console.error('Careers application submission failed')
    return NextResponse.json({ error: 'Could not submit your application. Please try again.' }, { status: 500 })
  }
}
