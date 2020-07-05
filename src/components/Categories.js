import React from "react"
import { graphql, useStaticQuery } from "gatsby"
/* import { CategoriesWrapper } from "../elements" */
import { Category } from "../components"

import Js from "../assets/categories/icon-js.svg"
import Css from "../assets/categories/icons-css3.svg"
import Docker from "../assets/categories/icons-docker.svg"
import Graphql from "../assets/categories/icons-graphql.svg"
import Html from "../assets/categories/icons-html-5.svg"
import Node from "../assets/categories/icons-node-js.svg"
import Npm from "../assets/categories/icons-npm.svg"
import ReactNative from "../assets/categories/icons-react-native.svg"
import ReactIcon from "../assets/categories/icons-react.svg"
import Sass from "../assets/categories/icons-sass.svg"
import Typescript from "../assets/categories/icons-typescript.svg"
import Webpack from "../assets/categories/icons-webpack.svg"

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

  return (
    <div>
      <Category Icon={Js} />
      <Category Icon={Css} />
      <Category Icon={Docker} />
      <Category Icon={Graphql} />
      <Category Icon={Html} />
      <Category Icon={Node} />
      <Category Icon={Npm} />
      <Category Icon={ReactNative} />
      <Category Icon={ReactIcon} />
      <Category Icon={Sass} />
      <Category Icon={Typescript} />
      <Category Icon={Webpack} />
    </div>
  )
}
