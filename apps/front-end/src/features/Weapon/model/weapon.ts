interface WeaponProps {
  name: string
  damage: number
  accuracy: number
  damageType: DamageType
}

export enum DamageType {
  Fire = 'Fire',
  Water = 'Water',
  Earth = 'Earth',
  Air = 'Air',
}

export class Weapon {
  name: string
  damage: number
  accuracy: number
  damageType: DamageType

  constructor({ name, damage, accuracy, damageType }: WeaponProps) {
    this.name = name
    this.damage = damage
    this.accuracy = accuracy
    this.damageType = damageType
  }

  upgradeDamage() {
    this.damage += 1
  }

  upgradeShotRadius() {
    this.accuracy += 1
  }
}
