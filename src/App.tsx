
import Footer from './components/Footer/Footer'
import TicTacField from './components/TicTacField/TicTacField'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import useApp from './hooks/useApp';

function App() {
  const {
    crossVictoryCounter, circleVictoryCounter, tieCounter,
    winner, turnPlayer, tableTicTac,
    setwinner,
    markTable
  } = useApp()
  

  return (
    <>
      <main className='bg-[#192A32] h-screen w-screen grid place-content-center'>
        <section className='w-[470px] max-h-[800px] flex flex-col'>
          {winner && <Modal typeIcon={winner} setwinner={setwinner}/>}        
          <Header
            wrapperClassName='mb-5'
            turn={turnPlayer}
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
          <Footer
            cross={`${crossVictoryCounter}`}
            circle={`${circleVictoryCounter}`}
            tie={`${tieCounter}`}
          />
        </section>
      </main>
    </>
  )
}

export default App
