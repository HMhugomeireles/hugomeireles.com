import React from "react"
import styled from "styled-components"

const ImageContainer = styled.div`
  grid-column: ${props => props.gridColumn};

  display: flex;
  justify-content: center;
  align-items: center;
`

export function Image({ imageSrc, gridColumn }) {
  return (
    <ImageContainer gridColumn={gridColumn}>
      <img src={imageSrc} alt="" />
    </ImageContainer>
  )
}
