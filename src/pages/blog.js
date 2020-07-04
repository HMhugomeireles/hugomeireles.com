import React from "react"
import {
  MainContainer,
  Aside,
  HighLightArticle,
  ArticlesSection,
} from "../elements"
import { SpotlightArticle, Categories } from "../components"
import { Articles } from "../containers"

function Blog() {
  return (
    <MainContainer>
      <Aside>
        <Categories />
      </Aside>
      <HighLightArticle>
        <SpotlightArticle />
      </HighLightArticle>
      <ArticlesSection>
        <Articles />
      </ArticlesSection>
    </MainContainer>
  )
}

export default Blog
