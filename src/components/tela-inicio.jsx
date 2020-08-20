import React from "react";
import { Link } from 'react-router-dom';

/* // O campo de texto para o nome deve possuir o atributo data-testid com o valor input-player-name
O campo de texto para o email deve possuir o atributo data-testid com o valor input-gravatar-email
O botão "Jogar" que leva a pessoa ao jogo deve possuir o atributo data-testid com o valor btn-play
A pessoa que joga deve conseguir escrever seu nome no input de texto
A pessoa que joga deve conseguir escrever seu email no input de email
O botão "Jogar" deve ser desabilitado caso email e/ou nome não estejam preenchidos  */

class TelaInicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    };
    this.habilitaBotao = this.habilitaBotao.bind(this);
  }
  habilitaBotao() {
    const inputs = document.getElementsByTagName("input");

    if (inputs[0].value !== "" && inputs[1].value !== "") {
      this.setState({
        button: false,
      });
    } else {
      this.setState({
        button: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Link to="/src">
        <button data-testid="btn-settings">Configurações</button>
        </Link>
        <form>
          <input
            placeholder="Nome do Jogador"
            onChange={this.habilitaBotao}
            type="text"
            data-testid="input-player-name"
          />
          <br />
          <input
            placeholder="Email do Gravatar"
            onChange={this.habilitaBotao}
            type="email"
            data-testid="input-gravatar-email"
          />
          <br />
          <button
            type="submit"
            disabled={this.state.button}
            data-testid="btn-play"
          >
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

export default TelaInicio;
