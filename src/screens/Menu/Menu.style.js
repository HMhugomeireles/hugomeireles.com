import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

export const OverLay = styled(motion.div)`
  z-index: 999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: block;
`

export const Blur = styled(motion.div)`
  opacity: 0.8;
  backdrop-filter: blur(5px);
  width: 100vw;
  height: 100vh;
  display: block;
  background-color: #293644;
`

export const Title = styled(motion.div)`
  position: absolute;
  top: 4rem;
  right: 36rem;
  color: #fff;
  font-size: 3rem;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`

export const CloseIcon = styled(motion.div)`
  position: absolute;
  top: 6rem;
  right: 6rem;
  color: #fff;
  cursor: pointer;
`

export const MenuOptions = styled(motion.div)`
  position: absolute;
  top: 10rem;
  right: 16rem;
  color: #fff;

  display: flex;
  flex-direction: column;
`
export const Option = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  font-size: 2rem;
  font-weight: 200;

  margin: 2rem 0;
`
