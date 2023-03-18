import { StyledSpinner } from './Spinner.styled'

function Spinner() {
  return (
    <StyledSpinner data-testid='spinner'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledSpinner>
  )
}

export default Spinner
