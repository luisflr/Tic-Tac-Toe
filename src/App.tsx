import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <main className='bg-[#192A32] h-screen w-screen grid place-content-center'>
        <section className='w-[470px] max-h-[800px] flex flex-col'>
          <Header
            wrapperClassName='mb-5'
          />
          <div className="grid grid-cols-3 gap-4 w-full mb-5">
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>01</div>
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>02</div>
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>03</div>
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>04</div>
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>05</div>
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>06</div>
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>07</div>
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>08</div>
            <div className='m-auto w-36 h-32 rounded-xl shadow-2xl bg-[#1F3540]'>09</div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
