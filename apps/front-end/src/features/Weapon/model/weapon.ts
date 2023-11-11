export class Weapon {
  name: string
  damage: number
  capacity: number

  constructor(name: string, damage: number = 1, capacity: number = 1) {
    this.name = name
    this.damage = damage
    this.capacity = capacity
  }

  upgradeDamage() {
    this.damage += 1
  }

  upgradeShotRadius() {
    this.capacity += 1
  }
}
