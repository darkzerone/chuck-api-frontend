import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FrontPage from './components/FrontPage/FrontPage'
import { FrontPageContextProvider } from './components/FrontPage/context/FrontPageContext'
import FavoritePage from './components/FavoritePage/FavoritePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <FrontPageContextProvider>
            <FrontPage />
          </FrontPageContextProvider>
        ),
      },
      {
        path: '/favorites',
        element: <FavoritePage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
