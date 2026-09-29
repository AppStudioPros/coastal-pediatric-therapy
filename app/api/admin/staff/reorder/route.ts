import { getCurrentProfile } from '@/lib/auth'
import { createAdminClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const profile = await getCurrentProfile()
  if (!profile || !['admin', 'super_admin'].includes(profile.role)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const { order } = await req.json() as { order: { id: string; display_order: number }[] }
  const supabase = createAdminClient()
  for (const item of order) {
    await supabase
      .from('coastal_staff')
      .update({ display_order: item.display_order, updated_at: new Date().toISOString() })
      .eq('id', item.id)
  }
  return NextResponse.json({ success: true })
}
