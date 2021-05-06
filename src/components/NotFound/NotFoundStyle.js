import styled from "styled-components"
import { device } from "../../themes/device"

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: calc(100vh - 4rem);
  justify-content: center;
  margin: 0 auto;
  text-align: center;

  @media ${device.laptop} {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`

const Title = styled.h4`
  position: relative;
  font-size: 56px;
  background: transparent linear-gradient(180deg, #49c7d8 0%, #3996a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  bottom: 60px;

  @media ${device.laptop} {
    font-size: 96px;
  }
`
const Subtitle = styled.p`
  position: relative;
  font-size: 24px;
  bottom: 40px;
  font-weight: bold;
  color: #151515;

  @media ${device.laptop} {
    font-size: 56px;
  }
`

export { NotFoundContainer, Title, Subtitle }
