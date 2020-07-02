import React from "react"
import styled from "styled-components"
import { Button } from "../elements"

const HeroInfoContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  display: flex;
  flex-direction: column;
`

export function HeroInfo() {
  return (
    <HeroInfoContainer>
      <h1>Hugo Meireles</h1>
      <p>Javascript FullStack Developer</p>
      <p>
        A self-taught developer, currently work at Celfocus. Human being who
        have a many passion. Father, Dreamer, Idealistic, Javascript lover and
        interfaces creator.
      </p>
      <Button>Tips</Button>
    </HeroInfoContainer>
  )
}
