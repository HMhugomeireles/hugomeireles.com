import React from 'react'
import Styled from 'styled-components'

const SubTitleSmall = Styled.p`
  margin-left: 30px;
  transition: ease-in-out 400ms;
  color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.textColorPrimary : light.textColorPrimary};
`

export default function TextBackground(props) {
  return (
    <SubTitleSmall
      {...props}
    />
  )
}
