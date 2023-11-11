import { AppRouter } from './providers/router'

import styles from './app.module.css'

export function App() {
  return (
    <div className={styles.App}>
      <AppRouter />
    </div>
  )
}

export default App
