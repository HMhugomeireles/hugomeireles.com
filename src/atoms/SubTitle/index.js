import React from 'react'
import Styled from 'styled-components'

const SubTitleSmall = Styled.p`
  transition: ease-in-out 400ms;
  color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.textColorPrimary : light.textColorPrimary};
  font-family: ${({font}) => font};
  font-size: ${({size}) => size};
`

export default function SubTitle(props) {
  let { text } = props

  return (
    <SubTitleSmall
      {...props}
    >{text}</SubTitleSmall>
  )
}
