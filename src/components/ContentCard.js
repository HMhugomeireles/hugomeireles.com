import React from "react"
import { CardWrapper, Paragraph, Header2 } from "../elements"
import { Button } from "../components"

export function ContentCard({ date, title, excerpt, slug }) {
  return (
    <CardWrapper>
      <Paragraph size="xSmall" textAlign="center" margin="0 0 0.5rem 0">
        {date}
      </Paragraph>
      <Header2 textAlign="center" margin="0 0 1rem 0">
        {title}
      </Header2>
      <Paragraph size="small" textAlign="center" margin="0 0 1.5rem 0">
        {excerpt}
      </Paragraph>
      <Button href={slug}>Read More</Button>
    </CardWrapper>
  )
}
