import React, { useContext } from 'react'
import { HighLightContainer, HeaderPostImg } from './Styled'
import TextModule from './../../atoms/TextModule/'
import ThemeContext from './../../context/ThemeContext'

export default function HighLightPost() {
  const { theme, Themes } = useContext(ThemeContext);
  const image = 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

  return (
    <HighLightContainer>
      <HeaderPostImg 
        src={image}
      />
      <article>
        <header>
          <h1>Project Name</h1>
          <small>August 24, 2019</small>
        </header>
        <TextModule
          darkMode={theme.darkMode} 
          theme={Themes}
          font={'Arial'}
          size={'0.9rem'} 
        >O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.</TextModule>
        <footer>
          <h3>Technologys</h3>
          <p>Javscript Javscript Javscript</p>
        </footer>
      </article>
    </HighLightContainer>
  )
}