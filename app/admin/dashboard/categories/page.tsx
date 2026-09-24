import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import DashboardHeader from '../DashboardHeader'
import CategoriesManager from './CategoriesManager'

export const dynamic = 'force-dynamic'

export default async function CategoriesPage() {
  const profile = await requireAuth()
  const supabase = await createClient()

  const { data: categories } = await supabase
    .from('coastal_blog_categories')
    .select('*')
    .order('name', { ascending: true })

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f7fb' }}>
      <DashboardHeader profile={profile} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <CategoriesManager initialCategories={categories ?? []} />
      </div>
    </div>
  )
}
