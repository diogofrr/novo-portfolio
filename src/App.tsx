import styled from "styled-components"
import { device } from "./device"
import Header from "./components/Header"
import Hero from "./components/Hero"
import srcImageDecoration from './assets/decoration.svg'
import SideIcons from "./components/SideIcons"
import Experiences from "./components/Experiences"
import Knowlegdes from "./components/Knowlegdes"
import Footer from "./components/Footer"

const ImageDecoration = styled.img`
  position: absolute;
  top: 650px;
  left: 0;
  z-index: 1;
  
  @media ${device.laptop} {
    top: 560px;
    width: 200px;
  }

  @media ${device.tablet} {
    top: 460px;
    width: 150px;
  }
`

function App() {
  return (
    <>
      <SideIcons showInMobile={false} showInDesktop={true} />
      <Header />
      <Hero />
      <ImageDecoration src={srcImageDecoration} />
      <Experiences />
      <Knowlegdes />
      <Footer />
    </>
  )
}

export default App
