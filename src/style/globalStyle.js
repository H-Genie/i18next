import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin : 0;
    padding : 0;
  }

  ul, ol, li {
    list-style: none;
    padding: 0;
  }
    
  a {
    text-decoration: none;
    color : inherit;
    cursor: pointer;
  }
`

export default GlobalStyle