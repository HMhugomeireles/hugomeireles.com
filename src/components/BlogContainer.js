import React from "react"
import { Header, FooterContainer } from "../components"
import { BlogContainerElement, BlogContainerWrapper } from "../elements"

export function BlogContainer({ children }) {
  return (
    <BlogContainerElement>
      <Header />
      <BlogContainerWrapper>{children}</BlogContainerWrapper>
      <FooterContainer />
    </BlogContainerElement>
  )
}
