import React from "react"
import { ContainerWrapper } from "../elements"
import { Header } from "./Header"

export function Container({ children }) {
  return (
    <ContainerWrapper>
      <Header />
      {children}
    </ContainerWrapper>
  )
}
