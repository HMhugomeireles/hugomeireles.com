import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export function Icons() {
  const data = useStaticQuery(graphql`
    query Categories {
      categories: allFile(
        filter: { relativeDirectory: { eq: "assets/categories" } }
      ) {
        nodes {
          id
        }
      }
    }
  `)

  console.log(data)
  return <div>Icons</div>
}
