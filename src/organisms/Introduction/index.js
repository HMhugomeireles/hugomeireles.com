import React, { useContext } from 'react'
import TextBase from './../../atoms/TextBase/'
import TextModule from './../../atoms/TextModule/'
import TextBackground from './../../atoms/TextBackground/'
import ThemeContext from './../../context/ThemeContext'

import { WrapperSection, HeaderSection } from './Styled.js'

export default () => {
  const { theme, Themes } = useContext(ThemeContext);

  return (
    <WrapperSection darkMode={theme.darkMode} theme={Themes}>
      <HeaderSection>
        <TextBase
          darkMode={theme.darkMode} 
          theme={Themes}
          font={'Arial'}
          size={'30px'} >Hi, - I’m</TextBase>
        <TextBackground
          darkMode={theme.darkMode} 
          theme={Themes}
          style={{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: '50px'
          }}
        >HUGO</TextBackground>
        <TextBackground
          darkMode={theme.darkMode} 
          theme={Themes}
          style={{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: '50px',
            backgroundColor: '#005DB2',
            color: '#fff',
            width: '260px',
          }}
        >MEIRELES</TextBackground>
        <TextBase
          darkMode={theme.darkMode} 
          theme={Themes}
          font={'Arial'}
          size={'30px'} 
        > <b>FullStack</b> base on <b>Porto</b>, I currently work at NovaBase(Celfocus)</TextBase>
      </HeaderSection>
      <TextModule
        darkMode={theme.darkMode} 
        theme={Themes}
        font={'Arial'}
        size={'22px'} 
      >Human being who have a many pasition. Dreamer, Father, Idealistic, Javascript lover and interfaces creator.</TextModule>
      <TextModule
        darkMode={theme.darkMode} 
        theme={Themes}
        font={'Arial'}
        size={'22px'} 
      >I make this, to track what I have be learning and the place to archive everything I learn and my explanation</TextModule>
      <TextModule
        darkMode={theme.darkMode} 
        theme={Themes}
        font={'Arial'}
        size={'22px'} 
      >Let´s talk about...</TextModule>
    </WrapperSection>
  )
}
