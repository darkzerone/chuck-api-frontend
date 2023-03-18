import { cleanup, render, screen } from '@testing-library/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { FrontPageContextProvider } from './components/FrontPage/context/FrontPageContext'
import FrontPage from './components/FrontPage/FrontPage'

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
    ],
  },
])

const renderTestComponent = () => render(<RouterProvider router={router} />)

afterEach(() => {
  cleanup()
})

describe('<App />', () => {
  it('Renders the frontpage on render', () => {
    renderTestComponent()
    const headerElement = screen.getByText('Random Chuck Norris Jokes!')
    expect(headerElement).toBeInTheDocument()
  })
})
