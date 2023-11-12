import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PointsContext } from '@hackathon-2023/client/features/game-context'

import styles from './FinishPage.module.css'

/* eslint-disable-next-line */
export interface FinishPageProps {}

export const FinishPage = (props: FinishPageProps) => {
  const { points } = useContext(PointsContext)

  const navigate = useNavigate()

  const handleReastartGame = useCallback(() => {
    navigate('/game')
  }, [navigate])

  return (
    <div className={styles.container}>
      <h1>Ваши баллы: {points}</h1>

      <button onClick={handleReastartGame}>Начать заново</button>
    </div>
  )
}

export default FinishPage
