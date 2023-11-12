import { DamageType, Weapon } from './weapon'

export class CareWeapon extends Weapon {
  constructor() {
    super({ name: 'CareWeapon', damage: 4, accuracy: 1, damageType: DamageType.Care })
  }
}
