import React from "react"
import { motion } from "framer-motion"
import { MenuContext } from "../context"
import { HamburgerIcon } from "../icons/HamburgerIcon"
import styled from "styled-components"

const HamburgerWrapper = styled(motion.div)`
  grid-column: 13 / 14;
  grid-row: 1 / span 1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`

export function Hamburger() {
  const { toggleMenu } = React.useContext(MenuContext)
  return (
    <HamburgerWrapper onClick={toggleMenu}>
      <HamburgerIcon />
    </HamburgerWrapper>
  )
}
