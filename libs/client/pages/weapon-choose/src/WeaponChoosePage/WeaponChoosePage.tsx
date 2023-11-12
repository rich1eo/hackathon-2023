import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { WeaponContext } from '@hackathon-2023/client/features/game-context'

const weapons = ['UnderstandingWeapon', 'PatienceWeapon', 'CareWeapon', 'AttentionWeapon']

export const WeaponChoosePage = () => {
  const { weapon, changeWeapon } = useContext(WeaponContext)

  const navigate = useNavigate()

  const handleWeaponChange = useCallback((weapon: string) => {
    changeWeapon(weapon)
  }, [])

  const handlleStartGame = useCallback(() => {
    navigate('/game')
  }, [])

  return (
    <div>
      {weapons.map((item) => (
        <button
          style={{
            backgroundColor: item === weapon.name ? 'red' : 'white',
          }}
          key={item}
          onClick={() => handleWeaponChange(item)}
        >
          {item}
        </button>
      ))}

      <button style={{ marginLeft: '50px' }} onClick={handlleStartGame}>
        Начать игру
      </button>
    </div>
  )
}
