import React from 'react'
import Styled from 'styled-components'

const Tag = Styled.h4`
  margin-right: 15px;
  transition: ease-in-out 400ms;
  color: ${props => props.color};
  font-family: ${({font}) => font};
  font-size: ${({size}) => size};
  display: flex;
  align-items: center; 
`

export default function TechnologyItem(props) {
  let { text } = props

  return (
    <Tag
      {...props}
    >{text}</Tag>
  )
}
