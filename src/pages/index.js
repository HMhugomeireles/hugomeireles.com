import React from "react"
import { Container, Section, HeroInfo, Image } from "../components"

function IndexPage(props) {
  return (
    <Container>
      <Section>
        <HeroInfo />
        <Image
          imageSrc={
            "https://www.efdemon.com/wp-content/uploads/2020/02/hippie-viking-300x432.jpg"
          }
          gridColumn={"2 / 3"}
        />
      </Section>
    </Container>
  )
}

export default IndexPage
