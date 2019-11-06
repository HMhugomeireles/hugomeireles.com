import styled from 'styled-components'

export const MainContent = styled.main`
  width: 100vw;
  height: 100%;
  background: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.backgroundPage : light.backgroundPage};
  color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.textColorPrimary : light.textColorPrimary};
  transition: ease-in-out 400ms;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;

  @media (min-width: 1000px) {
    overflow-y: scroll;
    width: calc(100% - 390px);
    z-index: 0;
    left: 390px;
    top: 0;
  }
`