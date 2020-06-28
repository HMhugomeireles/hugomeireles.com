import React from "react"
import { Container, Section } from "../components"
import { Button } from "../elements"

function IndexPage(props) {
  return (
    <Container>
      <Section>
        <h1>Hugo Meireles</h1>
        <p>Javascript FullStack Developer</p>
        <p>
          A self-taught developer, currently work at Celfocus. Human being who
          have a many passion. Father, Dreamer, Idealistic, Javascript lover and
          interfaces creator.
        </p>
        <Button>Tips</Button>
      </Section>
    </Container>
  )
}

export default IndexPage
