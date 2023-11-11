import { Enemy } from '@hackathon-2023/client/features/enemy'

export interface State {
  points: number
  enemies: Enemy[]
}

export type Action =
  | {
      type: 'DELETE_ENEMY'
      payload: string
    }
  | {
      type: 'ADD_ENEMY'
      payload: string
    }
  | {
      type: 'ADD_POINTS'
      payload: number
    }
  | {
      type: 'SET_ENEMIES'
      payload: Enemy[]
    }
