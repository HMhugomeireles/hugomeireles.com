import React from 'react'

import Close from './../../images/cancel_24px_rounded.svg'
import MenuOpen from './../../images/menu_24px_rounded.svg'

import Icon from './../../atoms/Icon/'
//import LogoHM from './../../atoms/LogoImg/'

import SocialIcon from '../../molecules/SocialIcon'

import { NavBar, Icons, LogoSection, Menu, ToggleTheme, SocialLinks } from './Styled'

export default ({ menuLinks, socialLinks, theme }) => (
  <NavBar>
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
      {/*<LogoHM 
        themeName={"dark"}
      />*/}
    </LogoSection>
    <Menu>
      {menuLinks.map(link => <p key={link.name}>{link.name}</p>)}
    </Menu>
    <ToggleTheme>
      button to change theme
    </ToggleTheme>
    <SocialLinks>
      {socialLinks.map(social =>
          <SocialIcon
            key={social.name}
            url={social.url}
            iconName={social.name}
            styleType={{width: '24px', height: '24px'}}
            theme={theme}
          />
        )
      }
    </SocialLinks>
  </NavBar>
)

