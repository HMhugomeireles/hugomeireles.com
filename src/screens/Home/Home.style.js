import styled from "styled-components"
import { motion } from "framer-motion"

export const BoxElement = styled(motion.div)`
  grid-column: 2 / span 5;
  grid-row: 1 / span 3;

  z-index: 3;

  background-color: #5f80a0;
  color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: ${({ theme }) => theme.shadows.boxShadow1};

  display: flex;
  align-items: center;

  padding: 0 4rem;

  font-family: "Open Sans";
  font-size: 2rem;
`

export const BoxWithColor = styled(motion.div)`
  grid-column: 3 / span 6;
  grid-row: 3 / span 3;

  background-color: #ffd600;
  z-index: 2;
`

export const ShadowBox = styled(motion.div)`
  grid-column: 3 / span 6;
  grid-row: 3 / span 3;

  position: relative;
  z-index: 1;
  top: -1rem;
  left: 1rem;

  background-color: #293745;
`

export const FrameWithBorder = styled(motion.div)`
  grid-column: 8 / span 6;
  grid-row: 4 / span 1;

  position: relative;
  z-index: 1;

  border: 0.8rem solid #293745;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow2};
`

export const SocialBox = styled(motion.div)`
  grid-column: 2 / span 3;
  grid-row: 6 / span 1;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;

  background-color: #293745;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow2};
`

export const Text = styled(motion.div)`
  grid-column: 9 / span 5;
  grid-row: 4 / span 1;
  z-index: 1;

  position: relative;

  display: flex;
  align-items: flex-end;

  color: ${({ theme }) => theme.colors.mono.white};

  div {
    width: 100%;
    position: absolute;
    font-size: 6rem;
    font-weight: bold;
    text-align: right;
  }
`

export const TextFloatTop = styled(motion.div)`
  grid-column: 9 / span 5;
  grid-row: 3 / span 1;
  z-index: 1;

  position: relative;

  display: flex;
  align-items: flex-end;

  color: ${({ theme }) => theme.colors.mono.white};

  div {
    width: 100%;
    position: absolute;
    right: 3rem;
    text-align: center;
    font-weight: bold;
    font-size: 6rem;
  }
`

export const TextFloatBottom = styled(motion.div)`
  grid-column: 9 / span 5;
  grid-row: 5 / span 1;
  z-index: 1;

  position: relative;
  top: -1rem;

  text-align: right;

  font-size: 2.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mono.white};
`
