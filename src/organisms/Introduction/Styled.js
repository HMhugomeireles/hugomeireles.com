import styled from 'styled-components'

export const WrapperSection = styled.section`
  padding: 100px 10px;
  max-width: 500px;
  margin: 0 auto;


  @media (min-width: 1000px) {
    padding: 10vh 0;

    max-width: 800px;
    margin: 0 auto;
  }
`

export const HeaderSection = styled.article`
  width: 90%;
  margin-bottom: 50px; 
  margin-left: 10%;

  @media (min-width: 1000px) {
    margin-bottom: 100px; 
    width: 70%;
    margin-left: 20%;
  }
`

