import styled from "styled-components"

const FooterBar = styled.footer`
  height: 100px;
  width: 100%;
  background-color: ${props => props.theme.pallete.border};
`

export default function Footer() {
  return (
    <FooterBar>
    </FooterBar>
  )
}