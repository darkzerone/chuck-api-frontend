import { StyledFrontPageContainer, StyledHeaderContainer } from './FrontPage.styled'
import JokesContainer from './JokesContainer/JokesContainer'
import TimerButton from './TimerButton/TimerButton'

function FrontPage() {
  return (
    <StyledFrontPageContainer>
      <StyledHeaderContainer>
        <h1>Random Chuck Norris Jokes!</h1>
      </StyledHeaderContainer>
      <TimerButton />
      <JokesContainer />
    </StyledFrontPageContainer>
  )
}

export default FrontPage
