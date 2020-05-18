import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import ThemeDark from "./src/styles/dark"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    padding: 0;
    margin: 0;

    font-family: 'Roboto', sans-serif;
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={ThemeDark}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
