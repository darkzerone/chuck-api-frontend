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

export const StyledActionsContainer = styled.div`
  display: flex;
  flex-direciton: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  width: 100%;
  max-width: 600px;
`

export const StyledTimerContainer = styled.div`
  button {
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    font-family: 'Sono', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;

    &:hover {
      cursor: pointer;
    }
  }
`

export const StyledTimerText = styled.span`
  color: ${colors.white};
`
