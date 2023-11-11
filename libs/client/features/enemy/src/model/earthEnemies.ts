import { DamageType } from '@hackathon-2023/client/features/weapon'
import { Enemy } from './enemy'

interface EarthEnemyProps {
  x: number
  y: number
}

export class SimpleEarthEnemy extends Enemy {
  constructor({ x, y }: EarthEnemyProps) {
    super({ name: 'Earth', image: 'earth.png', x, y, speed: 1, health: 1, weakness: DamageType.Air, points: 1 })
  }
}

export class FastEarthEnemy extends Enemy {
  constructor({ x, y }: EarthEnemyProps) {
    super({ name: 'Earth', image: 'earth.png', x, y, speed: 2, health: 1, weakness: DamageType.Air, points: 2 })
  }
}

export class StrongEarthEnemy extends Enemy {
  constructor({ x, y }: EarthEnemyProps) {
    super({ name: 'Earth', image: 'earth.png', x, y, speed: 1, health: 2, weakness: DamageType.Air, points: 2 })
  }
}
