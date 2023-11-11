import { memo, useEffect, useMemo } from 'react'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { Weapon } from '@hackathon-2023/client/features/weapon'

import { EnemySprite } from '../EnemySprite/EnemySprite'
import { enemiesByName } from '../../../data/enemies'

interface EnemiesProps {
  handleSetEnemies: (enemies: Enemy[]) => void
  stateEnemies: Enemy[]
  handleKillEnemy: (name: string) => void
  handleAddPoints: (points: number) => void
  weapon: Weapon
}

export const Enemies = memo(
  ({ handleSetEnemies, handleKillEnemy, handleAddPoints, stateEnemies, weapon }: EnemiesProps) => {
    const initialEnemies = useMemo(() => Object.values(enemiesByName), [])

    useEffect(() => {
      handleSetEnemies(initialEnemies)
    }, [initialEnemies, handleSetEnemies])

    return (
      <>
        {stateEnemies.map((enemy) => (
          <EnemySprite
            key={enemy.name}
            onKilled={handleKillEnemy}
            onPointsAdded={handleAddPoints}
            weapon={weapon}
            enemy={enemy}
          />
        ))}
      </>
    )
  },
)
