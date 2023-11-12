import { DamageType } from '@hackathon-2023/client/features/weapon'

import adultsImage from './assets/adults.png'
import adultsBrokenImage from './assets/adults-broken.png'
import darknessImage from './assets/darkness.png'
import darknessBrokenImage from './assets/darkness-broken.png'
import { Enemy } from './enemy'

interface EnemyProps {
  x: number
  y: number
}

export class DarknessEnemy extends Enemy {
  constructor() {
    super({
      name: 'Darkness',
      image: darknessImage,
      defeatedImage: darknessBrokenImage,
      x: 218,
      y: 95,
      speed: 1,
      health: 2,
      weakness: DamageType.Patience,
      points: 3,
    })
  }
}

export class AdultsEnemy extends Enemy {
  constructor() {
    super({
      name: 'Adults',
      image: adultsImage,
      defeatedImage: adultsBrokenImage,
      x: 618,
      y: 385,
      speed: 0.5,
      health: 4,
      weakness: DamageType.Patience,
      points: 7,
    })
  }
}
