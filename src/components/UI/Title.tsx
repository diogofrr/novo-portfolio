import { device } from "../../device";
import styled from "styled-components";

interface TitleProps {
  $textAlign?: string
}

const Title = styled.h2<TitleProps>`
  color: ${(props) => props.theme.pallete.text};
  font-family: ${(props) => props.theme.fonts.playFair};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 48px;

  @media ${device.laptop} {
    text-align: ${props => props.$textAlign};
  }

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.mobileL} {
    font-size: 24px;
  }
`;

export default Title;