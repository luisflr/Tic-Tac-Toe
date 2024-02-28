import Button from '../Button/Button'

import { HeaderProps } from '../Interfaces'
import ReloadIcon from '../../assets/icons/ReloadIcon'
import XIcon from '../../assets/icons/XIcon'
import CircleIcon from '../../assets/icons/CircleIcon'

function Header({ wrapperClassName, turn }: HeaderProps) {
  return (
    <header className={`${wrapperClassName || ''} flex justify-between items-center w-full`}>
      <div className='flex'>
        <XIcon
          wrapperClassName='w-9 h-9 mr-1'
          strokeColor='#31C4BE'
        />
        <CircleIcon
          wrapperClassName='w-8 h-8'
          strokeColor='#F2B237'
        />
      </div>
      <div
        className=' flex bg-[#1F3540] px-7 py-2 font-bold text-[#A9BFCA] w-fit justify-center items-center'
      >
        {turn
          ? <XIcon
              wrapperClassName='w-5 h-5 mr-2'
              strokeColor='#A9BFCA'
            />
          : <CircleIcon
              wrapperClassName='w-5 h-5 mr-2'
              strokeColor='#A9BFCA'
            />
        
        } TURN
      </div>
      <Button
        wrapperClassName='
          bg-[#A9BFCA] px-7 py-2 font-bold w-fit transition
          hover:scale-110'
        onClick={() => {window.location.assign('/')}}
      >
        <ReloadIcon
          wrapperClassName='w-5 h-5'
          strokeColor='#192A32'
        />
      </Button>
    </header>
  )
}

export default Header