import styled from "styled-components"

export const ContainerWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  gap: 1.75rem;
  background: ${({ theme }) => theme.gradients.mainBackground};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-gap: 0 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 0.8rem repeat(3, 1fr) 0.8rem;
  }
`
