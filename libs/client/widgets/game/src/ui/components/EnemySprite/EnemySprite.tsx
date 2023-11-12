import { AlphaFilter } from 'pixi.js'
import { memo, useCallback, useRef, useState } from 'react'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { Weapon } from '@hackathon-2023/client/features/weapon'
import { Sprite, useTick } from '@pixi/react'

interface EnemyProps {
  weapon: Weapon
  enemy: Enemy
  onPointsAdded: (points: number) => void
  onKilled?: (name: string) => void
}

export const EnemySprite = memo(({ weapon, enemy, onPointsAdded, onKilled }: EnemyProps) => {
  const [yMovement, setYMovement] = useState(enemy.y)
  const [alpha, setAlpha] = useState(1)
  const countRef = useRef(0)
  const [wasDefeated, setWasDefeated] = useState(false)

  const onSpriteClick = useCallback(() => {
    enemy.takeDamage(weapon)

    if (enemy.isDefeated && !wasDefeated) {
      onPointsAdded(enemy.points)
      onKilled?.(enemy.name)
      setWasDefeated(true)
    }
  }, [weapon, enemy.isDefeated, enemy.points, enemy.name, onPointsAdded, onKilled, wasDefeated])

  const getDelta = useCallback(
    (count: number) => {
      switch (true) {
        case enemy.speed === 1:
          return Math.cos(count / 20) * 3
        case enemy.speed === 2:
          return Math.cos(count / 12) * 5
        case enemy.speed === 0.5:
          return Math.cos(count / 30) * 2
        default:
          return Math.cos(count / 20) * 3
      }
    },
    [enemy],
  )

  useTick(() => {
    if (wasDefeated) {
      setYMovement((prev) => prev - 0.4)
      setAlpha((prev) => prev - 0.01)
      return
    }
    countRef.current += 1
    setYMovement((prev) => prev + getDelta(countRef.current))
  })

  return (
    <Sprite
      alpha={alpha}
      eventMode="static"
      cursor="pointer"
      interactive={true}
      ontap={onSpriteClick}
      onclick={onSpriteClick}
      width={!wasDefeated ? 145 : 155}
      height={135}
      filters={!enemy.isDamaged ? [] : [new AlphaFilter(0.3)]}
      image={!wasDefeated ? enemy.image : enemy.defeatedImage}
      x={!wasDefeated ? enemy.x : enemy.x - 5}
      y={yMovement}
      anchor={0}
    />
  )
})
