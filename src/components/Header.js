import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { LinkWrapper, Menu } from "../elements"

const HeaderContainer = styled.section`
  height: 8.125rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BlogTitle = styled.section`
  background-color: #56585b;
  color: #fff;
  padding: 5rem;
  font-family: "IBM Plex Sans";

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.6rem;
  }
`

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(
        childImageSharp: { fixed: { originalName: { eq: "hm-large.png" } } }
      ) {
        childImageSharp {
          fixed {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <header>
      <HeaderContainer>
        <Img
          fluid={data.file.childImageSharp.fixed}
          alt="Hugo Meireles brand"
        />
        <nav>
          <Menu>
            <li>
              <LinkWrapper to="/">Home</LinkWrapper>
            </li>
            <li>
              <LinkWrapper to="/blog">Notes</LinkWrapper>
            </li>
          </Menu>
        </nav>
      </HeaderContainer>
      <BlogTitle>
        <h1>Blog</h1>
        <p>space of the things I have in the brain</p>
      </BlogTitle>
    </header>
  )
}
