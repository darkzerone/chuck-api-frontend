import {
  StyledHeaderContainer,
  StyledFrontPageContainer,
  StyledJokesContainer,
  StyledTimerContainer,
} from './FrontPage.styled'

function FrontPage() {
  return (
    <StyledFrontPageContainer>
      <StyledHeaderContainer>
        <h1>Random Chuck Norris Jokes!</h1>
      </StyledHeaderContainer>
      <StyledTimerContainer>
        <button
          onClick={() => {
            console.log('Getting more jokes')
          }}
        >
          Get me more jokes!
        </button>
      </StyledTimerContainer>
      <StyledJokesContainer>
        <div>
          <span>Chuck joke!</span>
        </div>
      </StyledJokesContainer>
    </StyledFrontPageContainer>
  )
}

export default FrontPage
