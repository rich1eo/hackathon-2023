import { DamageType, Weapon } from './weapon'

export class FireWeapon extends Weapon {
  constructor() {
    super({ name: 'FireWeapon', damage: 4, accuracy: 1, damageType: DamageType.Fire })
  }

  // Если нужно переопределить лить существующий метод
  upgradeDamage() {
    this.damage += 3
  }
}
