import { DamageType } from '@hackathon-2023/client/features/weapon'
import { Enemy } from './enemy'

interface AirEnemyProps {
  x: number
  y: number
}

export class SimpleAirEnemy extends Enemy {
  constructor({ x, y }: AirEnemyProps) {
    super({ name: 'Air', image: 'air.png', x, y, speed: 1, health: 1, weakness: DamageType.Earth, points: 1 })
  }
}

export class FastAirEnemy extends Enemy {
  constructor({ x, y }: AirEnemyProps) {
    super({ name: 'Air', image: 'air.png', x, y, speed: 2, health: 1, weakness: DamageType.Earth, points: 2 })
  }
}

export class StrongAirEnemy extends Enemy {
  constructor({ x, y }: AirEnemyProps) {
    super({ name: 'Air', image: 'air.png', x, y, speed: 1, health: 2, weakness: DamageType.Earth, points: 2 })
  }
}
