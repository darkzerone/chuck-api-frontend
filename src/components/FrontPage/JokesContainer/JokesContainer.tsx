import { useContext } from 'react'
import Spinner from '../../shared/spinner'
import FrontPageContext from '../context/FrontPageContext'
import { StyledJokesContainer } from '../FrontPage.styled'

function JokesContainer() {
  const { jokes, loading } = useContext(FrontPageContext)

  return (
    <StyledJokesContainer>
      {loading ? (
        <Spinner />
      ) : (
        jokes.map((joke) => (
          <div className='joke-container' key={joke.id}>
            <span>{joke.value}</span>
          </div>
        ))
      )}
    </StyledJokesContainer>
  )
}

export default JokesContainer
