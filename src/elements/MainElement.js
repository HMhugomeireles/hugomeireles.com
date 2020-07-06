import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: ${({ theme }) => theme.currentTheme.background};
  color: ${({ theme }) => theme.currentTheme.color};
`
