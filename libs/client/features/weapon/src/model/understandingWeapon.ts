import { DamageType, Weapon } from './weapon'

export class UnderstandingWeapon extends Weapon {
  constructor() {
    super({ name: 'UnderstandingWeapon', damage: 1, accuracy: 1, damageType: DamageType.Understanding })
  }
}
