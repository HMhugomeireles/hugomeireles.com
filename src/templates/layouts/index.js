import React from "react"
import { useLocalStorage } from "react-use"
import * as Themes from "./../../../data/themes"
import { MainContent, WrapperContent } from "./Styled"
import { ThemeProvider } from "styled-components"
import Navigation from "./../../Navigation/index"

export const ThemeContext = React.createContext(null)

export default function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", { darkMode: true })

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
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={isDarkMode()}>
        <MainContent>
          <Navigation />
          <WrapperContent>{children}</WrapperContent>
        </MainContent>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
