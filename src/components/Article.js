import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Icon } from "../components"

const ArticleCardContainer = styled.article`
  border-bottom: 2px solid #fff;
  border-top: 2px solid #fff;
  padding: 30px;

  :hover {
    background-color: tomato;
  }

  a {
    text-decoration: none;

    display: flex;
    justify-content: space-between;

    color: #f9f9f9;
  }
`
const ArticleCardHeader = styled.header`
  h2 {
    font-size: 3.1rem;
  }
`

const ArticleCardBody = styled.div`
  font-size: 1.1rem;
`

const ArticleCardFooter = styled.footer`
  padding: 10px;
`

export function Article({ title, slug, date, excerpt, category }) {
  return (
    <ArticleCardContainer>
      <Link to={slug}>
        <ArticleCardHeader>
          <Icon category={category} size={["45px", "45px"]} />
          <h2>{title}</h2>
          <p>{date}</p>
        </ArticleCardHeader>
        <ArticleCardBody>{excerpt}</ArticleCardBody>
      </Link>
    </ArticleCardContainer>
  )
}
