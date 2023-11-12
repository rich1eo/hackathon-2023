import * as PIXI from 'pixi.js'
import { memo, useMemo } from 'react'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { Weapon } from '@hackathon-2023/client/features/weapon'
import { Container, Stage } from '@pixi/react'
import { Text, TextSize } from '@hackathon-2023/client/uikit'

import { formatTime } from '../utils/format-time'

import { Boxes } from './components/Boxes/Boxes'
import { Enemies } from './components/Enemies/Enemies'

import styles from './Game.module.css'
import { Button, ButtonTheme } from '@hackathon-2023/client/uikit'

interface GameProps {
  enemies: Enemy[]
  points: number
  weapon: Weapon
  handleAddPoints: (point: number) => void
  handleKillEnemy: (name: string) => void
  handleSetEnemies: (enemies: Enemy[]) => void
  secondsElapsed: number
  isEndless: boolean
  handleFinishGame: () => void
  handleRestart: () => void
}

export const Game = memo(
  ({
    enemies,
    points,
    weapon,
    handleAddPoints,
    handleKillEnemy,
    handleSetEnemies,
    secondsElapsed,
    isEndless,
    handleFinishGame,
    handleRestart,
  }: GameProps) => {
    return (
      <div className={styles.game}>
        <div className={styles.info}>
          <div className={styles.points}>
            <Text size={TextSize.L} text="Очки:" />

            <p className={styles.pointsValue}>{points}</p>
          </div>
          <div className={styles.controllers}>
            <p className={styles.timer}>{formatTime(secondsElapsed)}</p>
            {isEndless && <Button theme={ButtonTheme.Stop} onClick={handleFinishGame} />}
            <Button theme={ButtonTheme.Restart} onClick={handleRestart} />
          </div>
        </div>
        <Stage options={{ backgroundColor: '#6a6a6c' }} width={1180} height={600}>
          <Enemies
            handleSetEnemies={handleSetEnemies}
            stateEnemies={enemies}
            handleKillEnemy={handleKillEnemy}
            handleAddPoints={handleAddPoints}
            weapon={weapon}
          />

          <Boxes />
        </Stage>
      </div>
    )
  },
)
