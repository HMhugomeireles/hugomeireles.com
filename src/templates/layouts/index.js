import React, { Component } from 'react'

import ThemeContext from './../context/ThemeContext'

import NavBar from './../components/NavBar'

import Config from './../../data/MenuLinks'

export default class Layout extends Component {
  

  render() {

    return (
      <>
        <NavBar 
          menuLinks={Config.menuLinks}
        />
        <main>{children}</main>
      </>
    )

  }

}

