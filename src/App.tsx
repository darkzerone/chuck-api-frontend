import { Outlet } from 'react-router'
import { StyledApp } from './App.styled'

function App() {
  return (
    <StyledApp>
      <Outlet />
    </StyledApp>
  )
}

export default App
