import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { device } from '../device'
import { VerifiedIcon } from './Icons'
import MenuHamburguerIcon from './MenuHamburguerIcon'

interface NavItemProps {
  $isActive?: boolean
}

interface NavProps {
  $isActive: boolean
}

const surge = keyframes`
  0% { transform: scaleX(0) }
  100% { transform: scaleX(1) }
`

const menuSurge = keyframes`
  0% {
    border-radius: 100%;
  }
  100% {
    border-radius: 0;
  }
`

const LogoImg = styled.div`
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
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Nav = styled.nav<NavProps>`
  display: flex;
  width: ${props => props.$isActive ? '100%' : '0'};
  height: ${props => props.$isActive ? '100%' : '0'};
  animation: ${menuSurge} 0.5s ease-in;
  transition: 0.5s;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background-color: #000000;
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 48px;

  @media ${device.laptop} {
    display: none;
  }
`
const NavItem = styled.li<NavItemProps>`  
  position: relative;

  &:after {
    content: "";
    display: ${props => props?.$isActive ? 'block' : 'none'};
    height: 5px;
    background-color: ${props => props.theme.pallete.primary};
    position: absolute;
    left: 1.25rem;
    right: 1.25rem;
    bottom: -2px;
    transform-origin: 0 50%;
    transition: transform .3s cubic-bezier(.86, 0, .07, 1);
    animation: ${surge} 0.3s ease-in;
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


  font-family: ${props => props.theme.fonts.roboto};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`

const Bold = styled.b`
  font-weight: 600;
  margin-right: 4px;
`

export default function Header() {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  const handleChangeMenuState = () => {
    setMenuActive(!menuActive)
  }

  return (
    <HeaderContent>
      <LogoContainer href="https://google.com">
        <LogoImg />
        <LogoText>
          diogofrr
        </LogoText>
        <VerifiedIcon width={16} height={16} />
      </LogoContainer>
      <Nav $isActive={menuActive}>
        <NavMenu>
          <NavItem $isActive={true}>
            <NavLink>
              <Bold>
                01
              </Bold>
              início
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Bold>
                02
              </Bold>
              sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Bold>
                03
              </Bold>
              projetos
            </NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
      <MenuHamburguerIcon isActive={menuActive} onClick={handleChangeMenuState} />
    </HeaderContent>
  )
}