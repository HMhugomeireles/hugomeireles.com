import styled from "styled-components"

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem 4rem;

  height: 100vh;

  background: ${({ theme }) => theme.currentTheme.background};
  color: ${({ theme }) => theme.currentTheme.color};
`
