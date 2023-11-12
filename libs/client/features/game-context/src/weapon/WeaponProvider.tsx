import { createContext, PropsWithChildren, useCallback, useState } from 'react'

import {
  AttentionWeapon,
  CareWeapon,
  PatienceWeapon,
  UnderstandingWeapon,
  Weapon,
} from '@hackathon-2023/client/features/weapon'

const weapons: Record<string, () => Weapon> = {
  UnderstandingWeapon: () => new UnderstandingWeapon(),
  PatienceWeapon: () => new PatienceWeapon(),
  CareWeapon: () => new CareWeapon(),
  AttentionWeapon: () => new AttentionWeapon(),
}

const WeaponContext = createContext<{
  weapon: Weapon
  changeWeapon: (weapon: string) => void
}>({
  weapon: new UnderstandingWeapon(),
  changeWeapon: () => {
    // do nothing
  },
})
const { Provider } = WeaponContext

const WeaponProvider = ({ children }: PropsWithChildren) => {
  const [weapon, setWeapon] = useState<Weapon>(weapons.UnderstandingWeapon())

  const changeWeapon = useCallback(
    (weapon: string) => {
      setWeapon(weapons[weapon]())
    },
    [setWeapon],
  )

  return <Provider value={{ weapon, changeWeapon }}>{children}</Provider>
}

export { WeaponContext, WeaponProvider }
