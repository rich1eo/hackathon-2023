import {
  AdultsEnemy,
  BeingRidiculedEnemy,
  BetrayalEnemy,
  DarknessEnemy,
  DoctorsEnemy,
  Enemy,
  GuardianshipEnemy,
  LonelinessEnemy,
  MomDisappearEnemy,
  NewPlacesEnemy,
  UnusualEnemy,
  ViolenceEnemy,
} from '@hackathon-2023/client/features/enemy'

const violenceEnemy = new ViolenceEnemy()
const darknessEnemy = new DarknessEnemy()
const betrayalEnemy = new BetrayalEnemy()
const unusualEnemy = new UnusualEnemy()
const guardianshipEnemy = new GuardianshipEnemy()
const beingRidiculedEnemy = new BeingRidiculedEnemy()
const doctorsEnemy = new DoctorsEnemy()
const adultsEnemy = new AdultsEnemy()
const newPlacesEnemy = new NewPlacesEnemy()
const momDisappearEnemy = new MomDisappearEnemy()
const lonelinessEnemy = new LonelinessEnemy()

export const enemiesArray: Enemy[] = [
  violenceEnemy,
  darknessEnemy,
  betrayalEnemy,
  unusualEnemy,
  guardianshipEnemy,
  beingRidiculedEnemy,
  doctorsEnemy,
  adultsEnemy,
  newPlacesEnemy,
  momDisappearEnemy,
  lonelinessEnemy,
]

export const enemiesFactory: Record<string, () => Enemy> = {
  [violenceEnemy.name]: () => new ViolenceEnemy(),
  [darknessEnemy.name]: () => new DarknessEnemy(),
  [betrayalEnemy.name]: () => new BetrayalEnemy(),
  [unusualEnemy.name]: () => new UnusualEnemy(),
  [guardianshipEnemy.name]: () => new GuardianshipEnemy(),
  [beingRidiculedEnemy.name]: () => new BeingRidiculedEnemy(),
  [doctorsEnemy.name]: () => new DoctorsEnemy(),
  [adultsEnemy.name]: () => new AdultsEnemy(),
  [newPlacesEnemy.name]: () => new NewPlacesEnemy(),
  [momDisappearEnemy.name]: () => new MomDisappearEnemy(),
  [lonelinessEnemy.name]: () => new LonelinessEnemy(),
}
