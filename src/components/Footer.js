import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  margin-top: 3rem;
  padding: 50px;
  text-align: center;
  background: #242526;
`
const FooterWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ImageAuthor = styled.img`
  width: 30%;
  height: 10%;
  border-radius: 50%;
`

const SocialLinks = styled.section`
  width: 50%;
`

export function FooterContainer() {
  return (
    <Footer>
      <p>© Hugo Meireles 2020</p>
    </Footer>
  )
}
