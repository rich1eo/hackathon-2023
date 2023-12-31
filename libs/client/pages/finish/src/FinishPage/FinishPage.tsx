import { useCallback, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { PointsContext } from '@hackathon-2023/client/features/game-context'
import { Button, ButtonSize, ButtonTheme, Text, TextAlign, TextSize } from '@hackathon-2023/client/uikit'

import { fearDeclination } from './utils/fear-declination'

import styles from './FinishPage.module.css'

export const FinishPage = () => {
  const { points, setPoints } = useContext(PointsContext)

  const navigate = useNavigate()

  const handleRestartGame = useCallback(() => {
    setPoints(0)
    navigate('/game')
  }, [navigate, setPoints])

  const handleStartPage = useCallback(() => {
    setPoints(0)
    navigate('/')
  }, [navigate, setPoints])

  const handleShare = useCallback(() => {
    navigate('/share')
  }, [navigate])

  const fearString = useMemo(() => fearDeclination(points), [points])

  return (
    <div className={styles.container}>
      <Text align={TextAlign.Center} title="Отлично!" />

      <Text
        align={TextAlign.Center}
        size={TextSize.S}
        className={styles.description}
        title={
          <>
            Вы помогли побороть <span className={styles.points}>{points}</span> {fearString}
          </>
        }
      />

      <Text
        align={TextAlign.Left}
        size={TextSize.S}
        className={styles.text}
        text="С каждым днем мальчик Ваня становился смелее, а коробки — легче. Благодаря заботе родителей, поддержке и терпению ребенок смог преодолеть свои фобии и раскрыть свой потенциал!"
      />

      <div className={styles.buttons}>
        <Button theme={ButtonTheme.Green} size={ButtonSize.M} onClick={handleStartPage}>
          На главную
        </Button>

        <Button size={ButtonSize.M} onClick={handleRestartGame}>
          Начать снова
        </Button>

        <Button onClick={handleShare} theme={ButtonTheme.Share} />
      </div>
    </div>
  )
}

export default FinishPage
