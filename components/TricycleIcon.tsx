'use client'

import { useEffect, useRef } from 'react'

interface LottieInstance {
  destroy: () => void
}

declare global {
  interface Window {
    lottie?: {
      loadAnimation: (config: {
        container: HTMLElement
        animationData: unknown
        renderer: string
        loop: boolean
        autoplay: boolean
      }) => LottieInstance
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const animData = require('@/public/icons/tricycle.json')

export default function TricycleIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    import('lottie-web').then(lottie => {
      const anim = lottie.default.loadAnimation({
        container: ref.current!,
        animationData: animData,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      })
      return () => anim.destroy()
    })
  }, [])

  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, flexShrink: 0 }}
      aria-hidden="true"
    >
      <div ref={ref} style={{ width: size * 1.2, height: size * 1.2 }} />
    </span>
  )
}
