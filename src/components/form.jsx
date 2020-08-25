import React from 'react';
import { Link } from 'react-router-dom';

function FormularioLog(props) {
  return (
    <form>
      <input
        placeholder="Nome do Jogador"
        onChange={props.habilitaBotao}
        type="text"
        data-testid="input-player-name"
      />
      <br />
      <input
        placeholder="Email do Gravatar"
        onChange={props.habilitaBotao}
        type="email"
        data-testid="input-gravatar-email"
      />
      <br />
      <Link to="/telaDeJogo">
        <button
          type="submit"
          onClick={props.login}
          disabled={props.button}
          data-testid="btn-play"
        >
          Jogar
          </button>
      </Link>
    </form>
  )
}

export default FormularioLog;