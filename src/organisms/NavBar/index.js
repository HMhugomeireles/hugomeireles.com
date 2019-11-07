import React, { useContext, useEffect, useState } from 'react'
import Close from './../../images/cancel_24px_rounded.svg'
import Icon from './../../atoms/Icon/'
import LogoHM from './../../atoms/LogoImg/'
import ButtonToggleTheme from './../../atoms/Button/'
import SocialIcon from '../../molecules/SocialIcon'
import { NavBar, Icons, LogoSection, Menu, ToggleTheme, SocialLinks } from './Styled'
import ThemeContext from '../../context/ThemeContext'
import MenuContext from '../../context/MenuContext'
import { WIDTH_MEDIA_QUERY } from './../../utils/Constants'
import { Link } from 'gatsby'

export default ({ menuLinks, socialLinks, toggleMenu }) => {
  const { theme, setTheme, Themes } = useContext(ThemeContext)
  const { menuToggle } = useContext(MenuContext)
  const [windowState, setWindowState] = useState(window.innerWidth)
  
  const handleResize = () => {
    setWindowState(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize);
  }, [windowState])

  const toggleTheme = () => {
    setTheme({
      darkMode: !theme.darkMode
    })
  }

  return (
    <NavBar menuToggle={menuToggle.isMenuOpen} darkMode={theme.darkMode} theme={Themes}>
      <Icons>
        {
          windowState < WIDTH_MEDIA_QUERY
            ? <Icon 
                onClick={() => toggleMenu()}
                styleType={{
                  width: '34px', 
                  height: '34px',
                  marginRight: '34px',
                  cursor: 'pointer',
                }} 
                icon={Close} 
              />
            : ''
            
        }
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
        {menuLinks.map(link =>
          <Link 
            style={{
              color: '#757A97',
              textDecoration: 'none'
            }} 
            to={link.link} 
            key={link.name}
          >{link.name}</Link>)}
      </Menu>
      <ToggleTheme>
        <ButtonToggleTheme 
          darkMode={theme.darkMode} 
          onClick={toggleTheme} />
      </ToggleTheme>
      <SocialLinks>
        {
          socialLinks.map(social =>
            <SocialIcon
              key={social.name}
              url={social.url}
              iconName={social.name}
              styleType={{width: '24px', height: '24px'}}
            />
          )
        }
      </SocialLinks>
    </NavBar>
  )
}

