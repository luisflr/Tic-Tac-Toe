import { ButtonProps } from "../Interfaces"

function Button({ wrapperClassName, children, label }: ButtonProps) {
  return (
    <button
      className={`${wrapperClassName || ''} flex items-center rounded-md shadow-xl`}
    >
      {children || null}
      {label}
    </button>
  )
}

export default Button