import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  Paragraph,
} from "../elements"

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      linkedIn: file(relativePath: { eq: "linkedIn.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://www.linkedin.com/in/hm-hugomeireles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedIn.publicURL} alt="Link for linkedin" />
          </a>
          <a
            href="https://github.com/HMhugomeireles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="Link for github" />
          </a>
          <a
            href="https://twitter.com/h3meireles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Link for twitter" />
          </a>
        </FooterSocialIcons>
        <Paragraph size="xSmall">
          2020 Hugo Meireles. All right reserved.
        </Paragraph>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
