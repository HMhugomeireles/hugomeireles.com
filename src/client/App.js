import React, { Component } from 'react'
import Routes from './routes'

export default class App extends Component {
  render(props) {
    return (
      <Routes {...props}/>
    )
  }
}
