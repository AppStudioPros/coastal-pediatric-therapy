export default function TricycleIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 28"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Big front wheel */}
      <circle cx="9" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="20" r="1.5" />

      {/* Two small rear wheels */}
      <circle cx="25" cy="22" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="25" cy="22" r="1" />

      {/* Frame: seat tube up from front axle */}
      <line x1="9" y1="20" x2="12" y2="10" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />

      {/* Frame: top tube to rear axle */}
      <line x1="12" y1="10" x2="25" y2="18" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />

      {/* Frame: down tube front wheel to rear */}
      <line x1="9" y1="20" x2="25" y2="22" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" />

      {/* Seat */}
      <line x1="10" y1="8.5" x2="15" y2="8.5" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" />
      <line x1="12" y1="8.5" x2="12" y2="10" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />

      {/* Handlebars stem */}
      <line x1="9" y1="13" x2="9" y2="10" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
      {/* Handlebar bar */}
      <line x1="6.5" y1="10" x2="11.5" y2="10" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      {/* Handlebar grips curve down */}
      <line x1="6.5" y1="10" x2="6" y2="12" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
      <line x1="11.5" y1="10" x2="12" y2="12" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />

      {/* Pedals */}
      <line x1="5.5" y1="20" x2="4" y2="18.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" />
      <line x1="12.5" y1="20" x2="14" y2="21.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}
