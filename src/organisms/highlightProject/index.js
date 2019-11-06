import React from 'react'
import { HighLightContainer } from './Styled'

export default function HighLightProject() {
  const image = 'https://dummyimage.com/640x360/fff/aaa'


  return (
    <HighLightContainer>
      <img src={image}  alt=""/>
      <header>
        <h1>Project Name</h1>
        <small>August 24, 2019</small>
      </header>
      <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada.</p>
      <footer>
        <h3>Technologys</h3>
        <p>Javscript Javscript Javscript</p>
      </footer>
    </HighLightContainer>
  )
}
