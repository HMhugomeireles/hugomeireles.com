import React from "react"
import { AnimatePresence } from "framer-motion"
import Layout from "./layout"
import { Home } from "../screens"

function IndexPage(props) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Home />
      </AnimatePresence>
    </Layout>
  )
}

export default IndexPage
