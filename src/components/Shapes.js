import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { OrganizeShapes } from "../icons/OrganizeShapes"

const ShapesWrapper = styled(motion.div)`
  grid-column: 6 / span 2;
  grid-row: 1 / span 2;

  z-index: 0;
  position: relative;
  left: 1rem;

  display: flex;
  align-items: flex-end;
  opacity: 0;
`

export function Shapes() {
  return (
    <ShapesWrapper>
      <OrganizeShapes />
    </ShapesWrapper>
  )
}
