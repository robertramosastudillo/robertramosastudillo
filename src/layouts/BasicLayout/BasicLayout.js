import React from "react"
import Menu from "../../components/Menu/Menu"
import { GlobalStyle } from "../../themes/global-style"
import { GlobalContainer } from "./BasicLayoutStyle"

const BasicLayout = ({ children }) => {
  return (
    <GlobalContainer>
      <GlobalStyle />
      <Menu />
      {children}
    </GlobalContainer>
  )
}

export default BasicLayout
