import React from "react"
//import Header from "./header"
import Navigation from "./Navigation"
import { MainContent, WrapperContent } from "../styles/styles"

const Layout = ({ children }) => {
  return (
    <MainContent>
      <Navigation />
      <WrapperContent>{children}</WrapperContent>
    </MainContent>
  )
}

export default Layout
