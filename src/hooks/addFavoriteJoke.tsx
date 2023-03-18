import { ChuckNorrisJokeType } from '../types/chuckNorrisApiTypes'

export default function addFavoriteJoke(joke: ChuckNorrisJokeType) {
  let itemsToStore = localStorage.getItem('favorited-jokes')

  if (itemsToStore === null) {
    itemsToStore = JSON.stringify([joke])
  } else {
    const newJokeArray = JSON.parse(itemsToStore) as ChuckNorrisJokeType[]

    if (newJokeArray.length === 10) {
      newJokeArray.pop()
    }

    newJokeArray.unshift(joke)
    itemsToStore = JSON.stringify(newJokeArray)
  }

  dispatchEvent(new Event('addedJoke'))
  localStorage.setItem('favorited-jokes', itemsToStore)
}
