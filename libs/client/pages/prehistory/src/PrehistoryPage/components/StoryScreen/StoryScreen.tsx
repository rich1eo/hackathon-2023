import { memo } from 'react'

import { Button, ButtonTheme, Text, TextSize, TextTheme } from '@hackathon-2023/client/uikit'

import styles from './StoryScreen.module.css'

interface StoryScreenProps {
  image: string
  text: string
  background: string
  onClickNextStep?: () => void
  onClickPrevStep?: () => void
  nextButtonText?: string
}

export const StoryScreen = memo(
  ({ image, text, background, onClickNextStep, onClickPrevStep, nextButtonText = 'Далее' }: StoryScreenProps) => {
    return (
      <div style={{ backgroundColor: background }} className={styles.container}>
        <img src={image} alt="image" className={styles.image} />

        <div className={styles.content}>
          <Text size={TextSize.S} theme={TextTheme.Inverted} text={text} />

          {onClickPrevStep && (
            <Button onClick={onClickPrevStep} theme={ButtonTheme.Yellow} className={styles.prev}>
              Назад
            </Button>
          )}

          {onClickNextStep && (
            <Button onClick={onClickNextStep} theme={ButtonTheme.Yellow} className={styles.next}>
              {nextButtonText}
            </Button>
          )}
        </div>
      </div>
    )
  },
)
