import { createContext, PropsWithChildren, useCallback, useState } from 'react'

export enum Gamemods {
  HalfMinute = 'HalfMinute',
  Minute = 'Minute',
  TwoMinutes = 'TwoMinutes',
  FiveMinutes = 'FiveMinutes',
  Endless = 'Endless',
}

const GamemodeContext = createContext<{
  gamemode: Gamemods
  changeMode: (gamemode: Gamemods) => void
  timer: number
}>({
  gamemode: Gamemods.HalfMinute,
  changeMode: () => {},
  timer: 30000,
})
const { Provider } = GamemodeContext

const GamemodeProvider = ({ children }: PropsWithChildren) => {
  const [gamemode, setGameMode] = useState<Gamemods>(Gamemods.HalfMinute)
  const [timer, setTimer] = useState<number>(30000)

  const changeMode = useCallback(
    (gamemode: Gamemods) => {
      switch (gamemode) {
        case Gamemods.HalfMinute:
          setTimer(30000)
          break
        case Gamemods.Minute:
          setTimer(60000)
          break
        case Gamemods.TwoMinutes:
          setTimer(120000)
          break
        case Gamemods.FiveMinutes:
          setTimer(300000)
          break
        case Gamemods.Endless:
          setTimer(Infinity)
          break
      }
      setGameMode(gamemode)
    },
    [setGameMode],
  )

  return <Provider value={{ changeMode, gamemode, timer }}>{children}</Provider>
}

export { GamemodeContext, GamemodeProvider }
