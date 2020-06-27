import styled from "styled-components"

export const IconWrapper = styled.svg`
  width: ${props => (props.size ? props.size : "35px")};
  height: ${props => (props.size ? props.size : "35px")};

  cursor: pointer;
`

export const LinkIcon = styled.a`
  color: #fff;
  opacity: 0.5;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
