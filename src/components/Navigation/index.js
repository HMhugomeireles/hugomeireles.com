import React from "react"
import { Nav, Wrapper, Logo, WrapperNav, StyledLink } from "./styles"
/* import Emoji from "../Ui/Emoji"
import { Theme } from "./../../context/Theme" */

function Navigation() {
  //const aa = React.useContext(Theme)
  const theme = {
    darkMode: true,
  }
  return (
    <Nav>
      <Wrapper>
        <Logo>
          <span role="img" aria-label="Logo Hugo Meireles">
            H🧑<span>M</span>
          </span>
        </Logo>
        <WrapperNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/blog">Blog</StyledLink>
          {/* <Emoji
            style={{ cursor: "pointer" }}
            onClick={() => console.log("s")}
            role="img"
            aria-label="Icon to change theme."
            emoji={theme.darkMode ? "☀️" : "🌙"}
          /> */}
        </WrapperNav>
      </Wrapper>
    </Nav>
  )
}

export default Navigation
