import styles from './GamePage.module.css'

/* eslint-disable-next-line */
export interface GamePageProps {}

export function GamePage(props: GamePageProps) {
  return (
    <div className={styles.GamePage}>
      <h1>Game Page</h1>
    </div>
  )
}

export default GamePage
