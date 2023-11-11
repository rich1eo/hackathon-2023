export class Weapon {
  name: string
  damage: number
  accuracy: number

  constructor(name: string, damage: number = 1, accuracy: number = 1) {
    this.name = name
    this.damage = damage
    this.accuracy = accuracy
  }

  upgradeDamage() {
    this.damage += 1
  }

  upgradeShotRadius() {
    this.accuracy += 1
  }
}
