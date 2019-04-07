import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import * as Context from './../../context'
import { Logo, Hamburger, SocialLinks } from './../../../components'
import { 
  Scene, SectionLogo,
  SectionHamburger, SectionFoto, SectionIntro, SectionSocialLinks,
  Title, SubTilte,
  Into
} from './styled'

class Home extends Component {
  render() {
    return (
      <Context.ThemeContext.Consumer>
        { context => (
          <ThemeProvider theme={context.state.theme}>
            <Scene>
              <SectionLogo>
                <Logo />
              </SectionLogo>
              <SectionHamburger>
                <Hamburger />
              </SectionHamburger>
              <SectionFoto>
                foto              
              </SectionFoto>
              <SectionIntro>
                <h1>Hugo Meireles</h1>
                <h3>I'm Juniuor FullStack Developer</h3>
                <p>"Write code for humans and not for machines"</p>
                <p>I have serious passion build things for humans.</p>
                <p>I'm self thught and ...</p>
                <button>See More +</button>
              </SectionIntro>
              <SectionSocialLinks>
                <SocialLinks />
              </SectionSocialLinks>
            </Scene>
          </ThemeProvider>  
        )}  
      </Context.ThemeContext.Consumer>
    )
  }
}



export default Home;