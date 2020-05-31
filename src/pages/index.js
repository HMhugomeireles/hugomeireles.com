import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components/"
import { Link } from "gatsby"

function IndexPage(props) {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <Link tot="/blog">AllPost</Link>
        <ContentCard
          date="21 Mar 2020"
          excerpt="JavaScript is incredibly versatile and beginner friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!"
          slug="/test"
          title="JavaScript is incredibly versatile"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
