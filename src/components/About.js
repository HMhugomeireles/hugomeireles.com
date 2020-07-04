import React from "react"
import styled from "styled-components"

const AboutContainer = styled.div`
  grid-column: 3 / 4;

  display: flex;
  flex-direction: column;
`

export function About() {
  return <AboutContainer>Hello About</AboutContainer>
}
