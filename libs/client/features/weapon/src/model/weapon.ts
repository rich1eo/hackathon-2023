interface WeaponProps {
  name: string
  damage: number
  accuracy: number
  damageType: DamageType
}

export enum DamageType {
  Patience = 'Patience',
  Understanding = 'Understanding',
  Care = 'Care',
  Attention = 'Attention',
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
