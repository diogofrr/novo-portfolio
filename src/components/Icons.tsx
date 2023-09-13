interface IconProps {
  width: number
  height: number
}


export const VerifiedIcon = ({ width, height }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} height={`${height}px`} viewBox="0 0 12 12" fill="none">
      <g clipPath="url(#clip0_19_75)">
        <path d="M11.5 6L10.28 4.605L10.45 2.76L8.645 2.35L7.7 0.75L6 1.48L4.3 0.75L3.355 2.345L1.55 2.75L1.72 4.6L0.5 6L1.72 7.395L1.55 9.245L3.355 9.655L4.3 11.25L6 10.515L7.7 11.245L8.645 9.65L10.45 9.24L10.28 7.395L11.5 6ZM5.045 8.36L3.145 6.455L3.885 5.715L5.045 6.88L7.97 3.945L8.71 4.685L5.045 8.36Z" fill="#1DA1F2"/>
      </g>
      <defs>
        <clipPath id="clip0_19_75">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
