import { memo, Reducer, useCallback, useMemo, useReducer } from 'react'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { UnderstandingWeapon } from '@hackathon-2023/client/features/weapon'

import { reducer } from './data/reducer'
import { Action, State } from './data/types'
import { Game } from './ui/Game'

export const GameWidget = memo(() => {
  const initialState: State = useMemo(() => {
    return {
      enemies: [],
      points: 0,
    }
  }, [])

  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState)

  const weapon = new UnderstandingWeapon()

  const handleAddPoints = useCallback((point: number) => {
    dispatch({ type: 'ADD_POINTS', payload: point })
  }, [])

  const handleKillEnemy = useCallback((name: string) => {
    setTimeout(() => {
      dispatch({ type: 'DELETE_ENEMY', payload: name })
    }, 1500)
  }, [])

  const handleSetEnemies = useCallback((enemies: Enemy[]) => {
    dispatch({ type: 'SET_ENEMIES', payload: enemies })
  }, [])

  console.log(state.enemies)

  return (
    <Game
      enemies={state.enemies}
      points={state.points}
      weapon={weapon}
      handleAddPoints={handleAddPoints}
      handleKillEnemy={handleKillEnemy}
      handleSetEnemies={handleSetEnemies}
    />
  )
})
