import { StyledTimerContainer, StyledTimerText } from '../FrontPage.styled'

function TimerButton() {
  return (
    <>
      <StyledTimerContainer>
        <button
          onClick={() => {
            console.log('Getting more jokes')
          }}
        >
          Get me more jokes!
        </button>
      </StyledTimerContainer>
      <StyledTimerText>Timer!</StyledTimerText>
    </>
  )
}

export default TimerButton
