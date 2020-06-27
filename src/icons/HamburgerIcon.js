import React from "react"
import styled from "styled-components"

const Hamburger = styled.svg`
  width: 40px;
  height: 21px;

  cursor: pointer;
`

export function HamburgerIcon() {
  return (
    <Hamburger
      viewBox="0 0 40 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="40" y2="0.5" stroke="white" />
      <line y1="10.5" x2="40" y2="10.5" stroke="white" />
      <line y1="20.5" x2="40" y2="20.5" stroke="white" />
    </Hamburger>
  )
}
