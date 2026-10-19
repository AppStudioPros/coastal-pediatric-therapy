export default function TricycleIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Left small wheel */}
      <circle cx="4.5" cy="16.5" r="2.5" />
      {/* Right small wheel */}
      <circle cx="19.5" cy="16.5" r="2.5" />
      {/* Big rear wheel */}
      <circle cx="12" cy="17" r="3.5" />
      {/* Frame: seat post */}
      <line x1="12" y1="13.5" x2="12" y2="8" />
      {/* Handlebar */}
      <line x1="9" y1="8" x2="15" y2="8" />
      {/* Frame to left wheel */}
      <line x1="12" y1="13.5" x2="4.5" y2="14.5" />
      {/* Frame to right wheel */}
      <line x1="12" y1="13.5" x2="19.5" y2="14.5" />
      {/* Seat */}
      <line x1="10" y1="6.5" x2="14" y2="6.5" />
      <line x1="12" y1="6.5" x2="12" y2="8" />
    </svg>
  )
}
