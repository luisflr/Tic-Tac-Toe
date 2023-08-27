import { ReactNode } from 'react'

function GameTable({ children }: { children: ReactNode }) {
  return (
    <div className='m-auto w-36 h-32 rounded-xl shadow-2xl flex items-center justify-center bg-[#1F3540]'>
      {children}
    </div>
  )
}

export default GameTable