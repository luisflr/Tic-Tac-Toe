import Footer from './components/Footer/Footer'
import GameTable from './components/GameTable/GameTable'
import Header from './components/Header/Header'

function App() {
  const arrayTest = ['11','2','3','4','5','6','7','8','9']
  return (
    <>
      <main className='bg-[#192A32] h-screen w-screen grid place-content-center'>
        <section className='w-[470px] max-h-[800px] flex flex-col'>
          <Header
            wrapperClassName='mb-5'
          />
          <div className="grid grid-cols-3 gap-4 w-full mb-5">
            {arrayTest.map(item => 
              <GameTable>{item}</GameTable>)}
          </div>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
