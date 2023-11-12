import { DamageType } from '@hackathon-2023/client/features/weapon'

import beingRidiculedImage from './assets/being-ridiculed.png'
import beingRidiculedBrokenImage from './assets/being-ridiculed-broken.png'
import doctorsImage from './assets/doctors.png'
import doctorsBrokenImage from './assets/doctors-broken.png'
import violenceImage from './assets/violence.png'
import violenceBrokenImage from './assets/violence-broken.png'
import { Enemy } from './enemy'

export class ViolenceEnemy extends Enemy {
  constructor() {
    super({
      name: 'Violence',
      image: violenceImage,
      defeatedImage: violenceBrokenImage,
      speed: 0.5,
      health: 6,
      weakness: DamageType.Care,
      points: 10,
      x: 18,
      y: 95,
    })
  }
}

export class BeingRidiculedEnemy extends Enemy {
  constructor() {
    super({
      name: 'BeingRidiculed',
      image: beingRidiculedImage,
      defeatedImage: beingRidiculedBrokenImage,
      x: 218,
      y: 385,
      speed: 2,
      health: 1,
      weakness: DamageType.Care,
      points: 5,
    })
  }
}

export class DoctorsEnemy extends Enemy {
  constructor() {
    super({
      name: 'Doctors',
      image: doctorsImage,
      defeatedImage: doctorsBrokenImage,
      x: 18,
      y: 385,
      speed: 1,
      health: 3,
      weakness: DamageType.Care,
      points: 3,
    })
  }
}
