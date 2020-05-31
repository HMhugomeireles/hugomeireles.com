import Styled from 'styled-components'

export const PostContainer = Styled.article`
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 5px; 
  cursor: pointer;

  &:hover {
    background: linear-gradient(360deg, #005DB200 0%, #0076E222 100%);
  }

  a {
    

    &:hover {

    }
  }

  span {
    display: flex;
    margin-top: 15px;
  }


  hr {
    width: 50%;
    margin: 15px auto; 
    border: 1px solid #292A37;
  }
`

export const ColorBar = Styled.div`
  width: 100%;
  height: 5px;
  background: #005DB2;
  display: block;
  margin: 5px 0; 
`

export const PostFooter = Styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`