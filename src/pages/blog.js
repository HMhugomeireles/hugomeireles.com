import React from "react"
import {
  MainContainer,
  Aside,
  HighLightArticle,
  ArticlesSection,
  SpotlightArticle,
  Categories,
} from "../elements"
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
