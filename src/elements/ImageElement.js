import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-column: 2 / span 12;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
