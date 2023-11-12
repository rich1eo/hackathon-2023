import { DamageType, Weapon } from './weapon'

export class AttentionWeapon extends Weapon {
  constructor() {
    super({ name: 'AttentionWeapon', damage: 1, accuracy: 1, damageType: DamageType.Attention })
  }
}
