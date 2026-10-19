export default function StudentCapIcon({ size = 16, className = '', color = '#24B5D0' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 430 430" fill="none" className={className} aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
      <path stroke={color} strokeWidth="12" d="m322.4 202.27-.44 94.52s-27.49 50.29-107.05 50.03c-80.67-.26-108.85-50.03-108.85-50.03l.44-94.52"/>
      <path stroke={color} strokeWidth="12" d="M37.25 147.75h-2.1L35 176.78l179.49 63.78 180.45-64.03.03-28.69h-5.92m5.86-.03L214.49 84 35 147.78l179.49 63.78z"/>
      <path stroke={color} strokeWidth="12" d="m215.47 146.78 77 28v105m0 2.5v23.84"/>
      <path stroke={color} strokeWidth="21" d="M292.47 282.28v23.84"/>
    </svg>
  )
}
