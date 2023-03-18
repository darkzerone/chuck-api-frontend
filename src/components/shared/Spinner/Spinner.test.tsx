import { cleanup, render } from '@testing-library/react'
import Spinner from './Spinner'

const renderTestComponent = () => render(<Spinner />)

afterEach(() => {
  cleanup()
})

describe('<Spinner />', () => {
  it('Renders the spinner', () => {
    const { getByTestId } = renderTestComponent()
    const spinnerElement = getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
  })
})
