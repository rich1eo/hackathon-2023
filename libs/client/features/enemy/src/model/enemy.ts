import { Weakness } from '../types'

interface EnemyProps {
  name: string
  weakness: Weakness
  image: string
  x: number
  y: number
  speed: number
  health: number
  points: number
}

export class Enemy {
  name: string
  weakness: Weakness
  image: string
  x: number
  y: number
  speed: number
  health: number
  isDefeated: boolean
  points: number

  constructor({ name, weakness, image, x, y, speed, health, points }: EnemyProps) {
    this.name = name
    this.weakness = weakness
    this.image = image
    this.x = x
    this.y = y
    this.speed = speed
    this.health = health
    this.isDefeated = false
    this.points = points
  }

  takeDamage(weapon: any): number {
    const damage = weapon.damageType === this.weakness ? weapon.damage * 2 : weapon.damage
    this.health -= damage

    if (this.health <= 0) {
      this.isDefeated = true
      return this.points
    }
    return 0
  }

  getPosition(): { x: number; y: number } {
    return { x: this.x, y: this.y }
  }

  updatePosition({ newX, newY }: { newX: number; newY: number }) {
    this.x = newX
    this.y = newY
  }
}
