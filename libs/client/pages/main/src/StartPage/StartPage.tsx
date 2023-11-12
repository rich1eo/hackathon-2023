import { memo, useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { EnemyModal } from '@hackathon-2023/client/features/enemy'
import { GamemodeContext, Gamemods } from '@hackathon-2023/client/features/game-context'
import { RulesModal } from '@hackathon-2023/client/features/rules'
import {
  Button,
  ButtonSize,
  ButtonTheme,
  Card,
  classNames,
  Text,
  TextAlign,
  TextTheme,
} from '@hackathon-2023/client/uikit'

import Toys from '../assets/toys.svg'

import styles from './StartPage.module.css'

const timeMods = [
  {
    label: '00:30',
    mode: Gamemods.HalfMinute,
  },
  {
    label: '01:00',
    mode: Gamemods.Minute,
  },
  {
    label: '02:00',
    mode: Gamemods.TwoMinutes,
  },
  {
    label: '05:00',
    mode: Gamemods.FiveMinutes,
  },
  {
    label: 'Бесконечная игра',
    mode: Gamemods.Endless,
  },
]

export const StartPage = memo(() => {
  const [openRules, setOpenRules] = useState(false)
  const [openFears, setOpenFears] = useState(false)
  const { gamemode, changeMode } = useContext(GamemodeContext)

  const navigate = useNavigate()

  const handleOpenRules = useCallback(() => {
    setOpenRules(true)
  }, [])

  const handleCloseRules = useCallback(() => {
    setOpenRules(false)
  }, [])

  const handleOpenFears = useCallback(() => {
    setOpenFears(true)
  }, [])

  const handleCloseFears = useCallback(() => {
    setOpenFears(false)
  }, [])

  const handleStartGame = useCallback(() => {
    navigate('/prehistory')
  }, [navigate])

  return (
    <div className={styles.StartPage}>
      <header className={styles.header}>
        <Text title="Сильнее страхов" align={TextAlign.Center} />
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <Text
            text="Ребенок, усыновлённый приёмными родителями, имеет свои страхи, с которыми нужно помочь ему справиться."
            className={styles.text}
          />
          <Card className={styles.timeCard}>
            <Text text="Выберите время игры:" theme={TextTheme.Inverted} />
            <div className={styles.timeList}>
              {timeMods.map((mod) => (
                <Button
                  className={classNames('', {
                    [styles.active]: gamemode === mod.mode,
                  })}
                  onClick={() => changeMode(mod.mode)}
                  key={mod.label}
                >
                  {mod.label}
                </Button>
              ))}
            </div>
          </Card>
          <Button onClick={handleStartGame} size={ButtonSize.L}>
            Старт
          </Button>
        </div>

        <Toys />
        <Button className={styles.fearsBtn} onClick={handleOpenFears}>
          Страхи
        </Button>
        {openFears && <EnemyModal isOpen={openFears} onClose={handleCloseFears} />}

        <Button className={styles.rulesBtn} theme={ButtonTheme.Green} onClick={handleOpenRules}>
          Правила
        </Button>
        {openRules && <RulesModal isOpen={openRules} onClose={handleCloseRules} />}
      </main>
    </div>
  )
})
