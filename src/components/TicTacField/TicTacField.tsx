import XIcon from '../../assets/icons/XIcon'
import CircleIcon from '../../assets/icons/CircleIcon'
import { TicTacFieldProps } from '../Interfaces'

function TicTacField({ typeIcon, markTable }: TicTacFieldProps) {
  return (
    <button
      onClick={markTable}
      className='m-auto w-36 h-32 rounded-xl shadow-2xl flex items-center justify-center bg-[#1F3540] cursor-default'>
      {typeIcon === '' 
        ? null
        : typeIcon === 'cross'
          ? <XIcon 
            wrapperClassName='w-16 h-16 mr-1'
            strokeColor='#31C4BE'/> 
          : <CircleIcon 
          wrapperClassName='w-16 h-16 mr-1'
          strokeColor='#F2B237'/>}
    </button>
  )
}

export default TicTacField