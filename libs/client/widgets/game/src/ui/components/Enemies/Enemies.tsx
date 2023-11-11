import { memo, useEffect, useMemo } from 'react'

import {
  AdultsEnemy,
  BeingRidiculedEnemy,
  BetrayalEnemy,
  DarknessEnemy,
  DoctorsEnemy,
  Enemy,
  GuardianshipEnemy,
  LonelinessEnemy,
  MomDisappearEnemy,
  NewPlacesEnemy,
  UnusualEnemy,
  ViolenceEnemy,
} from '@hackathon-2023/client/features/enemy'
import { Weapon } from '@hackathon-2023/client/features/weapon'

import { EnemySprite } from '../EnemySprite/EnemySprite'

const violenceEnemy = new ViolenceEnemy()
const darknessEnemy = new DarknessEnemy()
const betrayalEnemy = new BetrayalEnemy()
const unusualEnemy = new UnusualEnemy()
const guardianshipEnemy = new GuardianshipEnemy()
const beingRidiculedEnemy = new BeingRidiculedEnemy()
const doctorsEnemy = new DoctorsEnemy()
const adultsEnemy = new AdultsEnemy()
const newPlacesEnemy = new NewPlacesEnemy()
const momDisappearEnemy = new MomDisappearEnemy()
const lonelinessEnemy = new LonelinessEnemy()

interface EnemiesProps {
  handleSetEnemies: (enemies: Enemy[]) => void
  stateEnemies: Enemy[]
  handleKillEnemy: (name: string) => void
  handleAddPoints: (points: number) => void
  weapon: Weapon
}

export const Enemies = memo(
  ({ handleSetEnemies, handleKillEnemy, handleAddPoints, stateEnemies, weapon }: EnemiesProps) => {
    const initialEnemies = useMemo(
      () => [
        violenceEnemy,
        darknessEnemy,
        betrayalEnemy,
        unusualEnemy,
        guardianshipEnemy,
        beingRidiculedEnemy,
        doctorsEnemy,
        adultsEnemy,
        newPlacesEnemy,
        momDisappearEnemy,
        lonelinessEnemy,
      ],
      [],
    )

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
