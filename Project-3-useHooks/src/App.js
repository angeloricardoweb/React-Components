import React from 'react'
import styled from 'styled-components'

import Routes from './routes.js'

const Header = styled.header`
width: 100vw;
padding: 16px;
background-color: #c2c2c2;
`



function App() {
  return (
    <div>
      <Header> <h1>Bem Vindo ao React Router DOM</h1> </Header>
      <Routes />

    </div>
  );
}

export default App;
