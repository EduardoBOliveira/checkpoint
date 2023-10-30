import React from 'react';
import Menu from '../Componentes/menu';
import { TitlePage, Container, TwoDivs } from '../Estilos/Estilo';

export default () => {
  return (
    <Container>
      <Menu />
      <TitlePage>TEMA</TitlePage>
      <TwoDivs>
        <div>
          <h2>O futuro das Tecnologias espaciais</h2>
          <p>O avanço das tecnologias espaciais nas últimas décadas tem aberto portas para o cumprimento de um sonho que há muito tempo cativa a 
            imaginação da humanidade: a possibilidade de morar em outros planetas. À medida que a exploração espacial se torna mais sofisticada e 
            acessível, os horizontes da colonização planetária começam a se expandir. Inicialmente, a ideia de viver em outro mundo pode parecer um 
            cenário futurista e distante, mas avanços em propulsão espacial, sustentabilidade ambiental e pesquisa planetária estão transformando 
            esse sonho em uma meta alcançável. À medida que a Terra enfrenta desafios ambientais e limitações de recursos, 
            a colonização de outros planetas oferece a promessa de uma alternativa viável para a humanidade, mantendo viva a curiosidade inerente de explorar o desconhecido. 
            Com iniciativas como a exploração de Marte, estamos testemunhando os primeiros passos em direção a um futuro onde morar em outros planetas pode ser mais do que um sonho, 
            mas uma realidade empolgante.</p>
        </div>
        <div>
          <img src="/futuroEspacial.jpg" alt="imagemFuturo" />
        </div>
      </TwoDivs>
    </Container>
  );
}
