import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname

  // Routes that don't need auth
  const isAdminLogin = path === '/admin/login'
  const isAuthCallback = path.startsWith('/admin/auth/')
  const isSetPassword = path === '/admin/set-password'
  const isAdminRoute = path.startsWith('/admin')
  const isApi = path.startsWith('/api')
  const isPublicAsset =
    path.startsWith('/_next') ||
    path.startsWith('/images') ||
    path === '/favicon.ico'

  // Only enforce auth on /admin/* routes
  if (!isAdminRoute || isApi || isPublicAsset) {
    return supabaseResponse
  }

  // Allow auth flow routes without session
  if (isAdminLogin || isAuthCallback || isSetPassword) {
    // If already logged in and hitting /admin/login → redirect to dashboard
    if (user && isAdminLogin) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/dashboard'
      return NextResponse.redirect(url)
    }
    return supabaseResponse
  }

  // Protected admin routes — require auth
  if (!user) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  // Role check for /admin/dashboard/users — admin only
  if (path.startsWith('/admin/dashboard/users')) {
    const { data: profile } = await supabase
      .from('coastal_user_profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile || profile.role !== 'admin') {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/dashboard'
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
