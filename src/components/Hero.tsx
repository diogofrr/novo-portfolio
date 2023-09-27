import styled from 'styled-components'
import { device } from '../device'
import CopyEmail from './CopyEmail'

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  min-height: 460px;
  padding: 140px 0 170px 0;
`

const HeroSubtitle = styled.p`
  color: ${props => props.theme.pallete.primary};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  order: -1;

  @media ${device.laptop} {
    font-size: 16px;
    max-width: 500px;
  }

`

const HeroTitle = styled.h1 `
  color: ${props => props.theme.pallete.text};
  font-family: ${props => props.theme.fonts.playFair};
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 1100px;
  margin-bottom: 16px;

  @media ${device.laptop} {
    font-size: 72px;
    max-width: 500px;
  }

  @media ${device.tablet} {
    font-size: 40px;
    max-width: 400px;
  }

  @media ${device.mobileL} {
    font-size: 28px;
    max-width: 300px;
  }
`

const HeroText = styled.p`
  color: ${props => props.theme.pallete.text};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  max-width: 800px;
  margin-bottom: 24px;

  @media ${device.laptop} {
    font-size: 24px;
    max-width: 600px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    max-width: 500px;
    font-weight: 300;
  }
`

export default function Hero() {
  return (
    <HeroSection>
      <HeroTitle>
        DESENVOLVEDOR FRONT-END
      </HeroTitle>
      <HeroSubtitle>
        OLÁ, ME CHAMO DIOGO E SOU UM
      </HeroSubtitle>
      <HeroText>
        Atuo há 1 ano como desenvolvedor e minhas principais ferramentas são React, Typescript e NextJS.
      </HeroText>
      <CopyEmail />
    </HeroSection>
  )
}