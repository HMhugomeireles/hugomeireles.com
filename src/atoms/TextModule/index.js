import React from 'react'
import Styled from 'styled-components'

const Tag = Styled.p`
  transition: ease-in-out 400ms;
  color: color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.textColorPrimary : light.textColorPrimary};
  font-family: ${({font}) => font};
  font-size: ${({size}) => size};
  margin: 0 auto;
  max-width: 450px;
  padding: 20px;
`

export default function TextModule(props) {
  return (
    <Tag
      {...props}
    />
  )
}
