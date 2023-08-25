import { IconsProps } from '../Interfaces'

function ReloadIcon({ wrapperClassName, strokeColor}: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${wrapperClassName || ''} icon icon-tabler icon-tabler-reload`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={strokeColor} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path>
      <path d="M20 4v5h-5"></path>
    </svg>
  )
}

export default ReloadIcon