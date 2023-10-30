import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Tema from './pages/tema';
import Contatos from './pages/contato';
import { useState } from 'react';
import { Container, Button, TitlePage, lightTheme, darkTheme } from './Estilos/Estilo'; // Importe TitlePage corretamente
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState('light');

  const mudarTheme = () => {
    setTheme((mudar) => (mudar === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contatos />} />
            <Route path="/tema" element={<Tema />} />
          </Routes>
        </BrowserRouter>
        <Button onClick={mudarTheme}>BOTÃO</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
