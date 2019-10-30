import React, { useContext } from 'react'

import Close from './../../images/cancel_24px_rounded.svg'
import MenuOpen from './../../images/menu_24px_rounded.svg'

import Icon from './../../atoms/Icon/'
import LogoHM from './../../atoms/LogoImg/'

import SocialIcon from '../../molecules/SocialIcon'

import { NavBar, Icons, LogoSection, Menu, ToggleTheme, SocialLinks } from './Styled'
import ThemeContext from '../../context/ThemeContext'

export default ({ menuLinks, socialLinks }) => {
  const { theme, setTheme, Themes } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme({
      darkMode: !theme.darkMode
    })
  }

  return (
    <NavBar darkMode={theme.darkMode} theme={Themes}>
      <Icons>
        <Icon 
          styleType={{width: '24px', height: '24px'}} 
          icon={Close} 
        />
        <Icon 
          styleType={{width: '24px', height: '24px'}} 
          icon={MenuOpen} 
        />
      </Icons>
      <LogoSection>
        <LogoHM 
          darkMode={theme.darkMode}
        />
      </LogoSection>
      <Menu
        darkMode={theme.darkMode}
        theme={Themes}
      >
        {menuLinks.map(link => <p key={link.name}>{link.name}</p>)}
      </Menu>
      <ToggleTheme>
        <button onClick={toggleTheme}>change theme</button>
      </ToggleTheme>
      <SocialLinks>
        {
          socialLinks.map(social =>
            <SocialIcon
              key={social.name}
              url={social.url}
              iconName={social.name}
              styleType={{width: '24px', height: '24px'}}
              darkMode={theme.darkMode}
            />
          )
        }
      </SocialLinks>
    </NavBar>
  )
}

