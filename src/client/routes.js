import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, MemoryRouter } from 'react-router-dom'
import Home from './containers/home/show'
import { GlobalStyle } from './../shared/styles'


export default class routes extends Component {
  render(props) {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" {...props}  component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
