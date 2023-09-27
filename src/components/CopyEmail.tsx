import styled from "styled-components"
import { DuplicateIcon } from "./Icons"
import { useState } from "react"
import { device } from "../device"

interface CopyEmailContainerProps {
  $text: string
  $active: boolean
}

const CopyEmailContainer = styled.div<CopyEmailContainerProps>`
  display: flex;
  align-items: center;
  height: 48px;
  width: 300px;
  border: 1px solid ${props => props.theme.pallete.primary};
  padding-left: 12px;
  position: relative;
  transition: 0.3s;
  z-index: 2;
  background-color: #FFF;

  &:after {
    content: 'Email copiado com sucesso!';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    font-family: ${props => props.theme.fonts.roboto};
    line-height: normal;
    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 299px;
    height: ${props => props.$active ? '100%' : '0px'};

    transition: 0.3s;
    background-color: ${props => props.theme.pallete.primary};
  }

  @media ${device.laptop} {
    height: 44px;
  }
`

const CopyEmailContent = styled.p`
  color: ${props => props.theme.pallete.primary};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const CopyEmailButton = styled.button`
  border-left: 1px;
  border-bottom: 0;
  border-top: 0;
  border-right: 0;
  margin-left: auto;
  height: 100%;
  padding: 0 12px;
  background-color: ${props => props.theme.pallete.primary};
  border-color: ${props => props.theme.pallete.primary};
  cursor: pointer;
  transition: 0.2s;
  border-style: solid;
  
  &:hover {
    background-color: #FFF;
  }

  &:hover svg path{
    fill: ${props => props.theme.pallete.primary};
  }
`

export default function CopyEmail() {
  const [active, setActive] = useState(false);

  const handleCopyEmail = () => {
    setActive(true)
    navigator.clipboard.writeText('ddiogof20@gmail.com');
    setTimeout(() => {
      setActive(false)
    }, 2500)
  }
  return (
    <CopyEmailContainer $active={active} $text={active ? 'Email copiado com sucesso!' : 'Clique aqui para copiar'}>
      <CopyEmailContent>
        ddiogof20@gmail.com
      </CopyEmailContent>
      <CopyEmailButton type="button" onClick={handleCopyEmail}>
        <DuplicateIcon width={20} height={20} />
      </CopyEmailButton>
    </CopyEmailContainer>
  )
}