import React, { useContext } from 'react'

import ThemeContext from './../../context/ThemeContext'

import { WrapperSection } from './Styled.js'

export default () => {
  const { theme, Themes } = useContext(ThemeContext);

  return (
    <WrapperSection darkMode={theme.darkMode} theme={Themes}>
      <div>
        ola
        {/* h2 Hi! - I'm  */}
        {/* h1 Hugo */}
        {/* h1 Meireles */}
      </div>
      <div>
        {/* h2 sub title with same words in bold */}
        {/* h2 sub title */}
      </div>
      <div>
        {/* p module */}
      </div>
      <div>
        {/* p module */}
      </div>
      <div>
        {/* p module */}
      </div>
    </WrapperSection>
  )
}
