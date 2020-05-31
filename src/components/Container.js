import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "./index"

export function Container({ children }) {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
