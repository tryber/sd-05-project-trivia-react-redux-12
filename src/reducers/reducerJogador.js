import Actions from '../actions/index';

const initState = {
  nome: '',
  email: '',
  token: '',
  isLoading: false,
};

function ReducerJogador(state = initState, action) {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        nome: action.user,
        email: action.email,
      };
    case Actions.LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case Actions.TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
export default ReducerJogador;
