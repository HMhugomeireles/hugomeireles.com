import React from 'react'

import LogoDark from './../../images/logo-dark.svg'
import LogoLight from './../../images/logo-light.svg'

export default ({ darkMode }) => {
  let imgSource = ''

  if (darkMode) {
    imgSource = LogoDark
  } else {
    imgSource = LogoLight
  }

  return <img src={imgSource} alt="Hugo Meireles logo" />
}