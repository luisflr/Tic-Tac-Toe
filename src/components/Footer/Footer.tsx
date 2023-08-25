import ScoreSection from './ScoreSection/ScoreSection'

function Footer() {
  return (
    <footer className='w-full flex justify-between items-center'>
      <ScoreSection 
        wrapperClassName='bg-[#31C4BE]'
        playerLabel='X PLAYER'
        scoreLabel='0'
      />
      <ScoreSection 
        wrapperClassName='bg-[#A8BEC9]'
        playerLabel='TIES'
        scoreLabel='0'
      />
      <ScoreSection 
        wrapperClassName='bg-[#F2B237]'
        playerLabel='O PLAYER'
        scoreLabel='0'
      />
    </footer>
  )
}

export default Footer