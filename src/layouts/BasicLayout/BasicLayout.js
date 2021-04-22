import React from "react"
import Menu from "../../components/Menu/Menu"

const BasicLayout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}

export default BasicLayout
