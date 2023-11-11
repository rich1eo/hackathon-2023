import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { FinishPage } from '@hackathon-2023/client/pages/finish'
import { GamePage } from '@hackathon-2023/client/pages/game'
import { StartPage } from '@hackathon-2023/client/pages/main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    // TODO: Добавить error boundary
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/finish',
    element: <FinishPage />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
