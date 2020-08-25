import { getToken } from '../APIs/Trivia';

/* function NomedaAção(optional){
  return {
    type: "TIPO DA AÇÃO",
  }
} */
const LOGIN = 'LOGIN';
const TOKEN = 'TOKEN';
const LOADING = 'LOADING';
const Actions = { LOGIN, TOKEN, LOADING };

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
export default Actions;
