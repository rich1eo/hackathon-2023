import { DamageType } from '@hackathon-2023/client/features/weapon'

import betrayalImage from './assets/betrayal.png'
import betrayalBrokenImage from './assets/betrayal-broken.png'
import guardianshipImage from './assets/guardianship.png'
import guardianshipBrokenImage from './assets/guardianship-broken.png'
import unusualImage from './assets/unusual.png'
import unusualBrokenImage from './assets/unusual-broken.png'
import { Enemy } from './enemy'

export class BetrayalEnemy extends Enemy {
  constructor() {
    super({
      name: 'Betrayal',
      image: betrayalImage,
      defeatedImage: betrayalBrokenImage,
      x: 418,
      y: 95,
      speed: 0.5,
      health: 4,
      weakness: DamageType.Understanding,
      points: 7,
    })
  }
}

export class UnusualEnemy extends Enemy {
  constructor() {
    super({
      name: 'Unusual',
      image: unusualImage,
      defeatedImage: unusualBrokenImage,
      x: 618,
      y: 95,
      speed: 2,
      health: 1,
      weakness: DamageType.Understanding,
      points: 5,
    })
  }
}

export class GuardianshipEnemy extends Enemy {
  constructor() {
    super({
      name: 'Guardianship',
      image: guardianshipImage,
      defeatedImage: guardianshipBrokenImage,
      x: 418,
      y: 385,
      speed: 1,
      health: 2,
      weakness: DamageType.Understanding,
      points: 2,
    })
  }
}
