import styled from 'styled-components';

//ESTILOS GERAIS:

export const lightTheme={
    corFundo:'#001C30',
    corTexto:'#DAFFFB',
    corTitulo:'#84A7A1'
 }
 export const darkTheme={
    corFundo:'#4E6E81',
    corTexto:'#BAD7E9',
    corTitulo:'#B2F9FC'
 }


export const Container = styled.div`
    background-color: ${props=> props.theme.corFundo};
    color: ${props=> props.theme.corTexto};
`
export const Button = styled.button`
        padding:10px;
        border:none;
        background-color:#176B87;
        color: #DAFFFB;
        margin:10px;
        font-family: fantasy;
        font-size: 15px;

        &:hover {
        color: #64CCC5;
        }
`
export const TitlePage = styled.h1 `
    color:${props=> props.theme.corTitulo};
    font-size:20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

`
//estilizando MENU:

export const MenuBarra = styled.nav`
background: #176B87;
display: flex;
justify-content: center;
width: 100%;
`
  
export const LinkMenu = styled.a`
display: inline-block;
text-decoration: none;
padding: 20px;
color: #DAFFFB;
font-size: 30px;
font-family: fantasy;

&:hover {
    color: #64CCC5;
    }
`

//estilizando HOME:

export const TwoDivs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 17px;

  & > div:first-child {
    margin-right: 25px; 
  }
`;



//estilizando SOBRE:

export const TwoDivs2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 17px;
  color: #fff;
  

  & > div:first-child {
      
  }

  & > div:last-child {
    margin-left: 100px;
  }
`;
