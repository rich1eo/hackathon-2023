import styles from './StoryScreen.module.css'

interface StoryScreenProps {
  image: string
  text: string
  background: string
  onClickNextStep: () => void
  isDark?: boolean
}

export const StoryScreen = ({ image, text, background, onClickNextStep, isDark = false }: StoryScreenProps) => {
  return (
    <div style={{ backgroundColor: background }} className={styles.container}>
      <img src={image} alt="image" className={styles.image} />
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <button className={styles.button} onClick={onClickNextStep}>
          Далее
        </button>
      </div>
    </div>
  )
}
