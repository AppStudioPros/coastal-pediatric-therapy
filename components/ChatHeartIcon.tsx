export default function ChatHeartIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 430 430" fill="none" className={className} aria-hidden="true" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="12">
      <path stroke="#24B5D0" d="M213.5 190.4c9.8-9.6 25.6-9.6 35.3.2 4.9 4.9 7.4 11.3 7.4 17.8 0 6.3-2.4 12.7-7.2 17.6l-.2.2-35.3 35.2"/>
      <path stroke="#24B5D0" d="m249 225.9-35.5 35.5-35.3-35.3c-4.9-4.9-7.3-11.3-7.3-17.8 0-6.4 2.4-12.8 7.3-17.8 9.7-9.7 25.5-9.8 35.3-.2"/>
      <path stroke="#1e3a4a" d="M284.549 115.571h-137.26C100.244 115.571 62 153.71 62 200.86v114.97h222.549c46.626 0 84.451-37.825 84.451-84.452v-31.251c0-46.731-37.825-84.556-84.451-84.556"/>
    </svg>
  )
}
