import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeContext } from "../templates/layouts"
import Emoji from "../Ui/Emoji"

const Nav = styled.nav`
  height: 80px;
  padding: 10px;
  background: ${({ theme }) => theme.backgroundMenu};
  box-shadow: ${({ theme }) => theme.shadowMenu};
  margin-bottom: 30px;
`
const Wrapper = styled.header`
  margin: 0 auto;
  width: 1024px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.menuButtonColor};
`
const WrapperNav = styled.div`
  width: 40%;
  display: flex;
`
const Logo = styled.div`
  font-size: 3rem;
  letter-spacing: -1vw;
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 900;
  user-select: none;

  span {
    span {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`

function Navigation() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  console.log(toggleTheme)
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
          <Emoji
            style={{ cursor: "pointer" }}
            onClick={toggleTheme}
            role="img"
            aria-label="Icon to change theme."
            emoji={theme.darkMode ? "☀️" : "🌙"}
          />
        </WrapperNav>
      </Wrapper>
    </Nav>
  )
}

export default Navigation
