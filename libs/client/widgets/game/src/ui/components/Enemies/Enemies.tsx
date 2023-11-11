import { memo, useEffect, useMemo } from 'react'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { Weapon } from '@hackathon-2023/client/features/weapon'

import { enemiesByName } from '../../../data/enemies'
import { EnemySprite } from '../EnemySprite/EnemySprite'

interface EnemiesProps {
  handleSetEnemies: (enemies: Enemy[]) => void
  stateEnemies: Enemy[]
  handleKillEnemy: (name: string) => void
  handleAddPoints: (points: number) => void
  weapon: Weapon
}

export const Enemies = memo(
  ({ handleSetEnemies, stateEnemies, handleKillEnemy, handleAddPoints, weapon }: EnemiesProps) => {
    const initialEnemies = useMemo(() => Object.values(enemiesByName), [])

    useEffect(() => {
      handleSetEnemies(initialEnemies)
    }, [initialEnemies, handleSetEnemies])

    return (
      <>
        {stateEnemies.map((enemy) => (
          <EnemySprite
            key={enemy.name}
            enemy={enemy}
            weapon={weapon}
            onKilled={handleKillEnemy}
            onPointsAdded={handleAddPoints}
          />
        ))}
      </>
    )
  },
)
