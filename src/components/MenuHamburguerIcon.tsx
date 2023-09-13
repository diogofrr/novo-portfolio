import styled from "styled-components"
import { device } from "../device";

interface MenuHamburguerIconProps {
  isActive: boolean;
  onClick: () => void;
}

interface ButtonProps {
  $isActive: boolean;
}

interface MenuIconProps {
  $isActive: boolean;
}

interface MenuIconBarProps {
  $top: string;
  $isActive: boolean;
}

const Button = styled.button<ButtonProps>`
  display: none;
  width: 48px;
  height: 48px;
  background-color: ${props => props.$isActive ? 'transparent' : props.theme.pallete.border};
  border-radius: 100%;
  border: none;

  @media ${device.laptop} {
    display: block;
  }
  z-index: 100;
`
const MenuIcon = styled.span<MenuIconProps>`
  display: block;
  width: 24px;
  height: 16px;
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  transform: ${props => props.$isActive ? 'translate(-1px, 0) rotate(270deg)' : 'translate(0,-1px) rotate(0)'};
  transition: .5s cubic-bezier(.165, .84, .44, 1);
`

const MenuIconBar = styled.span<MenuIconBarProps>`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: ${props => props.$isActive ? '#FFFFFF' : '#000000'};
  left: 0;
  top: ${props => props.$isActive ? '50%' : props.$top};
  transition: transform .25s ease-in-out;

  &:nth-child(1), &:nth-child(2) {
    transform: rotate(${props => props.$isActive ? '45deg' : '0'});
  }

  &:nth-child(3), &:nth-child(4) {
    transform: rotate(${props => props.$isActive ? '-45deg' : '0'});
  }
`

export default function MenuHamburguerIcon({ isActive, onClick }: MenuHamburguerIconProps) {
  return (
    <Button $isActive={isActive} onClick={onClick}>
      <MenuIcon $isActive={isActive}>
        <MenuIconBar $top="0" $isActive={isActive} />
        <MenuIconBar $top="50%" $isActive={isActive} />
        <MenuIconBar $top="50%" $isActive={isActive} />
        <MenuIconBar $top="100%" $isActive={isActive} />
      </MenuIcon>
    </Button>
  )
}