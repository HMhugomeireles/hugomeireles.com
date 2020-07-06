import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Header = styled.header`
  height: 8.125rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    padding: 10px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.hub.blue[300]};
      font-size: 1.5rem;
      font-weight: bold;
      font-family: "IBM Plex Sans", sans-serif;
    }
  }
`
const Brand = styled.div``
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

export function BlogHeader() {
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

  console.log(data)

  return (
    <section>
      <Header>
        <Img
          fluid={data.file.childImageSharp.fixed}
          alt="Hugo Meireles brand"
        />
        <nav>
          <Menu>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Notes</Link>
            </li>
          </Menu>
        </nav>
      </Header>
      <BlogTitle>
        <h1>Blog</h1>
        <p>space of the things I have in the brain</p>
      </BlogTitle>
    </section>
  )
}
