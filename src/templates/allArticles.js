import React from "react"
import { graphql } from "gatsby"
import { PostCard, BlogContainer, Pagination } from "../components"
import { ContentSection } from "../elements"

export default function allArticles({ pageContext, data }) {
  const { currentPage, numPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPage
  const previousPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <BlogContainer>
      <ContentSection>
        {posts.map(post => (
          <PostCard
            key={post.node.id}
            title={post.node.frontmatter.title}
            slug={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            excerpt={post.node.frontmatter.excerpt}
            category={post.node.frontmatter.category}
            thumbnail={post.node.frontmatter.thumbnail}
          />
        ))}
        {Boolean(numPage > 1) && (
          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            prevPage={previousPage}
            nextPage={nextPage}
          />
        )}
      </ContentSection>
    </BlogContainer>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            category
            date(formatString: "DD MMMM YYYY")
            excerpt
            title
            template
            thumbnail
          }
          id
        }
      }
    }
  }
`
