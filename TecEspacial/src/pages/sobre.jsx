import React from 'react';
import Menu from '../Componentes/menu';
import { TitlePage, Container, TwoDivs2 } from '../Estilos/Estilo';

export default () => {
  return (
    <Container>
      <Menu />
      <TitlePage>SOBRE</TitlePage>
      <TwoDivs2>
        <div>
          <h2 >INFORÇÕES DO PROJETO </h2>
          <p>-O projeto foi desenvolvido no Visual Studio Code</p>
          <p>-O projeto foi feito em VITE JS ultilizando REACT</p>
          <p>-Foi desenvolvido por Eduardo Bezerra</p>
          <p>-Projeto desenvolvido por um aluno da FIAP com a finalidade de entregar em um Checkpoint na aula de Responsive Web Developer</p>
        </div>
        <div>
          <img src="/vscode.webp" alt="codigosvscode" />
        </div>
      </TwoDivs2>
    </Container>
  );
}