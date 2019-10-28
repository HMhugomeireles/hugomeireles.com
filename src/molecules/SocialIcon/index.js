import React from 'react'

import Icon from '../../atoms/Icon'

import GithubLight from './../../images/Github-lightTheme.svg'
import GithubDark from './../../images/Github-darkTheme.svg'
import LinkedIn from './../../images/LinkedIN.svg'
import Twitter from './../../images/Twitter.svg'

export default ({url, iconName, styleType, theme}) => {
  let icon = ''
  
  switch(iconName) {
    case 'GitHub':
      theme.name === 'dark' ? icon = GithubDark : icon = GithubLight;
      break;
    case 'LinkedIn':
      icon = LinkedIn;
      break;
    case 'Twitter':
      icon = Twitter;
      break;
    default:
      break;
  }
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon styleType={styleType}  icon={icon} />
    </a>
  )
}