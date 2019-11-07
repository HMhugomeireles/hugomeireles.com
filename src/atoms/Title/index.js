import React from 'react'
import Styled from 'styled-components'


const TitleH2 = Styled.h2`
  transition: ease-in-out 400ms;
  color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.textColorPrimary : light.textColorPrimary};
  font-family: ${({font}) => font};
  font-size: ${({size}) => size};
`

export default function Title(props) {
  let { text } = props

  return (
    <TitleH2
      {...props}
    >{text}</TitleH2>
  )
}
