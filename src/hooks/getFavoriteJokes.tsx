import { ChuckNorrisJokeType } from '../types/chuckNorrisApiTypes'

export default function getFavoriteJokes(): ChuckNorrisJokeType[] {
  const storedJokes = localStorage.getItem('favorited-jokes')
  let favoriteJokes: ChuckNorrisJokeType[] = []
  if (storedJokes !== null) {
    favoriteJokes = JSON.parse(storedJokes) as ChuckNorrisJokeType[]
  }

  return favoriteJokes
}
