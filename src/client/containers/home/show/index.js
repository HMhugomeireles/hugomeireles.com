import React, { Component } from 'react'
import styled from 'styled-components'

class Home extends Component {
  render() {
    return (
      <div>
        <Title>Hello Home</Title>
      </div>
    )
  }
}


const Title = styled.h1`
  font-size: 72px;
  background: -webkit-linear-gradient(#30CFD0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Home;