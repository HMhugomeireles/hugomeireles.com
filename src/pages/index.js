import React from "react"
import { AnimatePresence } from "framer-motion"
import Layout from "./layout"
import { Home, About } from "../screens"

function IndexPage(props) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Home />
        <About />
      </AnimatePresence>
    </Layout>
  )
}

export default IndexPage
