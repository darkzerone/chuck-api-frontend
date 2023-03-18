import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../constants/colors'

export const StyledLink = styled(Link)`
  color: ${colors.black};
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
`
