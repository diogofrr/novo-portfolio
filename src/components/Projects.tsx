import exercicioCrudM from '../assets/exercicio-crud-sm.svg';
import exercicioCrudD from '../assets/exercicio-crud-xl.svg';

import antigoPortfolioM from '../assets/antigo-portfolio-sm.svg';
import antigoPortfolioD from '../assets/antigo-portfolio-xl.svg';

import dianpeM from '../assets/dianpe-sm.svg';
import dianpeD from '../assets/dianpe-xl.svg';

import fetiM from '../assets/feti-sm.svg';
import fetiD from '../assets/feti-xl.svg';

import styled from "styled-components"
import { device } from "../device";
import Title from "./UI/Title";
import { SlideFromLeftDiv } from './UI/Animation';
import { useRef } from 'react';
import { useObserver } from '../hooks/useObserver';

interface DesktopVersionProps {
  $src: string
}

interface MobileVersionProps {
  $src: string
}

const Container = styled.section`
  width: 100%;
  padding: 64px 140px;

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

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.laptop} {
    align-items: center;
    justify-content: center;
  }
`;

const Project = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  margin-bottom: 72px; 

  &:hover {
    transform: translateY(-8px);
  }
`;

const Info = styled.div`
  width: 100%;
`;

const Name = styled.p`
  color: ${props => props.theme.pallete.text};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
  margin-top: 16px;
`

const Screens = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;

  @media ${device.tablet} {
    width: auto;
  }
`

const DesktopVersion = styled.div<DesktopVersionProps>`
  width: 375px;
  height: 188px;
  border-radius: 16px;
  background-image: url(${props => props.$src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${device.tablet} {
    width: 350px;
  }

  @media ${device.mobileL} {
    width: 300px;
    background-position: inherit;
  }
`;

const MobileVersion = styled.div<MobileVersionProps>`
  width: 111px;
  height: 200px;
  border-radius: 16px;
  position: absolute;
  right: 64px;
  top: 48px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  background-image: url(${props => props.$src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${device.tablet} {
    display: none;
  }
`;

export default function Projects() {
  const ref = useRef(null);
  const observer = useObserver(ref);


  const projects = [{
    name: 'exercicio-crud',
    href: 'https://github.com/diogofrr/crud-firebase.git',
    imgMobile: exercicioCrudM,
    imgDesktop: exercicioCrudD
  },
  {
    name: 'antigo-portfolio',
    href: 'https://github.com/diogofrr/portfolio',
    imgMobile: antigoPortfolioM,
    imgDesktop: antigoPortfolioD
  },
  {
    name: 'dianpe',
    href: 'https://github.com/diogofrr/frontend_dianpe',
    imgMobile: dianpeM,
    imgDesktop: dianpeD
  },
  {
    name: 'landing-page-feti',
    href: 'https://github.com/diogofrr/landing-page-feti',
    imgMobile: fetiM,
    imgDesktop: fetiD
  }]

  return (
    <Container id="c-projects" ref={ref}>
    {observer && (
      <SlideFromLeftDiv>

      <Title $textAlign="center">
        Projetos
      </Title>
      <ProjectsContainer>
      {projects.map((project, index) => (
        <Project href={project.href} target="_blank" rel="noreferrer" key={`projeto-${index}`}>
          <Screens>
            <DesktopVersion $src={project.imgDesktop.toString()} />
            <MobileVersion $src={project.imgMobile.toString()} />
          </Screens>
          <Info>
            <Name>
              /{project.name}
            </Name>
          </Info>
        </Project>
      ))}
      </ProjectsContainer>
    </SlideFromLeftDiv>
    )}
    </Container>
  )
}