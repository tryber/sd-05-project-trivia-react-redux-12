import React from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetToken, login, restartGame } from '../../redux/actions/index';

class FormularioLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
      user: '',
      email: '',
      ChangePage: false,
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
      this.setState({ button: true });
    }
    this.setState({
      user: inputs[0].value,
      email: inputs[1].value,
    });
  }

  async login() {
    await this.props.restartGame();
    this.props.setLogin(this.state.user, this.state.email);
    await this.props.setToken();
    await this.setState({ ChangePage: true });
    localStorage.setItem('state', JSON.stringify(this.props.player));
    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', this.props.token);
    }
  }

  render() {
    if (this.state.ChangePage) return <Redirect to="/playing" />;
    return (
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
          type="button"
          onClick={this.login}
          disabled={this.state.button}
          data-testid="btn-play"
        >
          Jogar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  player: { player: state.reducerUser.player },
  token: state.reducerUser.token,
});

const mapDispatchToProps = (dispatch) => ({
  setLogin: (user, email) => dispatch(login(user, email)),
  setToken: () => dispatch(GetToken()),
  restartGame: () => dispatch(restartGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormularioLog);

FormularioLog.propTypes = {
  token: propTypes.string.isRequired,
  /*   login: propTypes.func.isRequired,
  button: propTypes.bool.isRequired,
  habilitaBotao: propTypes.func.isRequired, */
};
