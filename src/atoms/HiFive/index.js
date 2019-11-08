import React from 'react'
import Styled from 'styled-components'
import HiFiveIcon from './../../images/pan_tool_24px_rounded.svg'

const Hand = Styled.p`
  margin: 30px 0;
  transition: ease-in-out 400ms;
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`

export default function HiFive(props) {
  return (
    <Hand>
      <img src={HiFiveIcon}  alt="hi five icon"/>
      {props.hiFiveNumber}
    </Hand>
  )
}
