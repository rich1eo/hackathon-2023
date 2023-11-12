import { saveAs } from 'file-saver'
import { toPng } from 'html-to-image'
import { useCallback, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { PointsContext } from '@hackathon-2023/client/features/game-context'
import { Button, ButtonSize, ButtonTheme, Text, TextAlign, TextSize } from '@hackathon-2023/client/uikit'

import { fearDeclination } from './utils/fear-declination'

import styles from './SharePage.module.css'

export const SharePage = () => {
  const { points, setPoints } = useContext(PointsContext)
  const imageRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  const handleRestartGame = useCallback(() => {
    setPoints(0)
    navigate('/game')
  }, [navigate, setPoints])

  const handleSaveImage = useCallback(() => {
    if (imageRef.current) {
      toPng(imageRef.current).then((dataUrl) => {
        saveAs(dataUrl, 'Сильнее-страхов-share.png')
      })
    }
  }, [])

  return (
    <div className={styles.container}>
      <Text size={TextSize.M} align={TextAlign.Center} title="Сильнее страхов" />

      <div ref={imageRef} className={styles.imageContainer}>
        <p className={styles.imageTitle}>
          Я помог побороть <span className={styles.imagePoints}>{points}</span>&nbsp;{fearDeclination(points)}
        </p>
        <p className={styles.imageText}>
          Благодаря заботе, поддержке и руководству ребенок смог&nbsp;преодолеть свои фобии и раскрыть свой потенциал!
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.buttons}>
          <Button size={ButtonSize.M} onClick={handleSaveImage} title="">
            Скачать картинку
          </Button>
          <Button size={ButtonSize.M} onClick={handleRestartGame} title="">
            Начать снова
          </Button>
        </div>

        <div className={styles.share}>
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=Я помог побороть ${points} ${fearDeclination(
              points,
            )}! Попробуйте и вы&url= https://hackathon-2023-murex.vercel.app/`}
            rel="noreferrer"
          >
            <Button theme={ButtonTheme.Twitter} size={ButtonSize.M} />
          </a>

          <a
            target="_blank"
            href={`https://telegram.me/share/url?url= https://hackathon-2023-murex.vercel.app/&text=Я помог побороть ${points} ${fearDeclination(
              points,
            )}! Попробуйте и вы
            `}
            rel="noreferrer"
          >
            <Button theme={ButtonTheme.Telegram} size={ButtonSize.M} />
          </a>

          <a
            target="_blank"
            href={`https://vk.com/share.php?url= https://hackathon-2023-murex.vercel.app/&title=Я помог побороть ${points} ${fearDeclination(
              points,
            )}! Попробуйте и вы&noparse=true
            `}
            rel="noreferrer"
          >
            <Button theme={ButtonTheme.Vk} size={ButtonSize.M} />
          </a>
        </div>
      </div>
    </div>
  )
}
