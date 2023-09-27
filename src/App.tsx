import styled from "styled-components"
import { device } from "./device"
import Header from "./components/Header"
import Hero from "./components/Hero"
import srcImageDecoration from './assets/decoration.svg'

interface ImageDecorationProps {
  $right?: string
  $left?: string
  $top?: string
  $bottom?: string
}

const Container = styled.div`
  padding: 16px 140px;

  @media ${device.laptopL} {
    padding: 16px 70px;
  }

  @media ${device.laptop} {
    padding: 8px 35px;
  }

  @media ${device.mobileL} {
    padding: 8px 17.5px;
  }
`

const ImageDecoration = styled.img<ImageDecorationProps>`
  position: absolute;
  right: ${props => props.$right ?? ''};
  top: ${props => props.$top ?? ''};
  left: ${props => props.$left ?? ''};
  bottom: ${props => props.$bottom ?? ''};
  z-index: 1;
`

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <ImageDecoration src={srcImageDecoration} $left="0" $top="650px" />
    </Container>
  )
}

export default App
