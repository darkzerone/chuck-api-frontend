import { useContext, useEffect, useRef, useState } from 'react'
import FrontPageContext from '../context/FrontPageContext'
import { StyledTimerContainer, StyledTimerText } from '../FrontPage.styled'

function TimerButton() {
  const countDownRef = useRef(5)
  const [count, setCount] = useState(5)
  const intervalRef = useRef<NodeJS.Timer | undefined>(undefined)
  const { insertNewJoke } = useContext(FrontPageContext)

  const activateTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
    } else {
      intervalRef.current = setInterval(async () => {
        if (countDownRef.current === 0) {
          await insertNewJoke()
        }

        countDownRef.current = countDownRef.current === 0 ? 5 : countDownRef.current - 1

        setCount(countDownRef.current)
      }, 1000)
    }
  }

  useEffect(() => {
    return clearInterval(intervalRef.current)
  }, [])

  return (
    <>
      <StyledTimerContainer>
        <button onClick={() => activateTimer()}>Get me more jokes!</button>
      </StyledTimerContainer>
      <StyledTimerText>Countdown for new joke: {count === 0 ? 'fetching!' : count}</StyledTimerText>
    </>
  )
}

export default TimerButton
