import { memo, Reducer, useCallback, useContext, useMemo, useReducer } from 'react'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { PointsContext } from '@hackathon-2023/client/features/game-context'
import { UnderstandingWeapon } from '@hackathon-2023/client/features/weapon'

import { reducer } from './data/reducer'
import { Action, State } from './data/types'
import { Game } from './ui/Game'

export const GameWidget = memo(() => {
  const initialState: State = useMemo(() => {
    return {
      enemies: [],
    }
  }, [])
  const { points, addPoints } = useContext(PointsContext)

  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState)

  const weapon = new UnderstandingWeapon()

  const handleAddPoints = useCallback((point: number) => {
    addPoints(point)
  }, [])

  const handleDeleteEnemy = useCallback((name: string) => {
    dispatch({ type: 'DELETE_ENEMY', payload: name })
  }, [])

  const handleAddEnemy = useCallback((name: string) => {
    dispatch({ type: 'ADD_ENEMY', payload: name })
  }, [])

  const handleKillEnemy = useCallback(
    (name: string) => {
      const deleteTimeout = setTimeout(() => handleDeleteEnemy(name), 1500)
      const addTimeout = setTimeout(() => handleAddEnemy(name), 1600)

      return () => {
        clearTimeout(deleteTimeout)
        clearTimeout(addTimeout)
      }
    },
    [handleDeleteEnemy, handleAddEnemy],
  )

  const handleSetEnemies = useCallback((enemies: Enemy[]) => {
    dispatch({ type: 'SET_ENEMIES', payload: enemies })
  }, [])

  return (
    <Game
      enemies={state.enemies}
      points={points}
      weapon={weapon}
      handleAddPoints={handleAddPoints}
      handleKillEnemy={handleKillEnemy}
      handleSetEnemies={handleSetEnemies}
    />
  )
})
