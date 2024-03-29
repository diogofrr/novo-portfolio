import styled from 'styled-components'
import { device } from '../device'
import CopyEmail from './CopyEmail'
import { SlideFromBottomDiv } from './UI/Animation'
import { useRef } from 'react'
import { useObserver } from '../hooks/useObserver'

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  min-height: 460px;
  padding: 140px 140px 170px 140px;
  margin-top: 80px;

  @media ${device.laptopL} {
    padding: 140px 70px 140px 70px;
    margin-top: 72px;
  }

  @media ${device.laptop} {
    padding: 140px 35px 140px 35px;
    margin-top: 64px;
  }

  @media ${device.mobileL} {
    padding: 140px 17.5px 140px 17.5px;
  }
`

const HeroSubtitle = styled.p`
  color: ${props => props.theme.pallete.primary};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${device.laptop} {
    font-size: 18px;
    max-width: 500px;
  }

`

const HeroTitle = styled.h1 `
  color: ${props => props.theme.pallete.text};
  font-family: ${props => props.theme.fonts.playFair};
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 116px;
  max-width: 1100px;
  margin-bottom: 16px;

  @media ${device.laptop} {
    margin-top: 0;
    font-size: 72px;
    line-height: 80px;
    max-width: 500px;
  }

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 48px;
    max-width: 400px;
  }

  @media ${device.mobileL} {
    font-size: 28px;
    line-height: 36px;
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
  const ref = useRef(null)
  const observer = useObserver(ref)

  return (
    <HeroSection id="c-hero" ref={ref}>
      {observer && (
        <SlideFromBottomDiv>
          <HeroSubtitle>
            OLÁ, ME CHAMO DIOGO E SOU UM
          </HeroSubtitle>
          <HeroTitle>
            DESENVOLVEDOR FRONT-END
          </HeroTitle>
          <HeroText>
            Atuo há 2 anos como desenvolvedor e minhas principais ferramentas são React, Typescript e NextJS.
          </HeroText>
          <CopyEmail />
        </SlideFromBottomDiv>
      )}
    </HeroSection>
  )
}