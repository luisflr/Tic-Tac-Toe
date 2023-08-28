import { useState, useEffect } from 'react'
import Footer from './components/Footer/Footer'
import TicTacField from './components/TicTacField/TicTacField'
import Header from './components/Header/Header'

function App() {

  const [crossTurn, setCrossTurn] = useState(true)
  const [clickTicTac, setClickTicTac] = useState(false)
  const [tableTicTac, setTableTicTac] = useState([ '', '', '', '', '', '', '', '', ''])

  useEffect(() => {
    if (clickTicTac) {
      setCrossTurn(!crossTurn)
      setClickTicTac(false)
    }
  }, [clickTicTac])

  const markTable = (idx: number) => {
    setClickTicTac(true)
    const newTable = tableTicTac;
    newTable[idx] = crossTurn ? 'cross' : 'noCross'
    setTableTicTac(newTable)
  }
  

  return (
    <>
      <main className='bg-[#192A32] h-screen w-screen grid place-content-center'>
        <section className='w-[470px] max-h-[800px] flex flex-col'>
          <Header
            wrapperClassName='mb-5'
          />
          <div className="grid grid-cols-3 gap-4 w-full mb-5">
            {tableTicTac.map((item, idx) => 
              <TicTacField 
                key={idx.toString()} 
                markTable={() => markTable(idx)} 
                typeIcon={item} />)
            }
          </div>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
