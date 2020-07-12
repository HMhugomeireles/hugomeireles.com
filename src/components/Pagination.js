import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationWrapper = styled.section`
  margin: 5rem 0;
  display: flex;
  justify-content: center;

  a:nth-child(1) {
    border-right: 0.2rem solid tomato;
  }
  a:nth-child(2) {
    border-left: 0.2rem solid tomato;
  }
`

const PaginationElement = styled(props => <Link {...props} />)`
  transition: 0.3s ease-in;
  margin: 0.4rem;
  padding: 0.8rem 1.1rem;

  text-decoration: none;
  font-size: 1.1rem;

  color: #c1c1c1;

  border: 0.2rem solid transparent;

  border-top: 0.2rem solid tomato;

  cursor: pointer;

  :hover {
    border: 0.2rem solid tomato;
  }
`

export function Pagination({ isFirst, isLast, prevPage, nextPage }) {
  return (
    <PaginationWrapper>
      {!isFirst && (
        <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      )}
      {!isLast && (
        <PaginationElement to={nextPage}>Next Page</PaginationElement>
      )}
    </PaginationWrapper>
  )
}
