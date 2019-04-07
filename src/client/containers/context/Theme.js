import React, { Component } from 'react'
import { Dark, Light } from './../../../shared/styles/themes'

export const ThemeContext = React.createContext();

export class ThemeProvider extends Component {
  state = {
    themeName: 'Light',
    theme: Dark,
  };

  toggleTheme = () => {
    this.setState({
      themeName: this.state.themeName === 'Dark' ? 'Light' : 'Dark',
      theme: this.state.theme === Dark ? Light : Dark
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        state: this.state,
        toggleTheme: this.toggleTheme
      }}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}
