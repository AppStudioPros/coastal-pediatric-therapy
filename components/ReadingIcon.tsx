export default function ReadingIcon({ size = 16, className = '', color = '#24B5D0' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 430 430" fill="none" className={className} aria-hidden="true" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12">
      <path stroke={color} d="M357.5 180c-14.738-19.16-14.738-45.84 0-65"/>
      <path stroke={color} d="M127.5 180H105c-17.95 0-32.5-14.551-32.5-32.5S87.05 115 105 115h257.5c11.046 0 20-8.954 20-20V80H105c-37.28 0-67.5 30.221-67.5 67.5S67.72 215 105 215h277.5v-15c0-11.046-8.954-20-20-20h-180"/>
      <path stroke={color} d="M127.5 115h55v80L155 180l-27.5 15z"/>
      <path stroke={color} d="M112.5 115h85"/>
      <path stroke={color} d="M72.5 250c14.739 19.16 14.739 45.84 0 65"/>
      <path stroke={color} d="M325 315c17.949 0 32.5-14.551 32.5-32.5S342.949 250 325 250H67.5c-11.046 0-20-8.954-20-20v-15H325c37.279 0 67.5 30.221 67.5 67.5S362.279 350 325 350H47.5v-15c0-11.046 8.954-20 20-20z"/>
    </svg>
  )
}
