import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { login, GetToken } from '../actions/index';


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
      user: '',
      email: '',
    };
    this.habilitaBotao = this.habilitaBotao.bind(this);
    this.login = this.login.bind(this);
  }
  habilitaBotao() {
    const inputs = document.getElementsByTagName('input');

    if (inputs[0].value !== '' && inputs[1].value !== '') {
      this.setState({
        button: false,
      });
    } else {
      this.setState({
        button: true,
      });
    }
    this.setState({
      user: inputs[0].value,
      email: inputs[1].value,
    });
  }
  login(event) {
    event.preventDefault();
    this.props.setLogin(this.state.user, this.state.email);
    this.props.setToken();
  }

  render() {
    return (
      <div>
        <Link to="/src"><button data-testid="btn-settings">Configurações</button></Link>
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
            onClick={this.login}
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


/* A pessoa jogadora deve iniciar um jogo

Após clicar no botão "Jogar", a pessoa deve ser redirecionada para a tela do jogo
Ao clicar no botão "Jogar",
um requisição para a API do Trivia deve ser feita para obter o token de jogador
O token deve ser armazenado na aplicação e enviado em todas as requisições seguintes.
Salve no LocalStorage o token recebido utilizando a chave token */
const mapDispatchToProps = (dispatch) => ({
  setLogin: (user, email) => dispatch(login(user, email)),
  setToken: () => (dispatch(GetToken())),
});
TelaInicio.propTypes = {
  setLogin: propTypes.func.isRequired,
  setToken: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TelaInicio);
