import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import logo from '../../trivia.png';
import Formulario from '../login/formulario';
import { restartGame } from '../../redux/actions/index';

class Login extends React.Component {
  componentDidMount() {
    this.props.restartGame();
    if (localStorage.getItem('ranking') !== null) {
      // this.props.updateRedx(JSON.parse(localStorage.getItem('ranking')));
    }
  }
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex-me">
          <Link to="/config">
            <button data-testid="btn-settings" className="fill-me">Configurações</button>
          </Link>
          <Formulario />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  restartGame: () => dispatch(restartGame()),
});
export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  restartGame: propTypes.func.isRequired,
};
