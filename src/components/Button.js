import React from "react"
import { ButtonWrapper } from "./../elements/ButtonElement"

export function Button({ children, href }) {
  return <ButtonWrapper to={href}>{children}</ButtonWrapper>
}
