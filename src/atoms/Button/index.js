import React from 'react'
import styled from 'styled-components'
import Light from './../../images/light-theme.svg'
import Dark from './../../images/dark-theme.svg'

const MenuButton = styled.div`
  cursor: pointer;
`

export default ({ darkMode, onClick }) => {

  const toggleIcon = () => {
    return darkMode ? Light : Dark
  }

  return (
    <MenuButton onClick={onClick}>
      <img src={toggleIcon()} style={{ width: '45px', height: '45px'}} alt="toggle theme"/>
    </MenuButton>
  )
}