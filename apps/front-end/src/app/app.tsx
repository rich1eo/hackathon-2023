import { PointsProvider } from '@hackathon-2023/client/features/game-context'

import { AppRouter } from './providers/router'

import styles from './app.module.css'

export function App() {
  return (
    <div className={styles.App}>
      <PointsProvider>
        <AppRouter />
      </PointsProvider>
    </div>
  )
}

export default App
