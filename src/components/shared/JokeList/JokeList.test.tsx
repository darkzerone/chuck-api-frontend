import { cleanup, fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { ChuckNorrisJokeType } from '../../../types/chuckNorrisApiTypes'
import JokeList from './JokeList'

const mockJoke: ChuckNorrisJokeType = {
  value: 'Test joke!',
  id: '1234',
} as ChuckNorrisJokeType

const jokeListMockProps = {
  jokes: [],
  loading: false,
  onFavoriteClickedCallback: jest.fn(),
}

const renderTestComponent = (jokes?: ChuckNorrisJokeType[]) =>
  render(<JokeList {...jokeListMockProps} jokes={jokes || jokeListMockProps.jokes} />)

afterEach(() => {
  jokeListMockProps.onFavoriteClickedCallback.mockClear()
  localStorage.clear()
  cleanup()
})

describe('<JokeList />', () => {
  it('Renders the joke list', () => {
    const { getByTestId } = renderTestComponent()
    const jokeList = getByTestId('joke-list')
    expect(jokeList).toBeInTheDocument()
  })

  it('Renders jokes if they are passed to it', () => {
    const { getByTestId, getByText } = renderTestComponent([mockJoke])
    const jokeList = getByTestId('joke-list')
    expect(jokeList).toBeInTheDocument()

    expect(getByText('Test joke!')).toBeInTheDocument()
  })

  it('calls onFavoriteClickedCallback on click', () => {
    const { getByTestId, getByRole } = renderTestComponent([mockJoke])
    const jokeList = getByTestId('joke-list')
    expect(jokeList).toBeInTheDocument()

    const favoriteButton = getByRole('button')

    act(() => {
      fireEvent.click(favoriteButton)
    })

    expect(jokeListMockProps.onFavoriteClickedCallback).toHaveBeenCalledWith([mockJoke])
  })

  it('Removes the joke on second click', () => {
    const { getByTestId, getByRole } = renderTestComponent([mockJoke])
    const jokeList = getByTestId('joke-list')
    expect(jokeList).toBeInTheDocument()

    const favoriteButton = getByRole('button')

    act(() => {
      fireEvent.click(favoriteButton)
    })

    expect(jokeListMockProps.onFavoriteClickedCallback).toHaveBeenCalledWith([mockJoke])

    act(() => {
      fireEvent.click(favoriteButton)
    })

    expect(jokeListMockProps.onFavoriteClickedCallback).toHaveBeenCalledWith([])
  })
})
