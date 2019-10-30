import styled from 'styled-components'

export const NavBar = styled.nav`
  overflow: hidden;
  max-width: 390px;
  width: 95vw;
  height: 100vh;
  box-shadow: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.menuShadowValues : light.menuShadowValues};
  background: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.backgroundMenu : light.backgroundMenu};
  transition: ease-in-out 400ms;
`
export const Icons = styled.section`
  height: 10%;
  
`
export const LogoSection = styled.section`
  height: 40%;
  display: flex;
  justify-content: center;
  
`
export const Menu = styled.section`
  height: 35%;
  text-align: right;
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.menuButtonColor : light.menuButtonColor};
  font-size: 2rem;
`
export const ToggleTheme = styled.section`
  height: 5%;
  display: flex;
  justify-content: center;
  margin: 2.5% 0;
`
export const SocialLinks = styled.section`
  height: 10%;  
  display: flex;
  justify-content: space-around;
  align-items: bottom;
`
