import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  height: 80px;
  padding: 10px;
  background: ${({ theme }) => theme.backgroundMenu};
  box-shadow: ${({ theme }) => theme.shadowMenu};
  margin-bottom: 30px;
`
export const Wrapper = styled.header`
  margin: 0 auto;
  width: 1024px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.menuButtonColor};
`
export const WrapperNav = styled.div`
  width: 40%;
  display: flex;
`
export const Logo = styled.div`
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
