import { enemiesFactory } from './enemies'
import { Action, State } from './types'

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'DELETE_ENEMY':
      return {
        ...state,
        enemies: state.enemies.filter((enemy) => enemy.name !== action.payload),
      }
    case 'ADD_ENEMY':
      return {
        ...state,
        enemies: [...state.enemies, enemiesFactory[action.payload]()],
      }
    case 'SET_ENEMIES':
      return {
        ...state,
        enemies: action.payload,
      }
    default:
      return state
  }
}
