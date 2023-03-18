import { ChuckNorrisJokeType } from '../types/chuckNorrisApiTypes'

export default async function fetchChuckNorrisJoke(): Promise<ChuckNorrisJokeType> {
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  const data = await response.json()

  return data
}
