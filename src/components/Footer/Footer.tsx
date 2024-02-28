import ScoreSection from './ScoreSection/ScoreSection'

function Footer({ cross, circle, tie} : {cross: string, circle: string, tie: string}) {
  return (
    <footer className='w-full flex justify-between items-center'>
      <ScoreSection 
        wrapperClassName='bg-[#31C4BE]'
        playerLabel='X PLAYER'
        scoreLabel={cross}
      />
      <ScoreSection 
        wrapperClassName='bg-[#A8BEC9]'
        playerLabel='TIES'
        scoreLabel={tie}
      />
      <ScoreSection 
        wrapperClassName='bg-[#F2B237]'
        playerLabel='O PLAYER'
        scoreLabel={circle}
      />
    </footer>
  )
}

export default Footer