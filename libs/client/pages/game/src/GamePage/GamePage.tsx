import { GameWidget } from '@hackathon-2023/client/widgets/game'

import styles from './GamePage.module.css'

/* eslint-disable-next-line */
export interface GamePageProps {}

export const GamePage = (props: GamePageProps) => {
  return (
    <div className={styles.GamePage}>
      <GameWidget />
    </div>
  )
}

export default GamePage
