import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from "../components"
import { Header1, Paragraph } from "../elements"

export default function allPosts({ pageContext, data }) {
  const { currentPage, numPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPage
  const previousPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges
  return (
    <Container>
      <FeatureImage />
      <Content>
        {posts.map(post => (
          <ContentCard
            key={post.node.id}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={previousPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            category
            date(formatString: "DD MMMM YYYY")
            excerpt
            title
          }
          id
        }
      }
    }
  }
`
