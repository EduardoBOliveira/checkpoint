import React from 'react';
import Menu from '../Componentes/menu';
import { TitlePage, Container, TwoDivs } from '../Estilos/Estilo';

export default () => {
  return (
    <Container>
      <Menu />
      <TitlePage>HOME</TitlePage>
      <TwoDivs>
        <div>
          <h2>CHECKPOINT 2 REACT</h2>
          <p>Esse projeto consiste em 4 paginas simples: HOME, CONTATO, SOBRE, TEMA</p>
          <p>Pagina HOME: Apresentação do projeto(atual)</p>
          <p>Pagina CONTATO: Simula o cadastro de informções para contato</p>
          <p>Pagina SOBRE: Obtem informações do projeto e de seu desenvolvedor</p>
          <p>Pagina TEMA: Aborda brevemente sobre o tema do projeto TECNOLOGIAS ESPACIAIS</p>
        </div>
        <div>
          <img src="/futuroEspacial.jpg" alt="imagemFuturo" />
        </div>
      </TwoDivs>
    </Container>
  );
}
