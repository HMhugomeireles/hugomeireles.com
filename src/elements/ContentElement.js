import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 3 / span 8;
  grid-row: 3 / span 5;

  background-color: ${props => props.theme.colors.white};
  padding: ${props => `
          ${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.medium};
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
