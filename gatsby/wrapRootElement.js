import React from "react"
import Navigation from "../src/Navigation/index"
import { WrapperContent, MainContent } from "../src/styles/styles"
import { ThemeProvider } from "styled-components"
import * as Themes from "../src/styles/index"
//const Layout = require("./src/components/layout").default

export function wrapPageElement({ element }) {
  const [theme, setTheme] = React.state({ darkMode: true })

  function toggleTheme() {
    setTheme({ darkMode: !theme.darkMode })
  }

  function isDarkMode() {
    if (theme.darkMode) {
      return Themes.dark
    }
    return Themes.light
  }

  return (
    <ThemeProvider theme={isDarkMode()}>
      <MainContent>
        <Navigation onChangeTheme={toggleTheme} theme={theme} />
        <WrapperContent>{element}</WrapperContent>
      </MainContent>
    </ThemeProvider>
  )
}
