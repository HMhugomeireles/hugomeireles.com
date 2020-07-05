import React from "react"
import { MainContainer, ArticlesSection } from "../elements"
import { BlogHeader } from "../components"
import { Articles } from "../containers"

function Blog() {
  return (
    <MainContainer>
      <BlogHeader />
      <ArticlesSection>
        <Articles />
      </ArticlesSection>
    </MainContainer>
  )
}

export default Blog
