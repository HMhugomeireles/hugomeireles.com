import React from 'react'

import LogoDark from './../../images/logo-dark.svg'
import LogoLight from './../../images/logo-light.svg'

export default ({ themeName }) => {
  let imgSource = ''

  if (themeName === 'light') {
    imgSource = LogoLight
  } else {
    imgSource = LogoDark
  }

  return <img src={imgSource} alt="Hugo Meireles logo" />
}