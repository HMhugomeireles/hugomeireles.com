import React from 'react'

import LogoDark from './../../images/logo-dark.svg'
import LogoLight from './../../images/logo-dark.svg'

const Logo = props => {
  let imgSource = ''

  if (props.themeName === 'dark') {
    imgSource = LogoDark
  } else {
    imgSource = LogoLight
  }

  return (
    <img src={imgSource} alt="Hugo Meireles logo" />
  )
}

export default () => (
  <nav>
    <div>
      
    </div>
    <div>
      <Logo 
        themeName={}
      />
    </div>
    
  </nav>
)

