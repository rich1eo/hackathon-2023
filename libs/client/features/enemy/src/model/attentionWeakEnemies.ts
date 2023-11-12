import { DamageType } from '@hackathon-2023/client/features/weapon'

import lonelinessImage from './assets/loneliness.png'
import lonelinessBrokenImage from './assets/loneliness-broken.png'
import momDisappearImage from './assets/mom-disappear.png'
import momDisappearBrokenImage from './assets/mom-disappear-broken.png'
import newPlacesImage from './assets/new-places.png'
import newPlacesBrokenImage from './assets/new-places-broken.png'
import { Enemy } from './enemy'

export class NewPlacesEnemy extends Enemy {
  constructor() {
    super({
      name: 'NewPlaces',
      image: newPlacesImage,
      defeatedImage: newPlacesBrokenImage,
      x: 818,
      y: 95,
      speed: 1,
      health: 4,
      weakness: DamageType.Attention,
      points: 3,
    })
  }
}

export class MomDisappearEnemy extends Enemy {
  constructor() {
    super({
      name: 'MomDisappear',
      image: momDisappearImage,
      defeatedImage: momDisappearBrokenImage,
      x: 1018,
      y: 95,
      speed: 2,
      health: 1,
      weakness: DamageType.Attention,
      points: 5,
    })
  }
}

export class LonelinessEnemy extends Enemy {
  constructor() {
    super({
      name: 'Loneliness',
      image: lonelinessImage,
      defeatedImage: lonelinessBrokenImage,
      x: 1018,
      y: 385,
      speed: 1,
      health: 5,
      weakness: DamageType.Attention,
      points: 8,
    })
  }
}
