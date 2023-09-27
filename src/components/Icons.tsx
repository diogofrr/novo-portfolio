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

export const DuplicateIcon = ({ width, height }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} height={`${height}px`} viewBox="0 0 20 20" fill="none">
      <path d="M9 2C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V12C7 12.5304 7.21071 13.0391 7.58579 13.4142C7.96086 13.7893 8.46957 14 9 14H15C15.5304 14 16.0391 13.7893 16.4142 13.4142C16.7893 13.0391 17 12.5304 17 12V6.414C16.9999 5.88361 16.7891 5.37499 16.414 5L14 2.586C13.625 2.2109 13.1164 2.00011 12.586 2H9Z" fill="white"/>
      <path d="M3 8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6V16H13C13 16.5304 12.7893 17.0391 12.4142 17.4142C12.0391 17.7893 11.5304 18 11 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V8Z" fill="white"/>
    </svg>
  )
}