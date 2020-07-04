import React from "react"
import styled from "styled-components"

const BioContainer = styled.div`
  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
`

export function Bio() {
  return <BioContainer>Hello Bio and download resume</BioContainer>
}
