import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    font-family: sans-serif;
    background-color: #2a2a72;
    background-image: linear-gradient(125deg, #2a2a72 0%, #009ffd 74%);
  }
`