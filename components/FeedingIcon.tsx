export default function FeedingIcon({ size = 16, className = '', color = '#24B5D0' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 430 430" fill="none" className={className} aria-hidden="true" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="12">
      <path stroke={color} d="M289.43 372.79c-7.11 0-12.88-5.77-12.88-12.88v-92.12h25.76v92.12c0 7.11-5.76 12.88-12.88 12.88"/>
      <path stroke={color} d="M302.31 57c-28.46 0-51.52 23.07-51.52 51.52v159.27h51.52zM161.8 372.79c-7.11 0-12.88-5.77-12.88-12.88V162h25.76v197.91c0 7.11-5.77 12.88-12.88 12.88M127 57v88.52c0 9.1 7.38 16.48 16.48 16.48h36.65c9.1 0 16.48-7.38 16.48-16.48V57m-34.81 0v69.26m34.63.55h-69.26"/>
    </svg>
  )
}
