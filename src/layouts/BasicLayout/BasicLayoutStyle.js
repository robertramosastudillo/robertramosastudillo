import styled from "styled-components"
import { device } from "../../themes/device"

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  @media ${device.laptop} {
    flex-direction: row;
    height: 100vh;
  }
`

export { GlobalContainer }
