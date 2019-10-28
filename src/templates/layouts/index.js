import React, { Component } from 'react'

import NavBar from './../../organisms/NavBar'

import { menuLinks, socialLinks } from './../../../data/Links'
import * as AllTheme from './../../../data/themes'
//import ThemeContext from './../../context/ThemeContext'
export default class Layout extends Component {
  state = {
    theme:  AllTheme.dark,
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme.name === 'dark' ? AllTheme.light : AllTheme.dark,
    })
  }

  render() {
    const { children } = this.props
    //console.log(this.props);

    return (
      <div>
        <NavBar 
          menuLinks={menuLinks}
          socialLinks={socialLinks}
          theme={this.state.theme}
          toggleTheme={this.toggleTheme}
        />
        <main>{children}</main>
      </div>
    )

  }

}

