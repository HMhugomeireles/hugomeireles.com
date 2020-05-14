import styled from "styled-components"

export const MainContent = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.backgroundPage};
  color: ${({ theme }) => theme.textColorPrimary};
  transition: ease-in-out 400ms;
`

export const WrapperContent = styled.section`
  width: 1024px;
  margin: 0 auto;
`
