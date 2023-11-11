import { DamageType, Weapon } from './weapon'

export class AirWeapon extends Weapon {
  constructor() {
    super({ name: 'AirWeapon', damage: 1, accuracy: 1, damageType: DamageType.Air })
  }

  // Если нужно переопределить лить существующий метод
  upgradeDamage() {
    this.damage += 2
  }
}
