import { memo, Reducer, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { GamemodeContext, PointsContext } from '@hackathon-2023/client/features/game-context'
import { UnderstandingWeapon } from '@hackathon-2023/client/features/weapon'

import { reducer } from './data/reducer'
import { Action, State } from './data/types'
import { Game } from './ui/Game'
import { convertMilliseconds } from './utils/convert-milliseconds'

export const GameWidget = memo(() => {
  const navigate = useNavigate()
  const initialState: State = useMemo(() => {
    return {
      enemies: [],
    }
  }, [])
  const { points, addPoints } = useContext(PointsContext)
  const { gamemode, timer } = useContext(GamemodeContext)

  const { minutes: initMinutes, seconds: initSeconds } = convertMilliseconds(timer)
  const [minutes, setMinutes] = useState(initMinutes)
  const [seconds, setSeconds] = useState(initSeconds)

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

  const handleFinishGame = useCallback(() => {
    navigate('/finish')
  }, [])

  useEffect(() => {
    let timerId: NodeJS.Timeout

    if (minutes > 0 || seconds > 0) {
      timerId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
          } else {
            clearInterval(timerId)
          }
        }
      }, 1000)
    } else {
      handleFinishGame()
    }

    return () => clearInterval(timerId)
  }, [minutes, seconds])

  return (
    <Game
      enemies={state.enemies}
      points={points}
      weapon={weapon}
      handleAddPoints={handleAddPoints}
      handleKillEnemy={handleKillEnemy}
      handleSetEnemies={handleSetEnemies}
      minutes={minutes}
      seconds={seconds}
    />
  )
})
