import styled from "styled-components"

export const BlogContainerElement = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  background: ${({ theme }) => theme.currentTheme.background};
  color: ${({ theme }) => theme.currentTheme.color};
`

export const BlogContainerWrapper = styled.main`
  display: flex;
  flex-direction: row;
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
`
