import React from "react"
import styled from "styled-components"

const StyledEmoji = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : "1.25rem")};
  display: inline-block;
  user-select: none;
`

export default function Emoji({ ariaLabel, children, emoji, ...props }) {
  return (
    <StyledEmoji {...props}>
      <span role="img" aria-label={ariaLabel}>
        {emoji}
      </span>
    </StyledEmoji>
  )
}
