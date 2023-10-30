import React, { useState } from 'react';
import Menu from '../Componentes/menu';
import { TitlePage } from '../Estilos/Estilo';
import axios from 'axios';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  function handleNomeChange(e) {
    setNome(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleTelefoneChange(e) {
    setTelefone(e.target.value);
  }

  function handleCepChange(e) {
    setCep(e.target.value);
  }

  function pesquisaCep() {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(function (response) {
        if (response.data && !response.data.erro) {
          setData({ ...response.data, nome, email, telefone });
          setError(null);
        } else {
          setData({});
          setError('CEP não encontrado');
        }
      })
      .catch(function (error) {
        setData({});
        setError('CEP não encontrado');
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    pesquisaCep();

    
  }

  return (
    <>
      <Menu />
      <TitlePage>CONTATO</TitlePage>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={handleNomeChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="tel"
            value={telefone}
            onChange={handleTelefoneChange}
          />
        </div>
        <div>
          <label>CEP:</label>
          <input
            type="text"
            value={cep}
            onChange={handleCepChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <div>
        {error && <p>{error}</p>}
        {data.cep && (
          <div>
            <p>Nome: {data.nome}</p>
            <p>Email: {data.email}</p>
            <p>Telefone: {data.telefone}</p>
            <p>CEP: {data.cep}</p>
            <p>Logradouro: {data.logradouro}</p>
            <p>Complemento: {data.complemento}</p>
            <p>Bairro: {data.bairro} </p>
            <p>UF: {data.uf}</p>
            <p>DDD: {data.ddd}</p>
            <p>CONTATO CADASTRADO COM SUCESSO!</p>
          </div>
        )}
      </div>
    </>
  );
}
``
