import Actions from '../actions/userAction';
import grava from '../APIs/crypto'

const initState = {
  nome: '',
  email: '',
  token: '',
  isLoading: false,
  placar: 0,
  botaoDisable: false,
};

function ReducerJogador(state = initState, action) {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        nome: action.user,
        email: action.email,
        gravatar: grava(action.email),
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
    case Actions.PONTOS:
      return {
        ...state,
        botaoDisable: true,
        placar: state.placar + action.points,
      };
    case Actions.BOTAO_ON:
      return {
        ...state,
        botaoDisable: false,
      };
    case Actions.BOTAO_OFF:
      return {
        ...state,
        botaoDisable: true,
      };
    default:
      return state;
  }
}
export default ReducerJogador;

/*
function embaralhar(arr, vezes) {
  const num = arr.length;
  for (let i = 0; i < vezes; i += 1) {
    const pos1 = Math.floor(Math.random() * num);
    const pos2 = Math.floor(Math.random() * num);
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
  }
  console.log(arr);
  return arr;

} */