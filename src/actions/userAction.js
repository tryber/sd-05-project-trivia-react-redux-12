import { getToken } from '../APIs/Trivia';
import calcPontos from '../pontos/points';

const LOGIN = 'LOGIN';
const TOKEN = 'TOKEN';
const LOADING = 'LOADING';
const PONTOS = 'PONTOS';
const BOTAO_ON = 'BOTAO_ON';
const BOTAO_OFF = 'BOTAO_OFF';
const Actions = { LOGIN, TOKEN, LOADING, PONTOS, BOTAO_ON, BOTAO_OFF };

export function login(user, email) {
  return {
    type: LOGIN,
    user, // user: user
    email, // email: email
  };
}
export function Token(token) {
  return {
    type: TOKEN,
    token,
  };
}
export function loading(status) {
  return {
    type: LOADING,
    isLoading: status,
  };
}
export function GetToken() {
  return ((dispatch) => {
    dispatch(loading(true)); // indicação
    return getToken()
      .then((resp) => {
        dispatch(Token(resp));
        localStorage.setItem('token', resp);
      })
      .then(() => dispatch(loading(false))); // indicação
  });
}

export function pontos(tempo, dificuldade) {
  return {
    type: PONTOS,
    points: calcPontos(tempo, dificuldade),
  };
}

export function botaoOn() {
  return {
    type: BOTAO_ON,
  };
}

export function botaoOff() {
  return {
    type: BOTAO_OFF,
  };
}
export default Actions;
