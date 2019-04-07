import React, { Fragment } from 'react'
import styled from 'styled-components'

const Logo = () => (
    <LogoContainer>
      <span>H<span>M</span></span>
    </LogoContainer>
)

export default Logo;

const LogoContainer = styled.span`
  span {
    font-size: 2rem;
    padding: 10px;

    span {
      background: ${props => props.theme.colors.colorAction};
      color: #fff;
    }
  }
`;