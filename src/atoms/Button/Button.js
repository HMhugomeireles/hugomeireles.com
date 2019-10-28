import React from 'react'
import styled from 'styled-components'

const MenuButton = styled.button`
  font-weight: bold;
  font-size: 24px;
  color: ${props => props.theme.menuButtonColor};
`

export default ({text}) => {
  return <MenuButton>{text}</MenuButton>
}