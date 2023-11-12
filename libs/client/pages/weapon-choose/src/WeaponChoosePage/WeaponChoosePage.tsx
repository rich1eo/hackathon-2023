import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { WeaponContext } from '@hackathon-2023/client/features/game-context'
import { Button, ButtonSize, ButtonTheme, Text, TextAlign } from '@hackathon-2023/client/uikit'

import Aim from '../assets/aim.svg'

import styles from './WeaponChoosePage.module.css'

const weapons = [
  { title: 'Понимание', value: 'UnderstandingWeapon' },
  { title: 'Терпение', value: 'PatienceWeapon' },
  { title: 'Забота', value: 'CareWeapon' },
  { title: 'Внимание', value: 'AttentionWeapon' },
]

export const WeaponChoosePage = () => {
  const { weapon, changeWeapon } = useContext(WeaponContext)

  const navigate = useNavigate()

  const handleWeaponChange = useCallback(
    (weapon: string) => {
      changeWeapon(weapon)
    },
    [changeWeapon],
  )

  const handleStartGame = useCallback(() => {
    navigate('/game')
  }, [navigate])

  return (
    <div className={styles.WeaponChoosePage}>
      <header className={styles.header}>
        <Text title="Сильнее страхов" align={TextAlign.Center} />
      </header>

      <Text text="Выберите оружие:" align={TextAlign.Center} className={styles.weaponChooseText} />

      <div className={styles.weapons}>
        {weapons.map((item) => (
          <div className={styles.weaponCard} key={item.value}>
            <Button
              style={{
                backgroundColor: item.value === weapon.name ? 'var(--color-green-800)' : '',
              }}
              onClick={() => handleWeaponChange(item.value)}
              theme={ButtonTheme.Yellow}
            >
              <Aim />
            </Button>
            <Text text={item.title} />
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <Button onClick={handleStartGame} size={ButtonSize.L} className={styles.btn}>
          Начать игру
        </Button>
      </div>
    </div>
  )
}
