import { useCallback, useEffect, useState} from 'react'

export default function useApp() {

  let crossVictoryCounter = localStorage.getItem('cross') ? Number(localStorage.getItem('cross')) : localStorage.setItem('cross', '0');
  let circleVictoryCounter = localStorage.getItem('circle') ? Number(localStorage.getItem('circle')) : localStorage.setItem('circle', '0');
  let tieCounter = localStorage.getItem('tie') ? Number(localStorage.getItem('tie')) : localStorage.setItem('tie', '0');

  const [turnPlayer, setTurnPlayer] = useState('cross')
  const [clickTicTac, setClickTicTac] = useState(false)
  const [tableTicTac, setTableTicTac] = useState(
    [ '', '', '', 
      '', '', '', 
      '', '', '']
    )
  const [winner, setwinner] = useState('')

  const updateStorage = (finalWinner: string) => {    
    switch (finalWinner) {
      case 'empate':
        localStorage.setItem('tie' , (Number(tieCounter) + 1).toString() )    
        break;
      case 'cross':
        localStorage.setItem('cross' , (Number(crossVictoryCounter) + 1).toString() )    
        break;
      case 'circle':
        localStorage.setItem('circle' , (Number(circleVictoryCounter) + 1).toString() )    
        break;
    
      default:
        break;
    }
  }

  useEffect(() => {
    if (clickTicTac) {
      setTurnPlayer(turnPlayer === 'cross' ? 'circle': 'cross')
      setClickTicTac(false)
    }
  }, [clickTicTac])

  useEffect(() => {
    updateStorage(winner)
  },[winner])

  const markTable = (idx: number) => {
    setClickTicTac(true)
    const newTable = tableTicTac
    newTable[idx] = turnPlayer
    checkTable(newTable)
    setTableTicTac(newTable)
  }

  const checkTable = useCallback((array: string[]): void => {
    if (array[0] !== '' && array[0] === array[1] && array[0] === array[2]) setwinner(array[0])
    else if (array[3] !== '' && array[3] === array[4] && array[3] === array[5]) setwinner(array[3])
    else if (array[6] !== '' && array[6] === array[7] && array[6] === array[8]) setwinner(array[6])
    else if (array[0] !== '' && array[0] === array[3] && array[0] === array[6]) setwinner(array[0])
    else if (array[1] !== '' && array[1] === array[4] && array[1] === array[7]) setwinner(array[1])
    else if (array[2] !== '' && array[2] === array[5] && array[2] === array[8]) setwinner(array[2])
    else if (array[0] !== '' && array[0] === array[4] && array[0] === array[8]) setwinner(array[0])
    else if (array[2] !== '' && array[2] === array[4] && array[2] === array[6]) setwinner(array[2])
    else if (!array.includes('')) setwinner('empate')
    else setwinner('')
  },[])

  return {
    /* Variables */
    crossVictoryCounter,
    circleVictoryCounter,
    tieCounter,
    
    /* States */
    winner,
    tableTicTac,
    turnPlayer,
    /* State Functions */
    setwinner,
    /* Functions */
    markTable
  }
}
