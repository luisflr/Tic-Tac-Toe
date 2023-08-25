import { ScoreSectionProps } from '../../Interfaces'

function ScoreSection({ wrapperClassName, playerLabel, scoreLabel }: ScoreSectionProps) {
  return (
    <div className={`${wrapperClassName || ''} w-36 rounded-xl flex flex-col items-center justify-center p-2`}>
      <span className='text-[10px] font-semibold'>{playerLabel}</span>
      <p className='text-xl font-bold'>{scoreLabel}</p>
    </div>
  )
}

export default ScoreSection