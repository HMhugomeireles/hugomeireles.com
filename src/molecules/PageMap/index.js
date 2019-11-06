import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import ThemeContext from './../../context/ThemeContext'

const SiteMapAside = Styled.aside`
  display: flex; 
  margin-bottom: 1rem; 

  a {
    color: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.textColorPrimary : light.textColorPrimary};
    text-decoration: none;
    letter-spacing: 3px;
    font-size: 0.9rem;
    margin: 0 15px;

    background-image: linear-gradient(120deg, #005DB277 0%, #0076E2 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2rem;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;

    &:hover {
      background-size: 100% 100%;
    }
  }
`


export default function PageMap({ siteLinksMap }) {
  const { theme, Themes } = useContext(ThemeContext);
  
  return (
    <SiteMapAside darkMode={theme.darkMode} theme={Themes}>
      {siteLinksMap.siteMap.map((link, index) => 
        <Link 
          key={link.label + index} 
          to={link.to}
        >{link.label}</Link>
      )}
    </SiteMapAside>
  )
}
