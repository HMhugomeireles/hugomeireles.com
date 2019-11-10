import React from 'react'
import Styled from 'styled-components'

const Tag = Styled.p`
  margin-right: 15px;
  transition: ease-in-out 400ms;
  color: color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.textColorPrimary : light.textColorPrimary};
  font-family: ${({font}) => font};
  font-size: ${({size}) => size}; 
`

export default function TextBase(props) {
  return (
    <Tag
      {...props}
    />
  )
}
