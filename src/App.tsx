import { useState, useEffect } from 'react'
import Footer from './components/Footer/Footer'
import TicTacField from './components/TicTacField/TicTacField'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'

function App() {

  const [crossTurn, setCrossTurn] = useState(true)
  const [clickTicTac, setClickTicTac] = useState(false)
  const [tableTicTac, setTableTicTac] = useState([ '', '', '', '', '', '', '', '', ''])
  const [winner, setwinner] = useState('')

  useEffect(() => {
    if (clickTicTac) {
      setCrossTurn(!crossTurn)
      setClickTicTac(false)
    }
  }, [clickTicTac])

  const markTable = (idx: number) => {
    setClickTicTac(true)
    const newTable = tableTicTac;
    newTable[idx] = crossTurn ? 'cross' : 'circle'
    setwinner(checkTable(newTable) as string)
    setTableTicTac(newTable)
  }

  const checkTable = (array: string[]) => {
    if (array[0] !== '' && array[0] === array[1] && array[0] === array[2]) return array[0]
    else if (array[3] !== '' && array[3] === array[4] && array[3] === array[5]) return array[3]
    else if (array[6] !== '' && array[6] === array[7] && array[6] === array[8]) return array[6]
    else if (array[0] !== '' && array[0] === array[3] && array[0] === array[6]) return array[0]
    else if (array[1] !== '' && array[1] === array[4] && array[1] === array[7]) return array[1]
    else if (array[2] !== '' && array[2] === array[5] && array[2] === array[8]) return array[0]
    else if (array[0] !== '' && array[0] === array[4] && array[0] === array[8]) return array[0]
    else if (array[2] !== '' && array[2] === array[4] && array[2] === array[6]) return array[2]
    else if (!array.includes('')) return 'empate'
  }
  
  useEffect(() => {
    if (winner !== '') console.log(winner)
  },[winner])

  return (
    <>
      <main className='bg-[#192A32] h-screen w-screen grid place-content-center'>
        <section className='w-[470px] max-h-[800px] flex flex-col'>
          {winner && <Modal typeIcon={winner}/>}        
          <Header
            wrapperClassName='mb-5'
            turn={crossTurn}
          />
          <div className="grid grid-cols-3 gap-4 w-full mb-5">
            {tableTicTac.map((item, idx) => 
              <div key={idx}>
                <TicTacField
                  markTable={() => markTable(idx)} 
                  typeIcon={item} />
              </div>
              )
            }
          </div>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
