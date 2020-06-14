import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/styles/theme"
import GlobalStyle from "./src/styles/globalStyles"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
