import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Tema from './pages/tema';
import Contatos  from './pages/contato';
import Cep from './Pages/cep';
import React, { useState } from 'react';
import { Container,Button,lightTheme,darkTheme } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';


function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }
  return (
    <> 
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
     <h1>CONFIGURAÇÃO DE UM LOGO</h1>
    <Button onClick={mudarTheme}>BOTÃO</Button>
    <hr/>
    <Container>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/sobre' element={<Sobre />} />
                          <Route path='/contato' element={< />} />
                          <Route path='/cep' element={<Cep />} />
                    </Routes>
                  </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
