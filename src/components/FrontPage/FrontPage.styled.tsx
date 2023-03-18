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
  flex-direction: column;
  justify-content: center;
  min-width: 400px;
  max-width: 600px;

  .joke-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.gray};
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px;

    button {
      background: none;
      border: none;

      i {
        font-size: 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`
