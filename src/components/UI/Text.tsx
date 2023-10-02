import styled from "styled-components"
import { device } from "../../device"

const Text = styled.p`
  color: ${props => props.theme.pallete.text};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media ${device.laptop} {
    margin-bottom: 48px;
  }

  @media ${device.mobileL} {
    font-size: 12px;
  }
`

export default Text;