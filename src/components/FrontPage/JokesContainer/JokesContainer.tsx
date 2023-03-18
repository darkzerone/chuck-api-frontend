import { useContext, useEffect, useState } from 'react'
import addFavoriteJoke from '../../../hooks/addFavoriteJoke'
import getFavoriteJokes from '../../../hooks/getFavoriteJokes'
import removeFavoriteJoke from '../../../hooks/removeFavoriteJoke'
import { ChuckNorrisJokeType } from '../../../types/chuckNorrisApiTypes'
import Spinner from '../../shared/Spinner/Spinner'
import FrontPageContext from '../context/FrontPageContext'
import { StyledJokesContainer } from '../FrontPage.styled'

function JokesContainer() {
  const { jokes, loading } = useContext(FrontPageContext)
  const [favoriteJokeIds, setfavoriteJokeIds] = useState<string[]>([])

  const mapFavoriteJokesToIds = () => getFavoriteJokes().map((joke) => joke.id)
  const onFavoriteClickHandler = (joke: ChuckNorrisJokeType) => {
    if (favoriteJokeIds.includes(joke.id)) {
      removeFavoriteJoke(joke)
    } else {
      addFavoriteJoke(joke)
    }
    setfavoriteJokeIds(mapFavoriteJokesToIds())
  }

  useEffect(() => {
    setfavoriteJokeIds(mapFavoriteJokesToIds())
  }, [])

  return (
    <StyledJokesContainer>
      {loading ? (
        <Spinner />
      ) : (
        jokes.map((joke) => (
          <div className='joke-container' key={joke.id}>
            <span>{joke.value}</span>
            <button onClick={() => onFavoriteClickHandler(joke)}>
              {favoriteJokeIds.includes(joke.id) ? (
                <i className='bi bi-star-fill' />
              ) : (
                <i className='bi bi-star' />
              )}
            </button>
          </div>
        ))
      )}
    </StyledJokesContainer>
  )
}

export default JokesContainer
