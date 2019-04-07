import React from 'react'
import Routes from './routes'
import * as Context from './containers/context'

const App = () => {
  return (
    <Context.ThemeProvider>
      <Routes />
    </Context.ThemeProvider>
  )
}


export default App;