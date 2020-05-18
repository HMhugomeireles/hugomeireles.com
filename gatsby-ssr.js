import React from "react"
import { ThemeProvider } from "styled-components"
import ThemeDark from "./src/styles/dark"
import GlobalStyle from "./src/styles/globalStyles"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={ThemeDark}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
