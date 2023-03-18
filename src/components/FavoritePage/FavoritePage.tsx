import { useState } from 'react'
import getFavoriteJokes from '../../hooks/getFavoriteJokes'
import { ChuckNorrisJokeType } from '../../types/chuckNorrisApiTypes'
import JokeList from '../shared/JokeList/JokeList'
import LinkButton from '../shared/LinkButton/LinkButton'
import {
  StyledActionsContainer,
  StyledFavoritePageContainer,
  StyledHeaderContainer,
} from './FavoritePage.styled'

function FavoritePage() {
  const [jokes, setJokes] = useState<ChuckNorrisJokeType[]>(getFavoriteJokes())

  return (
    <StyledFavoritePageContainer>
      <StyledHeaderContainer>
        <h1>Your favorite Chuck Norris Jokes!</h1>
      </StyledHeaderContainer>
      <StyledActionsContainer>
        <LinkButton label='Back to home' link='/' />
      </StyledActionsContainer>
      <JokeList
        onFavoriteClickedCallback={(newFavoriteJokeList) => {
          setJokes(newFavoriteJokeList)
        }}
        jokes={jokes}
        loading={false}
      />
    </StyledFavoritePageContainer>
  )
}

export default FavoritePage
