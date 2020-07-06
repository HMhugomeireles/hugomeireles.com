import React from "react"
import { graphql, useStaticQuery } from "gatsby"
/* import { CategoriesWrapper } from "../elements" */
import { Category } from "../components"

export function Categories() {
  const { categories } = useStaticQuery(graphql`
    query Categories {
      categories: allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        nodes {
          relativeDirectory
          children {
            id
          }
        }
      }
    }
  `)
  console.log(categories)

  return <div></div>
}
