import Image from 'next/image'

export default function TricycleIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <Image
      src="/tricycle-icon.png"
      alt=""
      width={size}
      height={Math.round(size * 0.56)}
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', objectFit: 'contain' }}
    />
  )
}
