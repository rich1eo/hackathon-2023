import { Weakness } from '../types'
import { Enemy } from './enemy'

interface FireEnemyProps {
  x: number
  y: number
}

export class SimpleFireEnemy extends Enemy {
  constructor({ x, y }: FireEnemyProps) {
    super({ name: 'Fire', image: 'fire.png', x, y, speed: 1, health: 1, weakness: Weakness.Water, points: 1 })
  }
}

export class FastFireEnemy extends Enemy {
  constructor({ x, y }: FireEnemyProps) {
    super({ name: 'Fire', image: 'fire.png', x, y, speed: 2, health: 1, weakness: Weakness.Water, points: 2 })
  }
}

export class StrongFireEnemy extends Enemy {
  constructor({ x, y }: FireEnemyProps) {
    super({ name: 'Fire', image: 'fire.png', x, y, speed: 1, health: 2, weakness: Weakness.Water, points: 2 })
  }
}
