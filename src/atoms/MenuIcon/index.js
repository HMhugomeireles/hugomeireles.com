import React, { useState, useEffect } from 'react'
import Icon from './../../atoms/Icon/'
import { MenuIcon } from './Styled'
import MenuOpen from './../../images/menu_24px_rounded.svg'
import { WIDTH_MEDIA_QUERY } from './../../utils/Constants'

export default ({ toggleMenu  }) => {
  const [windowState, setWindowState] = useState(window.innerWidth)
  
  const handleResize = () => {
    setWindowState(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log(windowState);
    return () => window.addEventListener('resize', handleResize);
  }, [windowState])

  return (
    <MenuIcon>
      {
        windowState < WIDTH_MEDIA_QUERY
          ? <Icon 
              onClick={() => toggleMenu()}
              styleType={{
                width: '34px', 
                height: '34px',
                cursor: 'pointer'
              }} 
              icon={MenuOpen}
            />
          : ''
      }
    </MenuIcon>
  )
}
