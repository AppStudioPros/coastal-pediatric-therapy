'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X, Type, Contrast, Eye, RotateCcw } from 'lucide-react'

function A11yIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="ctCircleGrad" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#1e9ab8" />
          <stop offset="55%" stopColor="#0e4a5c" />
          <stop offset="100%" stopColor="#082030" />
        </radialGradient>
        <radialGradient id="ctFigureGrad" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c8f0fa" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#ctCircleGrad)" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <circle cx="24" cy="13" r="3.5" fill="url(#ctFigureGrad)" />
      <rect x="22.5" y="17" width="3" height="9" rx="1.5" fill="url(#ctFigureGrad)" />
      <rect x="13" y="18.5" width="22" height="3" rx="1.5" fill="url(#ctFigureGrad)" />
      <rect x="22.5" y="25.5" width="3" height="9.5" rx="1.5" transform="rotate(-15 22.5 25.5)" fill="url(#ctFigureGrad)" />
      <rect x="22.5" y="25.5" width="3" height="9.5" rx="1.5" transform="rotate(15 25.5 25.5)" fill="url(#ctFigureGrad)" />
      <ellipse cx="18" cy="14" rx="4.5" ry="2.5" fill="rgba(255,255,255,0.15)" transform="rotate(-20 18 14)" />
    </svg>
  )
}

interface A11ySettings {
  fontSize: number
  contrast: 'normal' | 'high' | 'inverted'
  underlineLinks: boolean
  highlightFocus: boolean
  reducedMotion: boolean
}

const DEFAULT: A11ySettings = { fontSize: 1, contrast: 'normal', underlineLinks: false, highlightFocus: false, reducedMotion: false }

export default function AccessibilityWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT)

  if (pathname?.startsWith('/admin')) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    try {
      const saved = localStorage.getItem('coastal-a11y-settings')
      if (saved) setSettings(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const html = document.documentElement
    html.style.fontSize = `${settings.fontSize * 100}%`
    html.classList.remove('a11y-high-contrast', 'a11y-inverted')
    if (settings.contrast === 'high') html.classList.add('a11y-high-contrast')
    if (settings.contrast === 'inverted') html.classList.add('a11y-inverted')
    settings.underlineLinks ? html.classList.add('a11y-underline-links') : html.classList.remove('a11y-underline-links')
    settings.highlightFocus ? html.classList.add('a11y-focus-highlight') : html.classList.remove('a11y-focus-highlight')
    settings.reducedMotion ? html.classList.add('a11y-reduce-motion') : html.classList.remove('a11y-reduce-motion')
    localStorage.setItem('coastal-a11y-settings', JSON.stringify(settings))
  }, [settings])

  const reset = () => setSettings(DEFAULT)

  const btnStyle = (active: boolean): React.CSSProperties => ({
    background: active ? '#24B5D0' : 'rgba(255,255,255,0.08)',
    border: `1px solid ${active ? '#24B5D0' : 'rgba(255,255,255,0.15)'}`,
    color: active ? '#fff' : 'rgba(255,255,255,0.75)',
    borderRadius: 6, padding: '8px 12px', cursor: 'pointer',
    fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.15s',
    display: 'flex', alignItems: 'center', gap: 6,
  })

  const fontSizes = [
    { label: 'A', size: 1, title: 'Normal text' },
    { label: 'A+', size: 1.15, title: 'Large text' },
    { label: 'A++', size: 1.3, title: 'Larger text' },
    { label: 'A+++', size: 1.5, title: 'Largest text' },
  ]

  return (
    <>
      <style>{`
        .a11y-high-contrast { filter: contrast(1.5); }
        .a11y-inverted { filter: invert(1) hue-rotate(180deg); }
        .a11y-underline-links a { text-decoration: underline !important; }
        .a11y-focus-highlight *:focus { outline: 3px solid #AF29BE !important; outline-offset: 3px !important; }
        .a11y-reduce-motion *, .a11y-reduce-motion *::before, .a11y-reduce-motion *::after {
          animation-duration: 0.001ms !important; transition-duration: 0.001ms !important;
        }
      `}</style>

      {/* Floating button — sits above chat orb */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Accessibility options"
        aria-expanded={open}
        title="Accessibility Options"
        style={{
          position: 'fixed', bottom: 100, right: 24, zIndex: 9998,
          width: 40, height: 40, borderRadius: '50%',
          background: 'transparent', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.35))',
          transition: 'transform 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <A11yIcon size={52} />
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility settings"
          aria-modal="true"
          style={{
            position: 'fixed', bottom: 156, right: 24, zIndex: 9997,
            width: 300, background: '#0e4a5c',
            border: '1px solid rgba(36,181,208,0.35)',
            borderRadius: 10, boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
            padding: 20, color: '#fff',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <A11yIcon size={20} />
              <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Accessibility</span>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button onClick={reset} title="Reset all" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: 4 }}>
                <RotateCcw size={14} />
              </button>
              <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: 4 }}>
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Text Size */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Type size={12} /> Text Size
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
              {fontSizes.map(({ label, size, title }) => (
                <button key={size} onClick={() => setSettings(p => ({ ...p, fontSize: size }))} title={title}
                  style={btnStyle(settings.fontSize === size)} aria-pressed={settings.fontSize === size}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contrast */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Contrast size={12} /> Contrast
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {(['normal', 'high', 'inverted'] as const).map(c => (
                <button key={c} onClick={() => setSettings(p => ({ ...p, contrast: c }))}
                  style={btnStyle(settings.contrast === c)} aria-pressed={settings.contrast === c}>
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Eye size={12} /> Options
            </div>
            {([
              { key: 'underlineLinks' as const, label: 'Underline Links' },
              { key: 'highlightFocus' as const, label: 'Highlight Focus' },
              { key: 'reducedMotion' as const, label: 'Reduce Motion' },
            ]).map(({ key, label }) => (
              <button key={key} onClick={() => setSettings(p => ({ ...p, [key]: !p[key] }))}
                style={{ ...btnStyle(settings[key] as boolean), justifyContent: 'space-between' }}
                aria-pressed={settings[key] as boolean}>
                <span>{label}</span>
                <span style={{ width: 32, height: 18, borderRadius: 9, background: settings[key] ? '#24B5D0' : 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', padding: '0 3px', transition: 'background 0.15s' }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#fff', transform: settings[key] ? 'translateX(14px)' : 'translateX(0)', transition: 'transform 0.15s', display: 'block' }} />
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
