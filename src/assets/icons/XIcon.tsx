import { IconsProps } from "../Interfaces"

function XIcon({ wrapperClassName, strokeColor }: IconsProps) {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg' 
        className={`${wrapperClassName || ''} icon icon-tabler icon-tabler-x`}
        viewBox='0 0 24 24' 
        strokeWidth='4' 
        stroke={strokeColor} fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M18 6l-12 12'></path>
        <path d='M6 6l12 12'></path>
      </svg>
    </>
  )
}

export default XIcon