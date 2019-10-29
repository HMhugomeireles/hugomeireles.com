import React, { useState, useMemo } from 'react'
import ThemeContext from './../../context/ThemeContext'

import NavBar from './../../organisms/NavBar'

import { menuLinks, socialLinks } from './../../../data/Links'
import * as AllTheme from './../../../data/themes'


export default () => {
  const [theme, setTheme] = useState({ theme: AllTheme.light })
  const provideTheme = useMemo(() => ({theme, setTheme}), [theme, setTheme])

  return (
    <ThemeContext.Provider value={{ provideTheme, AllTheme }}>
      <NavBar 
        menuLinks={menuLinks}
        socialLinks={socialLinks}
      />
      <main></main>
    </ThemeContext.Provider>
  )
}

