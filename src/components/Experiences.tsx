import styled from "styled-components";
import { device } from "../device";

const Container = styled.section`
  background-color: ${(props) => props.theme.pallete.border};
  width: 100%;
  padding: 32px 140px;

  @media ${device.laptopL} {
    padding-right: 70px;
    padding-left: 70px;
  }

  @media ${device.laptop} {
    padding-right: 35px;
    padding-left: 35px;
  }

  @media ${device.mobileL} {
    padding-right: 17.5px;
    padding-left: 17.5px;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.pallete.text};
  font-family: ${(props) => props.theme.fonts.playFair};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 48px;

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.mobileL} {
    font-size: 24px;
  }
`;

const ExperiencesContainer = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 3px;
    background-color: ${props => props.theme.pallete.decoration};
    top: 2px;
    bottom: 0;
    left: 3px;
    opacity: 0.5;
  }
`;

const ExpTime = styled.p`
  color: ${(props) => props.theme.pallete.text};
  font-family: ${(props) => props.theme.fonts.roboto};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 12px;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobileL} {
    font-size: 12px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: ${props => props.theme.pallete.decoration};
    left: 4.5px;
    transform: translateX(-50%);
    border-radius: 100%;

  }
`;

const ExpTitle = styled.p`
  color: ${(props) => props.theme.pallete.text};
  font-family: ${(props) => props.theme.fonts.roboto};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

const ExpDescription = styled.p`
  color: ${(props) => props.theme.pallete.text};
  font-family: ${(props) => props.theme.fonts.roboto};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  max-width: 700px;

  @media ${device.mobileL} {
    font-size: 12px;
  }
`;


const TimeLineContent = styled.div`
  margin-left: 16px;
`

export default function Experiences() {
  return (
    <Container>
      <Title>Experiências</Title>
      <ExperiencesContainer>
        <TimeLineContent>
          <ExpTime>
            Nov de 2021 - Atual
          </ExpTime>
          <ExpTitle>ASOEC - DESENVOLVEDOR FRONT-END</ExpTitle>
          <ExpDescription>
            Na função de desenvolvedor front-end, sou responsável por conceber e
            implementar interfaces e funcionalidades para dois sistemas distintos.
            Um deles, um projeto novo, é desenvolvido com tecnologias modernas,
            incluindo Next.js, Material UI, TypeScript e NextAuth, enquanto o
            outro é um sistema legado que utiliza Zend Framework e jQuery.
          </ExpDescription>
        </TimeLineContent>
      </ExperiencesContainer>
    </Container>
  );
}