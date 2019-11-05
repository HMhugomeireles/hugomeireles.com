import React, { useState } from 'react'
import { useLocalStorage } from 'react-use'
import ThemeContext from './../../context/ThemeContext'
import MenuContext from './../../context/MenuContext'
import NavBar from './../../organisms/NavBar'
import { menuLinks, socialLinks } from './../../../data/Links'
import * as Themes from './../../../data/themes'
import { MainContent } from './Styled'
import MenuIcon from './../../atoms/MenuIcon/'

export default ({children}) => {
  const [theme, setTheme] = useLocalStorage('theme', { darkMode: false })
  const [menuState, setMenuState] = useState({ isMenuOpen: false })
  

  const toggleMenu = () => {
    if (window.innerWidth < 1000) {
      setMenuState({ isMenuOpen: !menuState.isMenuOpen })
    } else {
      setMenuState({ isMenuOpen: true })
    }
    console.log(menuState);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, Themes }}>
      <MenuContext.Provider value={{ menuToggle: menuState }}>
        <NavBar 
          menuLinks={menuLinks}
          socialLinks={socialLinks}
          isOpen={menuState}
          toggleMenu={toggleMenu}
        />
        <MainContent darkMode={theme.darkMode} theme={Themes}>
          <MenuIcon toggleMenu={toggleMenu} />
          {children}
        </MainContent>
      </MenuContext.Provider>
    </ThemeContext.Provider>
  )
}

