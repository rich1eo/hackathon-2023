import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { FinishPage } from '@hackathon-2023/client/pages/finish'
import { GamePage } from '@hackathon-2023/client/pages/game'
import { StartPage } from '@hackathon-2023/client/pages/main'
import { PrehistoryPage } from '@hackathon-2023/client/pages/prehistory'
import { SharePage } from '@hackathon-2023/client/pages/share'
import { WeaponChoosePage } from '@hackathon-2023/client/pages/weapon-choose'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    // TODO: Добавить error boundary
  },
  {
    path: '/prehistory',
    element: <PrehistoryPage />,
  },
  {
    path: '/weapon-choose',
    element: <WeaponChoosePage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/finish',
    element: <FinishPage />,
  },
  {
    path: '/share',
    element: <SharePage />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
