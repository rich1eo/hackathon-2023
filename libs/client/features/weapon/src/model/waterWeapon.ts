import { DamageType, Weapon } from './weapon'

export class WaterWeapon extends Weapon {
  constructor() {
    super({ name: 'WaterWeapon', damage: 3, accuracy: 1, damageType: DamageType.Water })
  }

  // Если нужно переопределить лить существующий метод
  upgradeDamage() {
    this.damage += 2
  }
}
