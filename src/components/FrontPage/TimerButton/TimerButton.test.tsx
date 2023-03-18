import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import FrontPageContext, { FrontPageContextProvider } from '../context/FrontPageContext'
import TimerButton from './TimerButton'

const renderTestComponent = () =>
  render(
    <FrontPageContextProvider>
      <TimerButton />
    </FrontPageContextProvider>,
  )

afterEach(() => {
  cleanup()
})

describe('<TimerButton />', () => {
  it('Renders button', () => {
    const { getByText } = renderTestComponent()
    const buttonElement = getByText('Get me more jokes!')
    expect(buttonElement).toBeInTheDocument()
  })

  it('Renders the countdown timer', async () => {
    const { getByText } = renderTestComponent()
    const countdownElement = getByText('Countdown for new joke: 5')
    expect(countdownElement).toBeInTheDocument()
  })

  describe('On click functionality', () => {
    jest.useFakeTimers()

    it('calls insertNewJoke', async () => {
      const insertNewJokeMock = jest.fn()

      const ProviderMocks = {
        loading: false,
        jokes: [],
        insertNewJoke: insertNewJokeMock,
      }

      const { getByRole } = render(
        <FrontPageContext.Provider value={ProviderMocks}>
          <TimerButton />
        </FrontPageContext.Provider>,
      )

      act(() => {
        fireEvent.click(getByRole('button'))
      })

      act(() => {
        jest.advanceTimersByTime(6000)
      })

      await waitFor(() => expect(insertNewJokeMock).toHaveBeenCalledTimes(1))
    })

    it('clears the interval if clicked twice', async () => {
      const insertNewJokeMock = jest.fn()

      const ProviderMocks = {
        loading: false,
        jokes: [],
        insertNewJoke: insertNewJokeMock,
      }

      const { getByRole } = render(
        <FrontPageContext.Provider value={ProviderMocks}>
          <TimerButton />
        </FrontPageContext.Provider>,
      )

      act(() => {
        fireEvent.click(getByRole('button'))
      })

      act(() => {
        fireEvent.click(getByRole('button'))
      })

      act(() => {
        jest.advanceTimersByTime(6000)
      })

      await waitFor(() => expect(insertNewJokeMock).not.toHaveBeenCalledTimes(1))
    })
  })
})
