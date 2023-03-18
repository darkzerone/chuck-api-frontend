import { StyledTimerContainer } from '../FrontPage.styled'

function TimerButton() {
  return (
    <StyledTimerContainer>
      <button
        onClick={() => {
          console.log('Getting more jokes')
        }}
      >
        Get me more jokes!
      </button>
    </StyledTimerContainer>
  )
}

export default TimerButton
