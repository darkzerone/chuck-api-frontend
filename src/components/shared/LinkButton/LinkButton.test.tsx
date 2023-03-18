import { cleanup, fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import LinkButton from './LinkButton'

const linkButtonMockProps = {
  link: '/test',
  label: 'linkToTest',
}

const renderTestComponent = () =>
  render(
    <BrowserRouter>
      <LinkButton {...linkButtonMockProps} />
    </BrowserRouter>,
  )

afterEach(() => {
  cleanup()
})

describe('<LinkButton />', () => {
  it('Renders the correct label', () => {
    const { getByText } = renderTestComponent()
    const linkElement = getByText('linkToTest')
    expect(linkElement).toBeInTheDocument()
  })

  it('It goes to the link passed to it on click', () => {
    const { getByText } = renderTestComponent()
    const linkElement = getByText('linkToTest')
    expect(linkElement).toBeInTheDocument()

    act(() => {
      fireEvent.click(linkElement)
    })

    expect(window.location.pathname).toBe('/test')
  })
})
