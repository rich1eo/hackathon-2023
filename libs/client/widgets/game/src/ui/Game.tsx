import * as PIXI from 'pixi.js'
import { memo } from 'react'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { Weapon } from '@hackathon-2023/client/features/weapon'
import { Container, Stage, Text } from '@pixi/react'

import { Boxes } from './components/Boxes/Boxes'
import { Enemies } from './components/Enemies/Enemies'

import styles from './Game.module.css'

interface GameProps {
  enemies: Enemy[]
  points: number
  weapon: Weapon
  handleAddPoints: (point: number) => void
  handleKillEnemy: (name: string) => void
  handleSetEnemies: (enemies: Enemy[]) => void
}

export const Game = memo(
  ({ enemies, points, weapon, handleAddPoints, handleKillEnemy, handleSetEnemies }: GameProps) => {
    return (
      <div className={styles.game}>
        <Stage options={{ backgroundColor: '#6a6a6c' }} width={1180} height={600}>
          <Enemies
            handleSetEnemies={handleSetEnemies}
            stateEnemies={enemies}
            handleKillEnemy={handleKillEnemy}
            handleAddPoints={handleAddPoints}
            weapon={weapon}
          />

          <Boxes />

          <Container x={30} y={550}>
            <Text
              style={
                new PIXI.TextStyle({
                  stroke: '#01d27e',
                })
              }
              text={`Баллы: ${points.toString()}`}
              anchor={{ x: 0, y: 0.5 }}
            />
          </Container>
        </Stage>
      </div>
    )
  },
)
