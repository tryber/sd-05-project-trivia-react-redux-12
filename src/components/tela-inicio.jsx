import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../trivia.png';
import { login, GetToken } from '../actions/userAction';
import Formulario from './form';

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
  login() {
    this.props.setLogin(this.state.user, this.state.email);
    this.props.setToken();
  }
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Link to="/src"><button data-testid="btn-settings">Configurações</button></Link>
          <Formulario
            login={this.login}
            habilitaBotao={this.habilitaBotao}
            button={this.state.button}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (user, email) => dispatch(login(user, email)),
  setToken: () => (dispatch(GetToken())),
});
TelaInicio.propTypes = {
  setLogin: propTypes.func.isRequired,
  setToken: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TelaInicio);
