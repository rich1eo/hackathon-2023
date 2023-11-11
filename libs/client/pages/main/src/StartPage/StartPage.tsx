import styles from './StartPage.module.css'

/* eslint-disable-next-line */
export interface StartPageProps {}

export const StartPage = (props: StartPageProps) => {
  return (
    <div className={styles.StartPage}>
      <h1>Start Page</h1>
    </div>
  )
}

export default StartPage
