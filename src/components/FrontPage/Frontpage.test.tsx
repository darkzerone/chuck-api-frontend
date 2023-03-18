import { cleanup, fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import { FrontPageContextProvider } from './context/FrontPageContext'
import FrontPage from './FrontPage'

const renderTestComponent = () =>
  render(
    <BrowserRouter>
      <FrontPageContextProvider>
        <FrontPage />
      </FrontPageContextProvider>
    </BrowserRouter>,
  )

afterEach(() => {
  cleanup()
})

describe('<Frontpage />', () => {
  it('Renders the frontpage on render', () => {
    const { getByText } = renderTestComponent()
    const headerElement = getByText('Random Chuck Norris Jokes!')
    expect(headerElement).toBeInTheDocument()
  })

  it('Can route to favorites page', () => {
    const { getByText } = renderTestComponent()
    const toFavoritesLink = getByText('To favorites!')
    expect(toFavoritesLink).toBeInTheDocument()

    act(() => {
      fireEvent.click(toFavoritesLink)
    })

    expect(window.location.pathname).toBe('/favorites')
  })

  it('renders the joke list', () => {
    const { getByTestId } = renderTestComponent()
    const jokeList = getByTestId('joke-list')
    expect(jokeList).toBeInTheDocument()
  })

  it('renders the timer button', () => {
    const { getByTestId } = renderTestComponent()
    const jokeList = getByTestId('timer-container')
    expect(jokeList).toBeInTheDocument()
  })
})
