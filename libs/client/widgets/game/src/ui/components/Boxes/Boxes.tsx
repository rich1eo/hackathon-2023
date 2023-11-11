import { memo } from 'react'

import { Sprite } from '@pixi/react'

import boxImage from './assets/box.png'

const coordinates = [
  { x: 0, y: 150 },
  { x: 200, y: 150 },
  { x: 400, y: 150 },
  { x: 600, y: 150 },
  { x: 800, y: 150 },
  { x: 1000, y: 150 },
  { x: 0, y: 440 },
  { x: 200, y: 440 },
  { x: 400, y: 440 },
  { x: 600, y: 440 },
  { x: 800, y: 440 },
  { x: 1000, y: 440 },
]

export const Boxes = memo(() => {
  const boxes = coordinates.map((coordinate, index) => {
    return (
      <Sprite
        key={index}
        image={boxImage}
        eventMode="static"
        width={180}
        height={140}
        x={coordinate.x}
        y={coordinate.y}
      />
    )
  })
  return <>{boxes}</>
})
