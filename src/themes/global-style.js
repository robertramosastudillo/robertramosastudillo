import styled, { createGlobalStyle } from "styled-components"
import { device } from "./device"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
            background-color: #f4f4f4;
    }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 auto;

  @media ${device.laptop} {
    overflow-y: scroll;
  }

  /* @media ${device.desktop} {
    height: 100%;
    justify-content: center;
  } */
`

export { GlobalStyle, Container }
