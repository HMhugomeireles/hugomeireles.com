import React from "react"
import { Navigation, Menu, NavigationLink, HeaderWrapper } from "../elements"

const Link = ({ children }) => <div>{children}</div>

export function Header() {
  return (
    <HeaderWrapper>
      <div>Logo</div>
      <Navigation>
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
        </Menu>
        <div>icon menu</div>
      </Navigation>
    </HeaderWrapper>
  )
}
