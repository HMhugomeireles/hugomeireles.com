import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/home/show'
import { GlobalStyle } from './../shared/styles'


export default class routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
