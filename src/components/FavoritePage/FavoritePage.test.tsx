import { cleanup, fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import FavoritePage from './FavoritePage'

const renderTestComponent = () =>
  render(
    <BrowserRouter>
      <FavoritePage />
    </BrowserRouter>,
  )

afterEach(() => {
  cleanup()
})

describe('<FavoritePage />', () => {
  it('Renders the favoritePage on render', () => {
    const { getByText } = renderTestComponent()
    const headerElement = getByText('Your favorite Chuck Norris Jokes!')
    expect(headerElement).toBeInTheDocument()
  })

  it('Can route to home page', () => {
    const { getByText } = renderTestComponent()
    const toFavoritesLink = getByText('Back to home')
    expect(toFavoritesLink).toBeInTheDocument()

    act(() => {
      fireEvent.click(toFavoritesLink)
    })

    expect(window.location.pathname).toBe('/')
  })

  it('renders the joke list', () => {
    const { getByTestId } = renderTestComponent()
    const jokeList = getByTestId('joke-list')
    expect(jokeList).toBeInTheDocument()
  })
})
