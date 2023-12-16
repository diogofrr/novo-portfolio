import { useState } from 'react'

import styled, { css, keyframes } from 'styled-components'
import { device } from '../device'

import { VerifiedIcon } from './Icons'
import MenuHamburguerIcon from './MenuHamburguerIcon'
import SideIcons from './SideIcons'

interface NavItemProps {
  $isActive?: boolean
}

interface NavProps {
  $isActive: boolean
}

interface NavMenuProps {
  $isActive: boolean
}

const surge = keyframes`
  0% { transform: scaleX(0) }
  100% { transform: scaleX(1) }
`

const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: lightgray;
`

const LogoText = styled.p`
  color: ${props => props.theme.pallete.text};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;

  &:hover {
    color: ${props => props.theme.pallete.primary};
  }
`

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`

const HeaderContent = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 140px 16px 140px;
  position: fixed;
  background-color: #FFF;
  z-index: 100;
  top: 0;

  @media ${device.laptopL} {
    padding: 16px 70px 16px 70px;
  }

  @media ${device.laptop} {
    padding: 8px 35px 8px 35px;
  }

  @media ${device.mobileL} {
    padding: 8px 17.5px 8px 17.5px;
  }
`
const Nav = styled.nav<NavProps>`  
  @media (${device.tablet}) {
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 100%;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    background-color: #000000;
    overflow: hidden;
  }
`

const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 48px;

  @media ${device.laptop} {
    gap: 24px;
  }
  
  @media ${device.tablet} {
    display: ${props => props.$isActive ? 'flex' : 'none'};
    flex-direction: column;
    max-height: 80%;
    gap: 0;
  }
`
const NavItem = styled.li<NavItemProps>`  
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    height: 5px;
    // Lógica para o cenário em que há paginação
    /* background-color: ${props => props.$isActive ? props.theme.pallete.primary : props.theme.pallete.textOffset }; */
    background-color: ${props => props.theme.pallete.primary};
    position: absolute;
    left: 1.25rem;
    right: 1.25rem;
    bottom: -2px;
    transform-origin: 0 50%;
    transition: transform 0.3s cubic-bezier(0, 0.29, 0.99, 0.58);
    transform: ${props => props.$isActive ? 'scaleX(1)' : 'scaleX(0)'};
    animation: ${props => props.$isActive && (css`${surge} 0.3s linear`)};
  }

  &:hover:after {
    transform: scaleX(1); 
  }

  @media ${device.tablet} {
    flex: 1;
    width: 100%;
    padding: 0 15%;

    &:after {
      animation: none;
      left: 0;
      right: 70%;
      height: 10px;
      bottom: 4px;
    }
  }
`

const NavLink = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0.75rem 1.25rem;
  line-height: 1;
  white-space: nowrap;
  text-transform: lowercase;
  color: ${props => props.theme.pallete.text};
  transition: color .2s linear;
  text-decoration: none;

  font-family: ${props => props.theme.fonts.roboto};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media ${device.tablet} {
    justify-content: start;
    align-items: end;
    padding: 24px;
    font-size: 40px;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.playFair};
    text-transform: capitalize;
    color: #FFF;
    text-align: left;
    line-height: 1;
    white-space: nowrap;
  }
`

const Number = styled.span`
  font-weight: 600;
  margin-right: 4px;
  
  @media ${device.tablet} {
    font-size: 20px;
    font-family: ${props => props.theme.fonts.roboto};
    font-weight: 300;
    margin-right: 8px;
    color: ${props => props.theme.pallete.textOffset};
  }
`

export default function Header() {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  const handleChangeMenuState = () => {
    setMenuActive(!menuActive)
  }

  return (
    <HeaderContent>
      <LogoContainer href="https://linkedin.com/in/diogohfrr" target="_blank">
        <LogoImg src="https://avatars.githubusercontent.com/u/104373811?v=4" alt="Foto de Diogo Henrique Ferreira" />
        <LogoText>
          diogofrr
        </LogoText>
        <VerifiedIcon width={16} height={16} />
      </LogoContainer>
      <Nav $isActive={menuActive}>
        <NavMenu $isActive={menuActive}>
          <NavItem>
            <NavLink onClick={() => setMenuActive(false)} href="#c-hero">
              <Number>
                01
              </Number>
              início
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => setMenuActive(false)} href="#c-experiences">
              <Number>
                02
              </Number>
              sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => setMenuActive(false)} href="#c-projects">
              <Number>
                03
              </Number>
              projetos
            </NavLink>
          </NavItem>
        </NavMenu>
        <SideIcons showInMobile={true} showInDesktop={false} />
      </Nav>
      <MenuHamburguerIcon isActive={menuActive} onClick={handleChangeMenuState} />
    </HeaderContent>
  )
}