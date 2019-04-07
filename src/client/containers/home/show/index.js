import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import * as Context from './../../context'
import { Logo, Hamburger, SocialLinks } from './../../../components'
import foto from './hugomeireles.jpg'
import { Link } from 'react-router-dom'
import { 
  Scene, SectionLogo,
  SectionHamburger, SectionFoto, SectionIntro, SectionSocialLinks,
  SectionTheme,
  Title, SubTilte,
  Into
} from './styled'

class Home extends Component {
  render() {
    return (
      <Context.ThemeContext.Consumer>
        { ({ state, toggleTheme }) => (
          <ThemeProvider theme={state.theme}>
            <Scene>
              <SectionLogo>
                <Logo />
              </SectionLogo>
              <SectionHamburger>
                <Hamburger />
              </SectionHamburger>
              <SectionFoto>
                <img src={foto} alt="foto" style={{width: '30vw'}}/>
              </SectionFoto>
              <SectionIntro>
                <h1>Hugo Meireles</h1>
                <h3>I'm Juniuor FullStack Developer</h3>
                <p>"Write code for humans and not for machines"</p>
                <p>I have serious passion build things for humans.</p>
                <p>I'm self thught and ...</p>
                <Link to="/about">See More +</Link>
              </SectionIntro>
              <SectionSocialLinks>
                <SocialLinks />
              </SectionSocialLinks>
              <SectionTheme>
                <button onClick={toggleTheme}>
                  { state.themeName }
                </button>
              </SectionTheme>
            </Scene>
          </ThemeProvider>  
        )}  
      </Context.ThemeContext.Consumer>
    )
  }
}



export default Home;