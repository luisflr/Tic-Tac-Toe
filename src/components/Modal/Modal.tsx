import { Dispatch, SetStateAction } from "react"
import CircleIcon from "../../assets/icons/CircleIcon"
import XIcon from "../../assets/icons/XIcon"
import Button from "../Button/Button"

function Modal({ typeIcon, setwinner }: { typeIcon: string, setwinner: Dispatch<SetStateAction<string>>}) {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-[#050c0f] bg-opacity-70 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all w-full">
            <div className="bg-[#1E3640] py-7 w-full">
              <div className="flex flex-col items-center justify-center">
                <p className="text-base font-semibold leading-6 text-white" id="modal-title">YOU WON!</p>
                <div className="mt-2 mb-3 flex items-center">
                  {typeIcon === 'cross'
                    ? <XIcon 
                      wrapperClassName='w-10 h-10 mr-2'
                      strokeColor='#31C4BE'
                    />
                    : <CircleIcon
                      wrapperClassName='w-8 h-8 mr-2'
                      strokeColor='#F2B237'
                    />
                  }
                  <p
                    className={`text-2xl font-bold ${typeIcon === 'cross' ? 'text-[#31C4BE]': 'text-[#F2B237]'}`}>TAKES THE ROUND</p>
                </div>
                <div className='flex space-x-4'>
                  <Button
                    onClick={() => {}}
                    wrapperClassName='bg-[#A9BFCA] px-7 py-2 font-bold text-[#192A32] w-fit transition
                    hover:scale-110'
                    label='QUIT'
                  />
                  <Button 
                    onClick={() => {window.location.assign('/')}}
                    wrapperClassName='bg-[#F2B237] px-7 py-2 font-bold text-[#192A32] w-fit transition
                    hover:scale-110'
                    label='NEXT ROUND'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal