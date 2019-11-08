import React from 'react'
import Styled from 'styled-components'

const Description = Styled.p`
  margin: 30px 0;
  transition: ease-in-out 400ms;
  color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.textColorPrimary : light.textColorPrimary};
  font-family: ${({font}) => font};
  font-size: ${({size}) => size};
`


export default function PostDescription(props) {
  return (
    <Description
      {...props}
    >
      {props.description}
    </Description>
  )
}
