import { createContext, PropsWithChildren, useCallback, useState } from 'react'

const PointsContext = createContext<{
  points: number
  addPoints: (points: number) => void
  removePoints: (points: number) => void
  setPoints: (points: number) => void
}>({
  points: 0,
  addPoints: () => {
    // do nothing
  },
  removePoints: () => {
    // do nothing
  },
  setPoints: () => {
    // do nothing
  },
})
const { Provider } = PointsContext

const PointsProvider = ({ children }: PropsWithChildren) => {
  const [points, setPoints] = useState<number>(0)

  const addPoints = useCallback(
    (points: number) => {
      setPoints((prev) => prev + points)
    },
    [setPoints],
  )

  const removePoints = useCallback(
    (points: number) => {
      setPoints((prev) => prev - points)
    },
    [setPoints],
  )

  return <Provider value={{ points, addPoints, removePoints, setPoints }}>{children}</Provider>
}

export { PointsContext, PointsProvider }
