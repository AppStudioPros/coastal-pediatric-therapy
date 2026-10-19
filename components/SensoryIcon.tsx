export default function SensoryIcon({ size = 16, className = '', color = '#24B5D0' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 430 430" fill="none" className={className} aria-hidden="true" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="12">
      <path stroke={color} d="M260 290V147.5c0-45.278-30.864-83.348-72.701-94.318M65 290v-45m72.701-191.818C95.864 64.152 65 102.222 65 147.5v12.504"/>
      <path stroke={color} d="M365 290v-43m-210 43v-95c0-19.33 15.67-35 35-35s35 15.67 35 35v20.5c0 19.33 15.67 35 35 35s35-15.67 35-35V145c0-19.33 15.67-35 35-35s35 15.67 35 35v17M30 300c0-5.523 4.477-10 10-10h350c5.523 0 10 4.477 10 10v40c0 5.523-4.477 10-10 10H40c-5.523 0-10-4.477-10-10zM187.5 50c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25"/>
      <path stroke={color} d="M40 170c0-5.523 4.477-10 10-10h30c5.523 0 10 4.477 10 10v15c0 5.523-4.477 10-10 10H50c-5.523 0-10-4.477-10-10zm350 17c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25"/>
      <path stroke={color} d="M340 222c0-5.523 4.477-10 10-10h30c5.523 0 10 4.477 10 10v15c0 5.523-4.477 10-10 10h-30c-5.523 0-10-4.477-10-10zm-250-2c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25"/>
    </svg>
  )
}
