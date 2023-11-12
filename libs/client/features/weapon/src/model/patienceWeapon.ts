import { DamageType, Weapon } from './weapon'

export class PatienceWeapon extends Weapon {
  constructor() {
    super({ name: 'PatienceWeapon', damage: 1, accuracy: 1, damageType: DamageType.Patience })
  }
}
