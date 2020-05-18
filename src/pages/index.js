import React from "react"

import Layout from "../components/layout"

import styled from "styled-components"
import Emoji from "../components/Ui/Emoji"
import JSIcon from "../icons/icon-js.svg"

const Container = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  min-height: calc(100vh - 110px);

  main {
    height: 100%;
  }
`
const PersonName = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.primaryColor};
`
const Greetings = styled.h1`
  color: ${({ theme }) => theme.textColorSecondary};
  font-size: 3.9rem;
`
const IntroText = styled.p`
  margin-top: 20px;
  font-size: 1.3rem;
  letter-spacing: 0.13vw;
  line-height: 5vh;
  color: ${({ theme }) => theme.textColorPrimary};
`
const TextHighlight = styled.span`
  color: ${({ theme }) => theme.textColorSecondary};
  font-size: bold;

  img {
    position: relative;
    top: 10px;
  }
`

const IndexPage = () => (
  <Layout>
    <Container>
      <main>
        <Greetings>
          Hi,{" "}
          <Emoji ariaLabel="Hand say, Hello!" fontSize={"3rem"} emoji="👋" />-
          I’m <PersonName>Hugo Meireles</PersonName>.
        </Greetings>
        <IntroText>
          <Emoji ariaLabel="Computer" fontSize={"3rem"} emoji="💻" />
          <TextHighlight>FullStack Developer</TextHighlight> based on Porto,
          Portugal
          <Emoji ariaLabel="City" fontSize={"3rem"} emoji="🏙️" />
          , I currently work at NovaBase(Celfocus). <br />
          Human being who have a many passion. Father, Dreamer, Idealistic,{" "}
          <TextHighlight>
            <img src={JSIcon} alt="Icon javascript" />
            Javascript
          </TextHighlight>{" "}
          lover and interfaces creator.
        </IntroText>
      </main>
    </Container>
  </Layout>
)

export default IndexPage
