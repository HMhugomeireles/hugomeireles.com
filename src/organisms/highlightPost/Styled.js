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


  @media (min-width: 1000px) {
    max-width: 840px;
  }
`

export const HeaderPostImg = Styled.header`
  background: url(${props => props.src});
  background-size: 100% 100%;
  background-position: center center; 
  background: #333;
  width: 49%;
`