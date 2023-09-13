import Header from "./components/Header"
import styled from "styled-components"
import { device } from "./device"

const Container = styled.div`
  padding: 16px 140px;
  background-color: green;

  @media ${device.laptopL} {
    padding: 16px 70px;
  }

  @media ${device.laptop} {
    padding: 8px 35px;
    background-color: yellow;
  }

  @media ${device.mobileL} {
    padding: 8px 17.5px;
    background-color: red;
  }
`

function App() {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default App
