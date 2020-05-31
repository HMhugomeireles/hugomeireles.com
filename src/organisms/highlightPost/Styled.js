import Styled from 'styled-components'

export const HighLightContainer = Styled.article`
  margin: 0 auto;
  background: #292A37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between; 


  article {
    width: 49%;
  }


  @media (min-width: 500px) {
    max-width: 800px; 
    
    
  }

  @media (min-width: 1000px) {
    width: 100%;
    
    
  }
`

export const HeaderPostImg = Styled.header`
  display: none;

  @media (min-width: 700px) {
    display: block;
    background: url(${props => props.src});
    background-size: 150% 150%;
    background-position: center center; 
    width: 49%;
  }
`