import React from "react"
import Menu from "../../components/Menu/Menu"
import { GlobalStyle } from "../../themes/global-style"

const BasicLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      {children}
    </>
  )
}

export default BasicLayout
