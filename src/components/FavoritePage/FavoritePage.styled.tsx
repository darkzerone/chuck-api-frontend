import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StyledHeaderContainer = styled.div`
  h1 {
    color: ${colors.white};
  }
`

export const StyledFavoritePageContainer = styled.div`
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
