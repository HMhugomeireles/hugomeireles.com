import React, { useContext } from 'react'

import ThemeContext from './../../context/ThemeContext'

import { WrapperSection } from './Styled.js'

export default () => {
  const { theme, Themes } = useContext(ThemeContext);

  return (
    <WrapperSection darkMode={theme.darkMode} theme={Themes}>
      <div>
        <div>Hi, - I’m</div>
        <div>HUGO</div>
        <div>MEIRELES</div>
        
        {/* h2 Hi! - I'm  */}
        {/* h1 Hugo */}
        {/* h1 Meireles */}
      </div>
      <div>
        <div>FullStack base on Porto, I currently work at NovaBase(Celfocus). </div>
        {/* h2 sub title with same words in bold */}
      </div>
      <div>
        <div>Human being who have a many pasition. Dreamer, Father, Idealistic, Javascript lover and interfaces creator.</div>
        {/* p module */}
      </div>
      <div>
        <div>I make this, to track what I have be learning and the place to archive everything I learn and my explanation</div>
        {/* p module */}
      </div>
      <div>
        <div>Let´s talk about...</div>
        {/* p module */}
      </div>
    </WrapperSection>
  )
}
