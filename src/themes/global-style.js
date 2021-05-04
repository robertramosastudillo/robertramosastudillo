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
    &::-webkit-scrollbar {
      width: 14px;
      background-color: #ccc;
    }

    &::-webkit-scrollbar-thumb {
      background: #49c7d8; // #151515;
      border-radius: 100px;
    }
  }
`

export { GlobalStyle, Container }
