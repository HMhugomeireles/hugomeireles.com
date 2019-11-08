import React from 'react'
import { HighLightContainer, HeaderPostImg } from './Styled'

export default function HighLightPost() {
  const image = 'https://dummyimage.com/640x360/fff/aaa'


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
        <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.</p>
        <footer>
          <h3>Technologys</h3>
          <p>Javscript Javscript Javscript</p>
        </footer>
      </article>
    </HighLightContainer>
  )
}