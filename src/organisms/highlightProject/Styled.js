import Styled from 'styled-components'

export const HighLightContainer = Styled.article`
  
  background: #292A37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1.5rem;
    transition: ease-in-out 400ms;
  }

  header, p, footer {
    padding: 1rem 2rem;
  }

  @media (min-width: 1000px) {
    max-width: 640px;
  }
`