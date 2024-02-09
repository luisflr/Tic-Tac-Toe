import { ButtonProps } from "../Interfaces"

function Button({ wrapperClassName, children, label, onClick }: ButtonProps) {
  return (
    <button
      className={`${wrapperClassName || ''} flex items-center rounded-md shadow-xl`}
      onClick={onClick}
    >
      {children || null}
      {label}
    </button>
  )
}

export default Button