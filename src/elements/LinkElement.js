import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const LinkWrapper = styled(props => <Link {...props} />)`
  height: 58px;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.hub.blue[300]};
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "IBM Plex Sans", sans-serif;
  }
`
