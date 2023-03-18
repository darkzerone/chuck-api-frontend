import { ChuckNorrisJokeType } from '../types/chuckNorrisApiTypes'

export default function removeFavoriteJoke(joke: ChuckNorrisJokeType) {
  let itemsToStore = localStorage.getItem('favorited-jokes')

  if (itemsToStore === null) {
    return
  } else {
    const currentJokeArray = JSON.parse(itemsToStore) as ChuckNorrisJokeType[]

    itemsToStore = JSON.stringify(
      currentJokeArray.filter((favoritedJoke) => favoritedJoke.id !== joke.id),
    )
  }

  localStorage.setItem('favorited-jokes', itemsToStore)
}
