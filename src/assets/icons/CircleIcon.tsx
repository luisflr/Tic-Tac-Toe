import { IconsProps } from "../Interfaces"

function CircleIcon({ wrapperClassName, strokeColor }: IconsProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${wrapperClassName || ''} icon icon-tabler icon-tabler-circle`}
      viewBox='0 0 24 24'
      strokeWidth='4'
      stroke={strokeColor}
      fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
    </svg>
  )
}

export default CircleIcon