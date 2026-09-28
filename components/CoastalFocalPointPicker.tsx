'use client'

import { useRef } from 'react'

interface Props {
  value: string
  onChange: (val: string) => void
  previewUrl: string
}

function parsePosition(val: string): { x: number; y: number } {
  const parts = val.replace(/%/g, '').trim().split(/\s+/)
  const x = parseFloat(parts[0]) || 50
  const y = parseFloat(parts[1]) || 50
  return { x, y }
}

export default function HeroPositionPicker({ value, onChange, previewUrl }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { x, y } = parsePosition(value)

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const xPct = Math.round(((e.clientX - rect.left) / rect.width) * 100)
    const yPct = Math.round(((e.clientY - rect.top) / rect.height) * 100)
    onChange(`${xPct}% ${yPct}%`)
  }

  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: '#1e3a5f' }}>
        Hero Focal Point
        <span className="ml-2 text-xs font-normal" style={{ color: '#aaa' }}>
          Click anywhere on the image to set the focal point
        </span>
      </label>

      <div
        ref={containerRef}
        onClick={handleClick}
        className="relative w-full rounded-lg overflow-hidden cursor-crosshair"
        style={{ height: '180px', border: '1px solid #d1e5ef' }}
      >
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${previewUrl})`,
            backgroundPosition: value,
          }}
        />

        {/* Dark overlay to help see the dot */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }} />

        {/* Grid lines for reference */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '33.33% 33.33%',
        }} />

        {/* Focal point dot */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="w-5 h-5 rounded-full border-2 border-white shadow-lg"
            style={{ backgroundColor: '#1e7faa' }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-8 h-px bg-white/60"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
          <div
            className="absolute top-1/2 left-1/2 h-8 w-px bg-white/60"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>

      <p className="text-xs mt-1.5" style={{ color: '#aaa' }}>
        Position: {x}% {y}% — the blue dot shows where the image will stay anchored in the hero
      </p>
    </div>
  )
}
