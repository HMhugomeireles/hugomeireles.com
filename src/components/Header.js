import React from "react"
import {
  LinkWrapper,
  Menu,
  HeaderContainer,
  BlogTitle,
  WrapperContainer,
  WrapperMenuContainer,
} from "../elements"

import SearchIcon from "../assets/icons/search.svg"
import Logo from "../assets/icons/logo.svg"

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <WrapperMenuContainer>
          <Logo width="91" />
          <nav>
            <Menu>
              <li>
                <LinkWrapper to="/">Home</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/blog">Notes</LinkWrapper>
              </li>
              <li>
                <SearchIcon width="24" height="24" fill="#1976D2" />
              </li>
            </Menu>
          </nav>
        </WrapperMenuContainer>
      </HeaderContainer>
      <BlogTitle>
        <WrapperContainer>
          <h1>📔Blog</h1>
          <p>My space where I write the things I have in the mind.</p>
          <p>In one word. kindergarten🏡</p>
        </WrapperContainer>
      </BlogTitle>
    </header>
  )
}
