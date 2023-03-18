import { useContext } from 'react'
import JokeList from '../shared/JokeList/JokeList'
import LinkButton from '../shared/LinkButton/LinkButton'
import FrontPageContext from './context/FrontPageContext'
import {
  StyledActionsContainer,
  StyledFrontPageContainer,
  StyledHeaderContainer,
} from './FrontPage.styled'
import TimerButton from './TimerButton/TimerButton'

function FrontPage() {
  const { jokes, loading } = useContext(FrontPageContext)

  return (
    <StyledFrontPageContainer>
      <StyledHeaderContainer>
        <h1>Random Chuck Norris Jokes!</h1>
      </StyledHeaderContainer>
      <StyledActionsContainer>
        <TimerButton />
        <LinkButton link='/favorites' label='To favorites!' />
      </StyledActionsContainer>
      <JokeList jokes={jokes} loading={loading} />
    </StyledFrontPageContainer>
  )
}

export default FrontPage
