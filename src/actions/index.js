import { getToken } from '../APIs/Trivia';
import calcPontos from '../pontos/points';
/* function NomedaAção(optional){
  return {
    type: "TIPO DA AÇÃO",
  }
} */
const LOGIN = 'LOGIN';
const TOKEN = 'TOKEN';
const LOADING = 'LOADING';
const PONTOS = 'PONTOS';
const BOTAO = 'BOTAO';
const Actions = { LOGIN, TOKEN, LOADING, PONTOS, BOTAO };

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

export function botao() {
  return {
    type: BOTAO,
  };
}
export default Actions;
