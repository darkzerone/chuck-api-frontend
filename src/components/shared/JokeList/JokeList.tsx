import { useEffect, useState } from 'react'
import addFavoriteJoke from '../../../hooks/addFavoriteJoke'
import getFavoriteJokes from '../../../hooks/getFavoriteJokes'
import removeFavoriteJoke from '../../../hooks/removeFavoriteJoke'
import { ChuckNorrisJokeType } from '../../../types/chuckNorrisApiTypes'
import Spinner from '../Spinner/Spinner'
import { StyledJokeList } from './JokeList.styled'

interface JokesContainerProps {
  jokes: ChuckNorrisJokeType[]
  loading?: boolean
  onFavoriteClickedCallback?: (updatedFavoriteList: ChuckNorrisJokeType[]) => void
}

function JokeList({ jokes, loading, onFavoriteClickedCallback }: JokesContainerProps) {
  const [favoriteJokeIds, setfavoriteJokeIds] = useState<string[]>([])

  const mapFavoriteJokesToIds = () => getFavoriteJokes().map((joke) => joke.id)
  const onFavoriteClickHandler = (joke: ChuckNorrisJokeType) => {
    if (favoriteJokeIds.includes(joke.id)) {
      removeFavoriteJoke(joke)
    } else {
      addFavoriteJoke(joke)
    }

    setfavoriteJokeIds(mapFavoriteJokesToIds())
    onFavoriteClickedCallback?.(getFavoriteJokes())
  }

  useEffect(() => {
    setfavoriteJokeIds(mapFavoriteJokesToIds())
  }, [])

  return (
    <StyledJokeList data-testid='joke-list'>
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
    </StyledJokeList>
  )
}

export default JokeList
