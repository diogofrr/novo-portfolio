import styled from "styled-components"

const FooterBar = styled.footer`
  height: 100px;
  width: 100%;
  background-color: ${props => props.theme.pallete.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${props => props.theme.pallete.text};
  font-family: ${props => props.theme.fonts.roboto};
`;

const Link = styled.a`
  color: ${props => props.theme.pallete.decoration};
  
  &:visited, &:active, &:hover {
    color: ${props => props.theme.pallete.primary};
  }
`;

export default function Footer() {
  return (
    <FooterBar>
      <Text>Feito com &#10084;&#65039; por <Link href="https://github.com/diogofrr">diogofrr</Link>.</Text>
    </FooterBar>
  )
}