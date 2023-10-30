import { MenuBarra, LinkMenu } from '../Estilos/Estilo';

function Menu() {
  return (
    <MenuBarra>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li><LinkMenu a href="/">HOME</LinkMenu></li>
        <li><LinkMenu a href="/contato">CONTATO</LinkMenu></li>
        <li><LinkMenu a href="/sobre">SOBRE</LinkMenu></li>
        <li><LinkMenu a href="/tema">TEMA</LinkMenu></li>
      </ul>
    </MenuBarra>
  );
}

export default Menu;



