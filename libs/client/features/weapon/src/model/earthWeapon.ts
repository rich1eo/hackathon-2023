import { DamageType, Weapon } from './weapon'

export class EarthWeapon extends Weapon {
  constructor() {
    super({ name: 'EarthWeapon', damage: 2, accuracy: 1, damageType: DamageType.Earth })
  }

  // Если нужно переопределить лить существующий метод
  upgradeDamage() {
    this.damage += 4
  }
}
