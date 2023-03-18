import styled from 'styled-components'
import { colors } from '../../../constants/colors'

export const StyledJokeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
