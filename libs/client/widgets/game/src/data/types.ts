import { Enemy } from '@hackathon-2023/client/features/enemy'

export interface State {
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
      type: 'SET_ENEMIES'
      payload: Enemy[]
    }
