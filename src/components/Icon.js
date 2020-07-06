import React from "react"
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

const IconsList = {
  js: Js,
  css: Css,
  docker: Docker,
  graphql: Graphql,
  html: Html,
  node: Node,
  npm: Npm,
  reactNative: ReactNative,
  react: ReactIcon,
  sass: Sass,
  typescript: Typescript,
  webpack: Webpack,
}

export function Icon({ category, size }) {
  let ComponentIcon = IconsList[`${category}`]
  return <ComponentIcon width={size[0]} height={size[1]} />
}
