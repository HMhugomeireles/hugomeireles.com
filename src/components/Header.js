import React from "react"
import { Navigation, Menu, NavigationLink, HeaderWrapper } from "../elements"

export function Header() {
  return (
    <HeaderWrapper>
      <Navigation>
        <div>Logo</div>
        <Menu>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/blog">Learn Curve</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/tips">Tips</NavigationLink>
          </li>
          <div>menu</div>
        </Menu>
      </Navigation>
    </HeaderWrapper>
  )
}
