import React, { useContext } from "react"
import {
  OverLay,
  Blur,
  CloseIcon,
  MenuOptions,
  Option,
  Title,
} from "./Menu.style"
import { MenuShape } from "../../icons/MenuShape"
import { MenuContext } from "../../context"
import { motion } from "framer-motion"

export function Menu({ handleCloseMenu }) {
  const { isOpenMenu, toggleMenu } = useContext(MenuContext)

  if (isOpenMenu) {
    return (
      <OverLay
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
      >
        <Blur />
        <motion.div
          animate={{
            opacity: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: 1000,
          }}
        >
          <MenuShape />
        </motion.div>
        <Title>Menu</Title>
        <CloseIcon onClick={toggleMenu}>Close</CloseIcon>
        <MenuOptions>
          <Option to="/">Home</Option>
          <Option to="/blog">Words I Release</Option>
          <Option to="/tips">Tips</Option>
        </MenuOptions>
      </OverLay>
    )
  }

  return <React.Fragment />
}
