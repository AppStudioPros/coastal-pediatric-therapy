'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Waves } from 'lucide-react'

export default function SetPasswordPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function init() {
      // Handle hash fragments from Supabase (#access_token=...)
      if (typeof window !== 'undefined' && window.location.hash) {
        const params = new URLSearchParams(window.location.hash.substring(1))
        const accessToken = params.get('access_token')
        const refreshToken = params.get('refresh_token')
        if (accessToken && refreshToken) {
          await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
          window.history.replaceState(null, '', window.location.pathname)
        }
      }

      // Retry a few times in case cookies are still propagating
      let user = null
      for (let i = 0; i < 3; i++) {
        const { data } = await supabase.auth.getUser()
        if (data.user) { user = data.user; break }
        await new Promise((r) => setTimeout(r, 500))
      }

      if (user) {
        setEmail(user.email ?? '')
        setReady(true)
      } else {
        router.replace('/admin/login?error=invite_expired')
      }
    }

    init()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError("Passwords don't match.")
      return
    }

    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/admin/dashboard')
    router.refresh()
  }

  if (!ready) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e7faa 100%)' }}
      >
        <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-xl">
          <p className="text-sm" style={{ color: '#6b7280' }}>Setting up your account…</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1e7faa 100%)' }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl px-8 py-10 sm:px-10 sm:py-12">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: '#e8f4f8' }}
            >
              <Waves size={28} style={{ color: '#1e7faa' }} />
            </div>
            <h1 className="text-2xl font-bold" style={{ color: '#1e3a5f' }}>Welcome!</h1>
            <p className="text-sm mt-1 text-center" style={{ color: '#6b7280' }}>
              Create a password to activate your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email — read only */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#374151' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-4 py-3 rounded-lg border text-sm"
                style={{ borderColor: '#d1d5db', backgroundColor: '#f9fafb', color: '#6b7280' }}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#374151' }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border outline-none text-sm transition-all"
                style={{ borderColor: '#d1d5db' }}
                placeholder="At least 8 characters"
              />
            </div>

            <div>
              <label htmlFor="confirm" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#374151' }}>
                Confirm password
              </label>
              <input
                id="confirm"
                type="password"
                required
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border outline-none text-sm transition-all"
                style={{ borderColor: '#d1d5db' }}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-100 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: '#1e7faa' }}
            >
              {loading ? 'Creating your account…' : 'Create account & sign in'}
            </button>
          </form>

          <p className="text-center text-xs mt-8" style={{ color: '#9ca3af' }}>
            Coastal Pediatric Therapy Center · Jacksonville Beach &amp; Mandarin, FL
          </p>
        </div>
      </div>
    </div>
  )
}
