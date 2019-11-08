import Styled from 'styled-components'

export const ProjectContainer = Styled.article`
  margin: 0 auto;
  margin-bottom: 5px; 
  padding: 10px 15px;
  background: #292A37;
  max-height: 125px;
  max-width: 600px;
  position: relative;
  overflow: hidden;

  a {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  span {
    display: flex;
    margin-top: 15px;
  }

  &:after {
    cursor: pointer;
    content: '+';
    position: absolute;
    right: -25px;
    bottom: -25px;
    width: 70px;
    height: 70px;
    background: #005DB2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30%;  
  }
`

export const ColorBar = Styled.div`
  width: 7px;
  height: 100%;
  background: #005DB2;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
`