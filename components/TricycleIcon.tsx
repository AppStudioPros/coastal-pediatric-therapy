export default function TricycleIcon({ size = 16, className = '', color = '#24B5D0' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 430 430" fill="none" className={className} aria-hidden="true" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
      <path stroke={color} strokeWidth="12" d="M291.7 375.2c49.871 0 90.3-40.429 90.3-90.3 0-49.872-40.429-90.3-90.3-90.3s-90.3 40.428-90.3 90.3 40.429 90.3 90.3 90.3m-199.7 0c23.748 0 43-19.252 43-43s-19.252-43-43-43-43 19.252-43 43 19.252 43 43 43"/>
      <path stroke={color} strokeWidth="12" d="M245.8 55h58.9c10.8 0 19.6 8.8 19.6 19.6s-8.8 19.6-19.6 19.6h-13v190.7"/>
      <path stroke={color} strokeWidth="12" d="M92 332.2c0-105.4 89.3-190.7 199.7-190.7"/>
      <path stroke={color} strokeWidth="12" d="M135 214s13.2-44 13.2-78.6v-16.1"/>
      <path stroke={color} strokeWidth="12" d="M109.6 119.3h84.2c0-10.3-7.6-19-17.8-20.4l-43.5-6c-12.1-1.7-23 7.8-23 20v6.4zm182.1 165.6 35.1 28.7m-70.3-57.4 35.2 28.7m57.1 28.7h-22m-70.3-57.4h-22"/>
      <path stroke={color} strokeWidth="25" d="M291.6 284.9h.1"/>
      <path stroke={color} strokeWidth="18" d="M92 332.2h.1"/>
    </svg>
  )
}
