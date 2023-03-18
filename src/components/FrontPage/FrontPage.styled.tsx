import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StyledHeaderContainer = styled.div`
  h1 {
    color: ${colors.white};
  }
`

export const StyledFrontPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledTimerContainer = styled.div`
  margin: 20px;

  button {
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`

export const StyledJokesContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 400px;
  max-width: 600px;

  div {
    background-color: ${colors.gray};
    width: 100%;
    border-radius: 5px;
    padding: 5px;

    span {
    }
  }
`
