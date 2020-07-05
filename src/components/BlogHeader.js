import React from "react"
import { HeaderContainer, Navigation, Menu, NavigationLink } from "../elements"

export function BlogHeader() {
  return (
    <HeaderContainer>
      <Navigation>
        <div>Logo</div>
        <Menu>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/blog">Notes</NavigationLink>
          </li>
        </Menu>
      </Navigation>
    </HeaderContainer>
  )
}
