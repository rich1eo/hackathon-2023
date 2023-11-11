import { memo, Reducer, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Enemy } from '@hackathon-2023/client/features/enemy'
import { GamemodeContext, Gamemods, PointsContext } from '@hackathon-2023/client/features/game-context'
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
  const { points, addPoints, setPoints } = useContext(PointsContext)
  const { gamemode, timer } = useContext(GamemodeContext)

  const { totalSeconds: initSeconds } = convertMilliseconds(timer)
  const [secondsElapsed, setSecondsElapsed] = useState<number>(initSeconds)

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
    if (gamemode !== Gamemods.Endless) {
      if (secondsElapsed > 0) {
        const timerId: NodeJS.Timeout = setInterval(() => {
          setSecondsElapsed((prevSeconds) => prevSeconds - 1)
        }, 1000)

        return () => clearInterval(timerId)
      } else {
        handleFinishGame()
      }
    } else {
      const timerId: NodeJS.Timeout = setInterval(() => {
        setSecondsElapsed((prevSeconds) => prevSeconds + 1)
      }, 1000)

      return () => clearInterval(timerId)
    }
  }, [secondsElapsed])

  const handleRestart = useCallback(() => {
    setPoints(0)
    setSecondsElapsed(initSeconds)
  }, [])

  return (
    <Game
      enemies={state.enemies}
      points={points}
      weapon={weapon}
      handleAddPoints={handleAddPoints}
      handleKillEnemy={handleKillEnemy}
      handleSetEnemies={handleSetEnemies}
      secondsElapsed={secondsElapsed}
      isEndless={gamemode === Gamemods.Endless}
      handleFinishGame={handleFinishGame}
      handleRestart={handleRestart}
    />
  )
})
