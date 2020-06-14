import React from "react"
import { ContainerWrapper } from "../../elements"
import { Hamburger, Shapes } from "../../components"
import { LinkedInIcon } from "../../icons/LinkedInIcon"
import { GithubIcon } from "../../icons/GithubIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import {
  BoxElement,
  BoxWithColor,
  ShadowBox,
  FrameWithBorder,
  Text,
  SocialBox,
  TextFloatBottom,
  TextFloatTop,
} from "./Home.style"

export function Home() {
  return (
    <ContainerWrapper>
      <Hamburger />
      <BoxElement
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.8, ease: "easeInOut" }}
      >
        I ´m human bean, who has passion to solve problems with code.
      </BoxElement>
      <Shapes />
      <BoxWithColor
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        initial={{
          opacity: 0,
          x: "1rem",
          y: "-1rem",
        }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
      />
      <ShadowBox
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{ delay: 0.3 }}
      />
      {/* <FrameWithBorder
        animate={{
          opacity: 1,
          x: 0,
        }}
        initial={{
          opacity: 0,
          x: -300,
        }}
        transition={{ delay: 0.4 }}
      /> */}
      <SocialBox
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: "100vh",
        }}
        transition={{ delay: 0.4 }}
      >
        <LinkedInIcon />
        <GithubIcon />
        <TwitterIcon />
      </SocialBox>
      <TextFloatTop
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: "100vh",
        }}
        transition={{ delay: 0.5 }}
      >
        <div>Hugo</div>
      </TextFloatTop>
      <Text
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: "100vh",
        }}
        transition={{ delay: 0.6 }}
      >
        <div>Meireles</div>
      </Text>
      <TextFloatBottom
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ delay: 0.7 }}
      >
        FullStack Developer
      </TextFloatBottom>
    </ContainerWrapper>
  )
}
