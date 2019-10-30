import React, { useState } from 'react'
import ThemeContext from './../../context/ThemeContext'

import NavBar from './../../organisms/NavBar'

import { menuLinks, socialLinks } from './../../../data/Links'
import * as Themes from './../../../data/themes'


export default () => {
  const [theme, setTheme] = useState({ darkMode: false })

  return (
    <ThemeContext.Provider value={{ theme, setTheme, Themes }}>
      <NavBar 
        menuLinks={menuLinks}
        socialLinks={socialLinks}
      />
      <main></main>
    </ThemeContext.Provider>
  )
}

