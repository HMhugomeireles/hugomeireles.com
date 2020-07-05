import React from "react"
import styled from "styled-components"

const SpotlightArticleContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);

  gap: 20px;

  padding: 10px;

  box-shadow: ${({ theme }) => theme.shadows.boxShadow2};
  border-radius: 12px;
`
const SpotlightArticleHeader = styled.header`
  grid-column: 3 / span 2;
  grid-row: 1 / span 1;
`
const SpotlightArticleImage = styled.img`
  grid-column: 1 / span 2;
  grid-row: 1 / span 4;

  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: cover;
`

const SpotlightArticleParagraph = styled.p`
  grid-column: 3 / span 2;
  grid-row: 2 / span 3;
`

export function SpotlightArticle() {
  return (
    <SpotlightArticleContainer>
      <SpotlightArticleHeader>
        <h2>Nice post where</h2>
      </SpotlightArticleHeader>
      <SpotlightArticleImage
        src={
          "https://www.efdemon.com/wp-content/uploads/2020/02/hippie-viking-300x432.jpg"
        }
        alt=""
      />
      <SpotlightArticleParagraph>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </SpotlightArticleParagraph>
    </SpotlightArticleContainer>
  )
}
