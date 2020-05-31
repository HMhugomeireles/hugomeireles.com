import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"

export function Nav() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "jslogo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="Hugo Meireles logo" />
      </Link>
    </NavWrapper>
  )
}
