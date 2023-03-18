import { createContext, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import fetchChuckNorrisJoke from '../../../hooks/fetchChuckNorrisJoke'
import { ChuckNorrisJokeType } from '../../../types/chuckNorrisApiTypes'

interface FrontPageContextInterface {
  loading: boolean
  jokes: ChuckNorrisJokeType[]
}

const FrontPageContext = createContext<FrontPageContextInterface>({
  loading: false,
  jokes: [],
})

type FrontPageContextContextProviderPropsType = {
  children: ReactNode
}

const FrontPageContextProvider = ({ children }: FrontPageContextContextProviderPropsType) => {
  const [jokes, setJokes] = useState<ChuckNorrisJokeType[]>([])
  const loading = useRef<boolean>(false)

  const context = {
    loading: loading.current,
    jokes,
  }

  const getJokesForFirstRender = useCallback(async () => {
    if (loading.current === true) return

    loading.current = true
    const newJokePromiseArray = []

    while (newJokePromiseArray.length < 10) {
      newJokePromiseArray.push(fetchChuckNorrisJoke())
    }
    const fetchedJokes = await Promise.all(newJokePromiseArray)

    loading.current = false
    setJokes([...fetchedJokes])
  }, [])

  useEffect(() => {
    getJokesForFirstRender()
  }, [getJokesForFirstRender])

  return <FrontPageContext.Provider value={context}>{children}</FrontPageContext.Provider>
}

export default FrontPageContext
export { FrontPageContextProvider }
